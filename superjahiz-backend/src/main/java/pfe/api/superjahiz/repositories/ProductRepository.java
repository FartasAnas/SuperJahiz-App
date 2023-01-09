package pfe.api.superjahiz.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pfe.api.superjahiz.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
