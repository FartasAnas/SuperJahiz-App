package pfe.api.superjahiz.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pfe.api.superjahiz.entities.Store;
import pfe.api.superjahiz.repositories.StoreRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service @Transactional @RequiredArgsConstructor
public class StoreService {
    private final StoreRepository storeRepository;

    // Post Methods
    public void addStore(Store store) {
        storeRepository.save(store);
    }

    // Get Methods
    public List<Store> getAllStores() {
        return storeRepository.findAll();
    }
    public Store getStoreById(Long id) {
        return storeRepository.findById(id).get();
    }

    // Put Methods
    public void updateStore(Long id, Store newStore) {
        Store storeToUpdate = storeRepository.findById(id).get();
        storeToUpdate.setDomainName(newStore.getDomainName()!=null ? newStore.getDomainName() : storeToUpdate.getDomainName());
        storeToUpdate.setLogoUrl(newStore.getLogoUrl()!=null ? newStore.getLogoUrl() : storeToUpdate.getLogoUrl());
        storeToUpdate.setAccentColor(newStore.getAccentColor()!=null ? newStore.getAccentColor() : storeToUpdate.getAccentColor());
        storeToUpdate.setContrastColor(newStore.getContrastColor()!=null ? newStore.getContrastColor() : storeToUpdate.getContrastColor());
        storeRepository.save(storeToUpdate);
    }

    // Delete Methods
    public void deleteStore(Long id) {
        storeRepository.deleteById(id);
    }
}
