package pfe.api.superjahiz.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pfe.api.superjahiz.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
