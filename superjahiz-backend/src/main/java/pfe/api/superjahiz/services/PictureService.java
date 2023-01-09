package pfe.api.superjahiz.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pfe.api.superjahiz.entities.Picture;
import pfe.api.superjahiz.repositories.PictureRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service @Transactional @RequiredArgsConstructor
public class PictureService {
    public final PictureRepository pictureRepository;

    // Post Methods
    public void addPicture(Picture picture) {
        pictureRepository.save(picture);
    }

    // Get Methods
    public List<Picture> getAllPictures() {
        return pictureRepository.findAll();
    }
    public Picture getPictureById(long id) {
        return pictureRepository.findById(id).get();
    }

    // Put Methods
    public void updatePicture(long id, Picture newPicture) {
        Picture pictureToUpdate = pictureRepository.findById(id).get();
        pictureToUpdate.setUrl(newPicture.getUrl()!=null ? newPicture.getUrl() : pictureToUpdate.getUrl());
        pictureRepository.save(pictureToUpdate);
    }

    // Delete Methods
    public void deletePicture(long id) {
        pictureRepository.deleteById(id);
    }
}
