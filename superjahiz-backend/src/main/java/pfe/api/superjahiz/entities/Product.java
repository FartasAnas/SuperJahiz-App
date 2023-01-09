package pfe.api.superjahiz.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity @Data @Table(name = "products")
@NoArgsConstructor @AllArgsConstructor
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private float price;
    private Long inStock;
    private Long sold;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "StoreId")
    @JsonIncludeProperties(value = {"id","domainName","logoUrl","accentColor","contrastColor"})
    private Store store;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoryId")
    @JsonIncludeProperties(value = {"id","name"})
    private Category category;

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<OrderLine> orderLines = new ArrayList<>();

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY,cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIncludeProperties(value = {"id","url"})
    private List<Picture> pictures = new ArrayList<Picture>();

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY,cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIncludeProperties(value = {"id","name","content"})
    private List<Spec> specs = new ArrayList<Spec>();
}
