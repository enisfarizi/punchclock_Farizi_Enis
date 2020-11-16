package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.Category;
import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.domain.Role;
import ch.zli.m223.punchclock.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {this.categoryRepository = categoryRepository;}

    public Category createCategory(Category category) {return categoryRepository.saveAndFlush(category);}

    public void deleteCategory(Category category) {this.categoryRepository.delete(category);}

    public List<Category> findAll() {
        return categoryRepository.findAll();
    }
}
