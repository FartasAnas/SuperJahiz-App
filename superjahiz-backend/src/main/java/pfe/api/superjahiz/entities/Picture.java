package pfe.api.superjahiz.entities;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity @Data @Table(name = "pictures")
@NoArgsConstructor @AllArgsConstructor
public class Picture {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String url;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIncludeProperties(value = {"id","name"})
    @JoinColumn(name = "productId")
    private Product product;
}
