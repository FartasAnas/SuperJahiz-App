package pfe.api.superjahiz.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pfe.api.superjahiz.entities.AppUser;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    AppUser findByUsername(String username);
    AppUser findByEmail(String email);
}

