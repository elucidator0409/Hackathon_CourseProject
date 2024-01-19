package com.hackathon.finalproject.Controller.Admin;

import com.hackathon.finalproject.Model.CourseDto;
import com.hackathon.finalproject.Model.OrderDto;
import com.hackathon.finalproject.Model.ResponseDto;
import com.hackathon.finalproject.Model.UserDto;
import com.hackathon.finalproject.Repository.CourseRepository;
import com.hackathon.finalproject.Repository.UserRepository;
import com.hackathon.finalproject.Service.*;
import com.hackathon.finalproject.entity.*;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@org.springframework.stereotype.Controller
@RestController
@RequestMapping("admin")
@CrossOrigin
public class Controller {

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private CourseService courseService;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserMailService userMailService;

    @GetMapping("/courses")
    @ResponseBody
    public List<CourseDto> getAllCourses(){
        return courseService.getAllCourses().stream().map(Course -> modelMapper.map(Course, CourseDto.class))
                .collect(Collectors.toList());
    }

    //Get Course detail
    @GetMapping("/courses/{id}")
    @ResponseBody
    public Course getCourseById(@PathVariable(name = "id") Long courseId){
        Optional<Course> courseOptional = courseService.getCourseById(courseId);
        if (courseOptional.isPresent()){
            Course course = courseOptional.get();
            return course;

        }
        return null;
    }
    @PostMapping(value = "/add-order",
            consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<ResponseDto> addOrder(@RequestBody Order order){
        String message = "";
        try{
            Optional<User> userOptional = userService.getUserByEmail(order.getUserMail());

            if (userOptional.isPresent()) {
                System.out.println("+++++++++++++++++++++++++++Go inside loop!!!");

                User user = userOptional.get();

                List<Course> userCourses = user.getCourses();

                String[] orderCourseArray = order.getCourses().split(",");

                // Loop through the list of courses
                for (String courseIdString : orderCourseArray) {
                    Long courseId = Long.parseLong(courseIdString);

                        Optional<Course> foundOrderCourseOptional = courseRepository.findById(courseId);
                    Course foundOrderCourse = foundOrderCourseOptional.get();
                    boolean  foundCourseId = false;

                    System.out.println("Loop through course : " + courseIdString);


                    for (Course userCourse : userCourses){
                        if(foundOrderCourse.getCourseId().equals(userCourse.getCourseId())){
                            foundCourseId = true;
                            break;
                        }
                    }
                    if(!foundCourseId){
                        foundOrderCourse.getUsers().add(user);
                        courseRepository.save(foundOrderCourse);
                        user.getCourses().add(foundOrderCourse);
                        userRepository.save(user);
                    }
                }
            }

            orderService.store(order.getOrderId(), order.getOrderDate(), order.getAmount(), order.getStatus(), order.getCourses(), order.getUserMail());
            message = "Uploaded order successfully: ";
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseDto(message));
        }catch (Exception e){
            message = "Could not upload oder!";
            System.out.println("Exception");
        }
        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseDto(message));
    }

    @GetMapping("/order/{mail}")
    @ResponseBody
    public List<OrderDto> getOrderById(@PathVariable(name = "mail") String userMail){
        List<OrderDto> result = new ArrayList<>();
        for (Order order : orderService.getOrderByMail(userMail)) {
            result.add(modelMapper.map(order, OrderDto.class));
        }
        return result;
    }

    @GetMapping("/courses-tutor")
    @ResponseBody
    public List<UserDto> getAllTutorOwnCourses(){

        List<UserDto> userDtos = courseService.getAllCourses().stream().map(course -> course.getUsers().get(0))
                .collect(Collectors.toList()).stream().map(user -> modelMapper.map(user, UserDto.class))
                .collect(Collectors.toList());
        return userDtos;
    }

    @GetMapping("/user/{email}")
    @ResponseBody
    public UserDto getUserByEmail(@PathVariable(name = "email") String email){
        return modelMapper.map(userService.getUserByEmail(email).get(), UserDto.class);
    }


    @GetMapping("/courses-of-mail/{email}")
    public List<Course> getCoursesByUserEmail(@PathVariable String email) {
        List<Course> courses = userService.getCoursesByUserEmail(email);

        // Handle the case where no user is found with the given email
        if (courses == null) {
            return Collections.emptyList(); // or return null;
        }

        return courses;
    }



    @PostMapping("/courses/{id}/{email}")
    public ResponseEntity<ResponseDto> AddUserMailToCourse(@PathVariable("id") String id, @PathVariable("email") String email){
        long courseId = Long.parseLong(id);
        System.out.println(email);
        System.out.println(courseId);

        try{
            Course course = courseService.getCourseById(Long.parseLong(id)).get();
            UserMail userMail = userMailService.store(email, course);
//        courseService.update(courseId, course);
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseDto("success"));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseDto("fail"));
        }
    }

    @GetMapping("/tutor")
    @ResponseBody
    public  List<UserDto> getAllTutor(){
        System.out.println("getAllTutor");
        userService.getAllTutor();
        return userService.getAllTutor().stream().map(User -> modelMapper.map(User, UserDto.class)).collect(Collectors.toList());
    }

    @PostMapping("/add-course")
    public ResponseEntity<ResponseObject> addCourse(@RequestBody Course course){
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject(200, "Add course successfully", courseService.save(course))
        );

    }

}
