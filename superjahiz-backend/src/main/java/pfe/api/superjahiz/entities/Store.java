package pfe.api.superjahiz.entities;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity @Data @Table(name="stores")
@NoArgsConstructor @AllArgsConstructor
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String domainName;
    private String logoUrl;
    private String accentColor;
    private String contrastColor;

    @OneToMany(mappedBy = "store", fetch = FetchType.LAZY)
    @JsonIncludeProperties(value = {"id","name","description","price","inStock","sold"})
    private List<Product> products = new ArrayList<>();
}
