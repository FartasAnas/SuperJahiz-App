package pfe.api.superjahiz.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pfe.api.superjahiz.entities.Product;
import pfe.api.superjahiz.services.ProductService;

import java.util.List;

@RestController @RequiredArgsConstructor @RequestMapping("/product")
public class ProductController {
    public final ProductService productService;

    // Post Methods
    @RequestMapping("/add")
    public void addProduct(@RequestBody Product product) {
        productService.addProduct(product);
    }

    // Get Methods
    @GetMapping("/all")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }
    @RequestMapping("/{id}")
    public Product getProductById(@PathVariable("id") long id) {
        return productService.getProductById(id);
    }

    // Put Methods
    @RequestMapping("/edit/{id}")
    public void updateProduct(@PathVariable("id") long id, @RequestBody Product newProduct) {
        productService.updateProduct(id, newProduct);
    }

    // Delete Methods
    @RequestMapping("/delete/{id}")
    public void deleteProduct(@PathVariable("id") long id) {
        productService.deleteProduct(id);
    }
}
