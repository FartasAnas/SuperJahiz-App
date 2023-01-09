package pfe.api.superjahiz.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pfe.api.superjahiz.entities.Store;
import pfe.api.superjahiz.services.StoreService;

import java.util.List;

@RestController @RequiredArgsConstructor @RequestMapping("/store")
public class StoreController {
    private final StoreService storeService;

    // Post Methods
    @PostMapping("/add")
    public void addStore(@RequestBody Store store) {
        storeService.addStore(store);
    }

    // Get Methods
    @GetMapping("/all")
    public List<Store> getAllStores() {
        return storeService.getAllStores();
    }
    @GetMapping("/{id}")
    public Store getStoreById(@PathVariable("id") long id) {
        return storeService.getStoreById(id);
    }

    // Put Methods
    @PutMapping("/edit/{id}")
    public void updateStore(@PathVariable("id") long id, @RequestBody Store newStore) {
        storeService.updateStore(id, newStore);
    }

    // Delete Methods
    @DeleteMapping("/delete/{id}")
    public void deleteStore(@PathVariable("id") long id) {
        storeService.deleteStore(id);
    }
}
