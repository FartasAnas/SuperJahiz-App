package pfe.api.superjahiz.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pfe.api.superjahiz.entities.Picture;
import pfe.api.superjahiz.services.PictureService;

import java.util.List;

@RestController @RequiredArgsConstructor @RequestMapping("/picture")
public class PictureController {
    private final PictureService pictureService;

    // Post Methods
    @RequestMapping("/add")
    public void addPicture(@RequestBody Picture picture) {
        pictureService.addPicture(picture);
    }

    // Get Methods
    @RequestMapping("/all")
    public List<Picture> getAllPictures() {
        return pictureService.getAllPictures();
    }
    @RequestMapping("/{id}")
    public Picture getPictureById(@PathVariable("id") long id) {
        return pictureService.getPictureById(id);
    }

    // Put Methods
    @RequestMapping("/edit/{id}")
    public void updatePicture(@PathVariable("id") long id, @RequestBody Picture newPicture) {
        pictureService.updatePicture(id, newPicture);
    }

    // Delete Methods
    @RequestMapping("/delete/{id}")
    public void deletePicture(@PathVariable("id") long id) {
        pictureService.deletePicture(id);
    }
}
