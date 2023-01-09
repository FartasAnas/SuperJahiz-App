package pfe.api.superjahiz.services;

import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pfe.api.superjahiz.entities.AppUser;
import pfe.api.superjahiz.entities.Role;
import pfe.api.superjahiz.exceptions.NotFoundException;
import pfe.api.superjahiz.repositories.AppUserRepository;
import pfe.api.superjahiz.repositories.RoleRepository;

import java.util.List;

@Service @Transactional @RequiredArgsConstructor @Slf4j
public class AppUserService {
    private final AppUserRepository appUserRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    // Post Methods
    public AppUser addAppUser(AppUser appUser) {
        appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
        return appUserRepository.save(appUser);
    }

    // Get Methods
    public List<AppUser> getAllAppUsers() {
        return appUserRepository.findAll();
    }
    public AppUser getAppUserById(Long id) {
        return appUserRepository.findById(id).get();
    }
    public AppUser getAppUserByUsername(String username) {
        return appUserRepository.findByUsername(username.toLowerCase());
    }
    public AppUser getAppUserByEmail(String email){
        return appUserRepository.findByEmail(email.toLowerCase());
    }

    // Put Methods
    public void updateAppUser(Long id, AppUser newAppUser) {
        AppUser appUserToUpdate = appUserRepository.findById(id).get();
        appUserToUpdate.setUsername(newAppUser.getUsername()!=null ? newAppUser.getUsername() : appUserToUpdate.getUsername());
        appUserToUpdate.setEmail(newAppUser.getEmail()!=null ? newAppUser.getEmail() : appUserToUpdate.getEmail());
        appUserToUpdate.setPassword(newAppUser.getPassword()!=null ? newAppUser.getPassword() : appUserToUpdate.getPassword());
        appUserToUpdate.setFirstName(newAppUser.getFirstName()!=null ? newAppUser.getFirstName() : appUserToUpdate.getFirstName());
        appUserToUpdate.setLastName(newAppUser.getLastName()!=null ? newAppUser.getLastName() : appUserToUpdate.getLastName());
        appUserRepository.save(appUserToUpdate);
    }

    // Delete Methods
    public void deleteAppUser(Long id) {
        appUserRepository.deleteById(id);
    }

    // other Methods
    public void addRoleToAgent(String username, String roleName) throws NotFoundException {
        AppUser appUser = appUserRepository.findByUsername(username.toLowerCase());
        Role role = roleRepository.findByName(roleName);

        if(appUser == null || role == null) {
            throw new NotFoundException("Agent or role not found");
        }
        else if(appUser.getRoles().contains(role)) {
            throw new DataIntegrityViolationException("Agent already has this role");
        }
        appUser.getRoles().add(role);
    }
}
