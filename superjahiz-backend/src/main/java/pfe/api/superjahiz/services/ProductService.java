package pfe.api.superjahiz.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pfe.api.superjahiz.entities.Picture;
import pfe.api.superjahiz.entities.Product;
import pfe.api.superjahiz.entities.Spec;
import pfe.api.superjahiz.repositories.ProductRepository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service @Transactional @RequiredArgsConstructor
public class ProductService {
    public final ProductRepository productRepository;

    // Post Methods
    public void addProduct(Product product) {
        List<Spec> specs = product.getSpecs();
        List<Picture> pictures = product.getPictures();
        for (Spec spec : specs) {
            spec.setProduct(product);
        }
        for (Picture picture : pictures) {
            picture.setProduct(product);
        }
        productRepository.save(product);
    }

    // Get Methods
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    public Product getProductById(Long id) {
        return productRepository.findById(id).get();
    }

    // Put Methods
    public void updateProduct(Long id, Product newProduct) {
        Product productToUpdate = productRepository.findById(id).get();
        productToUpdate.setName(newProduct.getName()!=null ? newProduct.getName() : productToUpdate.getName());
        productToUpdate.setDescription(newProduct.getDescription()!=null ? newProduct.getDescription() : productToUpdate.getDescription());
        productToUpdate.setPrice(newProduct.getPrice());
        productToUpdate.setInStock(newProduct.getInStock());
        productToUpdate.setSold(newProduct.getSold());
        productRepository.save(productToUpdate);
    }

    // Delete Methods
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
