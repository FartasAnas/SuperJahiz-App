package pfe.api.superjahiz.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pfe.api.superjahiz.entities.UserOrder;
import pfe.api.superjahiz.repositories.UserOrderRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service @Transactional @RequiredArgsConstructor
public class UserOrderService {
    public final UserOrderRepository userOrderRepository;

    // Post Methods
    public void addUserOrder(UserOrder userOrder) {
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
