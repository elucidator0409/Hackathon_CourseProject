-- INSERT INTO users (name, email, password) VALUES
--     ('Lisa', 'lisa@gmail.com', '12345'),
--     ('Jaca', 'jaca@gmail.com', '12345');

INSERT INTO users (name, email, password, role)
VALUES ("lisa", "lisa@gmail.com", "$2a$10$ngZK2msAG0HXy2SeKnuqnetP5I05s1W1YSdpHum9VkkZh7ZUMsBjK", "TUTOR");
INSERT INTO users (name, email, password, role)
VALUES ("itachi", "lisa1@gmail.com", "$2a$10$ngZK2msAG0HXy2SeKnuqnetP5I05s1W1YSdpHum9VkkZh7ZUMsBjK", "TUTOR");
INSERT INTO users (name, email, password, role)
VALUES ("hinata", "lisa2@gmail.com", "$2a$10$ngZK2msAG0HXy2SeKnuqnetP5I05s1W1YSdpHum9VkkZh7ZUMsBjK", "TUTOR");
INSERT INTO users (name, email, password, role)
VALUES ("nature", "lisa3@gmail.com", "$2a$10$ngZK2msAG0HXy2SeKnuqnetP5I05s1W1YSdpHum9VkkZh7ZUMsBjK", "TUTOR");
INSERT INTO users (name, email, password, role)
VALUES ("luffy", "lisa4@gmail.com", "$2a$10$ngZK2msAG0HXy2SeKnuqnetP5I05s1W1YSdpHum9VkkZh7ZUMsBjK", "TUTOR");
INSERT INTO users (name, email, password, role)
VALUES ("zaro", "lisa5@gmail.com", "$2a$10$ngZK2msAG0HXy2SeKnuqnetP5I05s1W1YSdpHum9VkkZh7ZUMsBjK", "TUTOR");


INSERT INTO courses (name, price, desciption, rating, enroll, active, list_of_video, thumbnail,tutor)
    VALUES ('Java Complete Course', 50, 'Everything about java', 4.9, 200, 1,'https://youtu.be/yRpLlJmRo2w,https://youtu.be/LusTv0RlnSU,https://youtu.be/I5srDu75h_M','https://res.cloudinary.com/dzblifjhf/image/upload/v1690124299/e-learning/course2_ulmbyk.png','Diallo Liam');
INSERT INTO courses (name, price, desciption, rating, enroll,active, list_of_video, thumbnail,tutor)
VALUES ('Spring boot',70, 'Spring boot course', 4.7, 500, 1,'https://youtu.be/QDKsQQr-1wA,https://youtu.be/KJqFJ3-lTcA,https://youtu.be/VBviWbusHd8','https://res.cloudinary.com/dzblifjhf/image/upload/v1690124298/e-learning/course1_daopha.jpg','Amanda Cerny');
INSERT INTO courses (name, price, desciption, rating, enroll, active, list_of_video, thumbnail,tutor)
VALUES ('C Programming in One Shot',20, 'Everything about C', 4.1, 200, 1,'https://youtu.be/rQoqCP7LX60,https://youtu.be/7PSfRdeY5qE,https://youtu.be/wYvrBXUfFfw','https://res.cloudinary.com/dzblifjhf/image/upload/v1690166151/e-learning/Rectangle_75_xic75s.png','Sylvester Drolly');
INSERT INTO courses (name, price, desciption, rating, enroll, active, list_of_video, thumbnail,tutor)
VALUES ('Blender 3.0 Basics Course',59.99, 'The Blender Basics will guide you through your first steps in Blender 3x! ', 4.6, 200, 1,'https://youtu.be/6FaLHFJ2kKI,https://youtu.be/RqfSkU-Hp1A,https://youtu.be/_2Rq6PZf4bo, https://youtu.be/lLJilYum_lQ','https://res.cloudinary.com/dzblifjhf/image/upload/v1690166171/e-learning/Rectangle_76_lflyil.png','Roxanne Andrews');
INSERT INTO courses (name, price, desciption, rating, enroll, active, list_of_video, thumbnail,tutor)
VALUES ('Chess course',79.99, 'Learn how to play Chess the right way just like National Master Robert Ramirez', 4.4, 200, 1,'https://youtu.be/AshEhLcPHqU,https://youtu.be/GQvR_fLkNKo,https://youtu.be/6WD2NOJN4TQ','https://res.cloudinary.com/dzblifjhf/image/upload/v1690166172/e-learning/Rectangle_77_kca2vn.png','Leslie Truly');
INSERT INTO courses (name, price, desciption, rating, enroll, active, list_of_video, thumbnail,tutor)
VALUES ('Adobe Illustrator Complete',89.99, 'Everything about Adobe Illustrator', 4.7, 200, 1,'https://youtu.be/vd1vRpoWC3M,https://youtu.be/lW6dvZOOXlo,https://youtu.be/xRUxEqD2D5c','https://res.cloudinary.com/dzblifjhf/image/upload/v1690124299/e-learning/course2_ulmbyk.png','David Perry');
INSERT INTO courses (name, price, desciption, rating, enroll, active, list_of_video, thumbnail,tutor)
VALUES ('Option Trading',49.99, 'Option Trading Basic to Advanced Level Course', 4.2, 200, 1,'https://youtu.be/HSeiOcN3Y5Y,https://youtu.be/rhioAEy5Pss,https://youtu.be/s5EHyCHAcQs','https://res.cloudinary.com/dzblifjhf/image/upload/v1690124299/e-learning/course2_ulmbyk.png','Elucidator');
INSERT INTO courses (name, price, desciption, rating, enroll, active, list_of_video, thumbnail,tutor)
VALUES ('Beginner Guitar Course',69.99, 'The Beginner Guitar Course has tmysql -u<user> -p -e ''source filename.sql''hree grades, and Grade 1 is the first beginner guitar players', 4.9, 200, 1,'https://youtu.be/_QCt3UBTS1Y,https://youtu.be/X2EmpWr9vUc,https://youtu.be/MlV6WhM9YhE','https://res.cloudinary.com/dzblifjhf/image/upload/v1690124299/e-learning/course2_ulmbyk.png','Thor');


-- -- Each course must have at least one tutor
-- INSERT INTO user_course VALUES
--     (1,1),
--     (2,1),
--     (3,1),
--     (4,1),
--     (5,1),
--     (6,1),
--     (7,1),
--     (8,1);
