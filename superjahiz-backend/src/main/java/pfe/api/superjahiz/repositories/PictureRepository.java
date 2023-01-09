package pfe.api.superjahiz.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pfe.api.superjahiz.entities.Picture;

public interface PictureRepository extends JpaRepository<Picture, Long> {
}
