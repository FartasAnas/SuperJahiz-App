package pfe.api.superjahiz.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pfe.api.superjahiz.entities.Spec;
import pfe.api.superjahiz.services.SpecService;

import java.util.List;

@RestController @RequiredArgsConstructor @RequestMapping("/spec")
public class SpecController {
    public final SpecService specService;

    // Post Methods
    @PostMapping("/add")
    public void addSpec(@RequestBody Spec spec) {
        specService.addSpec(spec);
    }

    // Get Methods
    @GetMapping("/all")
    public List<Spec> getAllSpecs() {
        return specService.getAllSpecs();
    }
    @GetMapping("/{id}")
    public Spec getSpecById(@PathVariable("id") long id) {
        return specService.getSpecById(id);
    }

    // Put Methods
    @PutMapping("/edit/{id}")
    public void updateSpec(@PathVariable("id") long id, @RequestBody Spec newSpec) {
        specService.updateSpec(id, newSpec);
    }

    // Delete Methods
    @DeleteMapping("/delete/{id}")
    public void deleteSpec(@PathVariable("id") long id) {
        specService.deleteSpec(id);
    }
}
