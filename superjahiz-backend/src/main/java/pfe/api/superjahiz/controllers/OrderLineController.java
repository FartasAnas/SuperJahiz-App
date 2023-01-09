package pfe.api.superjahiz.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pfe.api.superjahiz.entities.OrderLine;
import pfe.api.superjahiz.services.OrderLineService;

import java.util.List;

@RestController @RequiredArgsConstructor @RequestMapping("/orderline")
public class OrderLineController {
    public final OrderLineService orderLineService;
    // Post Methods
    @PostMapping("/add")
    public void addOrderLine(@RequestBody OrderLine orderLine) {
        orderLineService.addOrderLine(orderLine);
    }

    // Get Methods
    @GetMapping("/all")
    public List<OrderLine> getAllOrderLines() {
        return orderLineService.getAllOrderLines();
    }
    @GetMapping("/{id}")
    public OrderLine getOrderLineById(@PathVariable("id") long id) {
        return orderLineService.getOrderLineById(id);
    }

    // Put Methods
    @PutMapping("/edit/{id}")
    public void updateOrderLine(@PathVariable("id") long id, @RequestBody OrderLine orderLine) {
        orderLineService.updateOrderLine(id, orderLine);
    }

    // Delete Methods
    @PostMapping("/delete/{id}")
    public void deleteOrderLine(@PathVariable("id") long id) {
        orderLineService.deleteOrderLine(id);
    }
}
