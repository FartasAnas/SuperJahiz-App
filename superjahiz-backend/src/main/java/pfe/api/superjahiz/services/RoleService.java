package pfe.api.superjahiz.services;

import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pfe.api.superjahiz.entities.Role;
import pfe.api.superjahiz.exceptions.NotFoundException;
import pfe.api.superjahiz.repositories.RoleRepository;

import java.util.List;

@Service @Transactional @RequiredArgsConstructor
public class RoleService {
    private final RoleRepository roleRepository;

    // get Methods
    public List<Role> getAllRoles(){
        return roleRepository.findAll();
    }
    public Role getRoleById(long id) throws NotFoundException {
        return roleRepository.findById(id).orElseThrow(() -> new NotFoundException("Role was not found"));
    }

    // post Methods
    public Role addRole(Role role){
        return roleRepository.save(role);
    }

    // update Methods
    public Role updateRole(Long id , Role role) throws NotFoundException {
        Role roleToUpdate=roleRepository.findById(id).orElseThrow(() -> new NotFoundException("Role was not found"));
        roleToUpdate.setName(role.getName()!=null ? role.getName() : roleToUpdate.getName());
        return roleToUpdate;
    }

    // delete Methods
    public void deleteRole(Long id){
        roleRepository.deleteById(id);
    }


}