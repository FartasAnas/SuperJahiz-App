package pfe.api.superjahiz.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pfe.api.superjahiz.entities.Category;
import pfe.api.superjahiz.services.CategoryService;

import java.util.List;

@RestController @RequiredArgsConstructor @RequestMapping("/category")
public class CategoryController {
    public final CategoryService categoryService;

    // Post Methods
    @PostMapping("/add")
    public void addCategory(@RequestBody Category category) {
        categoryService.addCategory(category);
    }

    // Get Methods
    @GetMapping("/all")
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }
    @GetMapping("/{id}")
    public Category getCategoryById(@PathVariable("id") long id) {
        return categoryService.getCategoryById(id);
    }

    // Put Methods
    @PutMapping("/edit/{id}")
    public void updateCategory(@PathVariable("id") long id, @RequestBody Category newCategory) {
        categoryService.updateCategory(id, newCategory);
    }

    // Delete Methods
    @DeleteMapping("/delete/{id}")
    public void deleteCategory(@PathVariable("id") long id) {
        categoryService.deleteCategory(id);
    }
}
