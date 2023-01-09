package pfe.api.superjahiz.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pfe.api.superjahiz.entities.OrderLine;

public interface OrderLineRepository extends JpaRepository<OrderLine, Long> {
}
