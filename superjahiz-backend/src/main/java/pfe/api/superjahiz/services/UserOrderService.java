package pfe.api.superjahiz.services;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pfe.api.superjahiz.entities.OrderLine;
import pfe.api.superjahiz.entities.Product;
import pfe.api.superjahiz.entities.UserOrder;
import pfe.api.superjahiz.repositories.UserOrderRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service @Transactional @RequiredArgsConstructor @Slf4j
public class UserOrderService {
    public final UserOrderRepository userOrderRepository;
    public final ProductService productService;

    // Post Methods
    public void addUserOrder(UserOrder userOrder) {
        double totalPrice=0;
        for (OrderLine orderLine : userOrder.getOrderLines()) {
            log.info("orderline",orderLine);
            Product product=productService.getProductById(orderLine.getProduct().getId());
            orderLine.setTotal(product.getPrice()*orderLine.getQuantity());
            totalPrice+=orderLine.getTotal();
            product.setInStock(product.getInStock()-orderLine.getQuantity());

        }
        userOrder.setTotalPrice(totalPrice + 15);
        userOrderRepository.save(userOrder);
    }
    // Get Methods
    public List<UserOrder> getAllUserOrders() {
        return userOrderRepository.findAll();
    }
    public UserOrder getUserOrderById(Long id) {
        return userOrderRepository.findById(id).get();
    }

    // Put Methods
    public void updateUserOrder(Long id, UserOrder newUserOrder) {
        UserOrder userOrderToUpdate = userOrderRepository.findById(id).get();
        userOrderToUpdate.setShippingAddress(newUserOrder.getShippingAddress()!=null ? newUserOrder.getShippingAddress() : userOrderToUpdate.getShippingAddress());
        userOrderToUpdate.setTotalPrice(newUserOrder.getTotalPrice());
        userOrderRepository.save(userOrderToUpdate);
    }

    // Delete Methods
    public void deleteUserOrder(Long id) {
        userOrderRepository.deleteById(id);
    }
}
