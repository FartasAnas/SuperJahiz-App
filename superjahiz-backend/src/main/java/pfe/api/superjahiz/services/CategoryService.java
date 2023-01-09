package pfe.api.superjahiz.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pfe.api.superjahiz.entities.Category;
import pfe.api.superjahiz.repositories.CategoryRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service @Transactional @RequiredArgsConstructor
public class CategoryService {
    public final CategoryRepository categoryRepository;

    // Post Methods
    public void addCategory(Category category) {
        categoryRepository.save(category);
    }

    // Get Methods
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
    public Category getCategoryById(Long id) {
        return categoryRepository.findById(id).get();
    }

    // Put Methods
    public void updateCategory(Long id, Category newCategory) {
        Category categoryToUpdate = categoryRepository.findById(id).get();
        categoryToUpdate.setName(newCategory.getName()!=null ? newCategory.getName() : categoryToUpdate.getName());
        categoryToUpdate.setPictureUrl(newCategory.getPictureUrl()!=null ? newCategory.getPictureUrl() : categoryToUpdate.getPictureUrl());
        categoryRepository.save(categoryToUpdate);
    }

    // Delete Methods
    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }
}
