package com.hackathon.finalproject.Repository;


import com.hackathon.finalproject.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query(value = "SELECT category_name FROM category ORDER BY id DESC LIMIT 8", nativeQuery = true)
    List<Category> findLatestCategories();
}
