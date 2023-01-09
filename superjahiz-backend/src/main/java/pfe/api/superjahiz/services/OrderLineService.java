package pfe.api.superjahiz.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pfe.api.superjahiz.entities.OrderLine;
import pfe.api.superjahiz.repositories.OrderLineRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service @Transactional @RequiredArgsConstructor
public class OrderLineService {
    public final OrderLineRepository orderLineRepository;

    // Post Methods
    public void addOrderLine(OrderLine orderLine) {
        orderLineRepository.save(orderLine);
    }

    // Get Methods
    public List<OrderLine> getAllOrderLines() {
        return orderLineRepository.findAll();
    }
    public OrderLine getOrderLineById(Long id) {
        return orderLineRepository.findById(id).get();
    }

    // Put Methods
    public void updateOrderLine(Long id, OrderLine newOrderLine) {
        OrderLine orderLineToUpdate = orderLineRepository.findById(id).get();
        orderLineToUpdate.setQuantity(newOrderLine.getQuantity());
        orderLineToUpdate.setTotal(newOrderLine.getTotal());
        orderLineRepository.save(orderLineToUpdate);
    }

    // Delete Methods
    public void deleteOrderLine(Long id) {
        orderLineRepository.deleteById(id);
    }
}
