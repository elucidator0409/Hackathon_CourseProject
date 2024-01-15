package com.hackathon.finalproject.Service;

import com.hackathon.finalproject.entity.Category;

import java.util.List;

public interface CategoryService {

    Object save(Category category);

    List<Category> getLatestCategories();
}

