package pfe.api.superjahiz.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pfe.api.superjahiz.entities.UserOrder;
import pfe.api.superjahiz.services.UserOrderService;

import java.util.List;

@RestController @RequiredArgsConstructor @RequestMapping("/userOrder")
public class UserOrderController {
    public final UserOrderService userOrderService;

    // Post Methods
    @PostMapping("/add")
    public void addUserOrder(@RequestBody UserOrder userOrder) {
        userOrderService.addUserOrder(userOrder);
    }

    // Get Methods
    @GetMapping("/all")
    public List<UserOrder> getAllUserOrders() {
        return userOrderService.getAllUserOrders();
    }
    @GetMapping("/{id}")
    public UserOrder getUserOrderById(@PathVariable("id") long id) {
        return userOrderService.getUserOrderById(id);
    }

    // Put Methods
    @PutMapping("/edit/{id}")
    public void updateUserOrder(@PathVariable("id") long id, @RequestBody UserOrder newUserOrder) {
        userOrderService.updateUserOrder(id, newUserOrder);
    }

    // Delete Methods
    @DeleteMapping("/delete/{id}")
    public void deleteUserOrder(@PathVariable("id") long id) {
        userOrderService.deleteUserOrder(id);
    }
}
