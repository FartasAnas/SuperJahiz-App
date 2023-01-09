package pfe.api.superjahiz.entities;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pfe.api.superjahiz.utils.ToLowerCaseDeserializer;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity @Data @Table(name = "appUsers")
@NoArgsConstructor @AllArgsConstructor
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    @JsonDeserialize(converter = ToLowerCaseDeserializer.class)
    private String username;

    private String password;

    @Column(unique = true)
    @JsonDeserialize(converter = ToLowerCaseDeserializer.class)
    private String email;

    private String firstName;

    private String lastName;

    private String phone;

    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Role> roles=new ArrayList<>();

    @OneToMany(mappedBy = "userId", fetch = FetchType.LAZY)
    @JsonIncludeProperties(value = {"id","shippingAddress","totalPrice","orderLines"})
    private List<UserOrder> orders = new ArrayList<>();
}
