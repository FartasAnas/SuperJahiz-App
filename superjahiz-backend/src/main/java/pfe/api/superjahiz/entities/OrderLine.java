package pfe.api.superjahiz.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity @Data @Table(name = "orders")
@NoArgsConstructor @AllArgsConstructor
public class OrderLine {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "orderId")
    @JsonBackReference
    private UserOrder order;
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIdentityInfo(scope = Product.class,generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
    @JsonIncludeProperties(value = {"id","name","description","price","inStock","sold","pictures"})
    @JoinColumn(name = "productId")
    private Product product;

    private Long quantity;
    private float total;
}
