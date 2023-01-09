package pfe.api.superjahiz.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pfe.api.superjahiz.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
