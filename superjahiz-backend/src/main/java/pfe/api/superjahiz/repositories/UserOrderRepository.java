package pfe.api.superjahiz.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pfe.api.superjahiz.entities.UserOrder;

public interface UserOrderRepository extends JpaRepository<UserOrder, Long> {
}
