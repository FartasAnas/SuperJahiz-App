package pfe.api.superjahiz.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pfe.api.superjahiz.entities.Spec;
import pfe.api.superjahiz.repositories.SpecRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service @Transactional @RequiredArgsConstructor
public class SpecService {
    public final SpecRepository specRepository;

    // Post Methods
    public void addSpec(Spec spec) {
        specRepository.save(spec);
    }

    // Get Methods
    public List<Spec> getAllSpecs() {
        return specRepository.findAll();
    }
    public Spec getSpecById(Long id) {
        return specRepository.findById(id).get();
    }

    // Put Methods
    public void updateSpec(Long id, Spec newSpec) {
        Spec specToUpdate = specRepository.findById(id).get();
        specToUpdate.setName(newSpec.getName()!=null ? newSpec.getName() : specToUpdate.getName());
        specToUpdate.setContent(newSpec.getContent()!=null ? newSpec.getContent() : specToUpdate.getContent());
        specRepository.save(specToUpdate);
    }

    // Delete Methods
    public void deleteSpec(Long id) {
        specRepository.deleteById(id);
    }
}
