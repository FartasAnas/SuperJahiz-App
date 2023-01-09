package pfe.api.superjahiz.controllers;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pfe.api.superjahiz.entities.AppUser;
import pfe.api.superjahiz.exceptions.NotFoundException;
import pfe.api.superjahiz.services.AppUserService;

import java.util.List;

@RestController @RequiredArgsConstructor @RequestMapping("/appUser")
public class AppUserController {
    public final AppUserService appUserService;

    // Post Methods
    @PostMapping("/add")
    public AppUser addAppUser(@RequestBody AppUser appUser) {
        return appUserService.addAppUser(appUser);
    }

    // Get Methods
    @GetMapping("/all")
    public List<AppUser> getAllAppUsers() {
        return appUserService.getAllAppUsers();
    }
    @GetMapping("/{id}")
    public AppUser getAppUserById(@PathVariable("id") long id) {
        return appUserService.getAppUserById(id);
    }
    @GetMapping("/username/{username}")
    public AppUser getAppUserByUsername(@PathVariable("username") String username){
        return appUserService.getAppUserByUsername(username);
    }

    // Put Methods
    @PutMapping("/edit/{id}")
    public void updateAppUser(@PathVariable("id") long id, @RequestBody AppUser newAppUser) {
        appUserService.updateAppUser(id, newAppUser);
    }

    // Delete Methods
    @DeleteMapping("/delete/{id}")
    public void deleteAppUser(@PathVariable("id") long id) {
        appUserService.deleteAppUser(id);
    }

    // other Methods
    @PostMapping("/addRole")
    public void addRoleToUser(@RequestBody AddRoleForm form) throws NotFoundException { appUserService.addRoleToAgent(form.getUsername(), form.getRoleName()); }

    @Data
    public static class AddRoleForm {
        private String username;
        private String roleName;
    }
}
