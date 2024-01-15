package com.hackathon.finalproject.Service.impl;

import com.hackathon.finalproject.Repository.CategoryRepository;
import com.hackathon.finalproject.entity.Category;
import com.hackathon.finalproject.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    CategoryRepository categoryRepository;


    @Override
    public Object save(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> getLatestCategories() {
        return categoryRepository.findLatestCategories();
    }
}
