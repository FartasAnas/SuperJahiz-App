package pfe.api.superjahiz.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pfe.api.superjahiz.entities.Role;
import pfe.api.superjahiz.exceptions.NotFoundException;
import pfe.api.superjahiz.services.RoleService;

import java.util.List;

@RestController @RequiredArgsConstructor @RequestMapping("/role")
public class RoleController {
    public final RoleService roleService;

    // get Methods
    @GetMapping("/all")
    public List<Role> getAllAppUsers() { return roleService.getAllRoles();  }
    @GetMapping("/{id}")
    public Role getRoleById(@PathVariable("id") long id) throws NotFoundException {
        return roleService.getRoleById(id);
    }

    // post Methods
    @PostMapping("/add")
    public Role addRole(@RequestBody Role role){ return roleService.addRole(role); }

    // update Methods
    @PutMapping("/update/{id}")
    public Role updateRole(@PathVariable("id") Long id,@RequestBody Role role) throws NotFoundException { return roleService.updateRole(id,role); }

    // delete Methods
    @DeleteMapping("/delete/{id}")
    public void deleteRole(@PathVariable("id") Long id){ roleService.deleteRole(id);  }
}
