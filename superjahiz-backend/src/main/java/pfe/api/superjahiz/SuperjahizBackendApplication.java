package pfe.api.superjahiz;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import pfe.api.superjahiz.entities.AppUser;
import pfe.api.superjahiz.entities.Role;
import pfe.api.superjahiz.services.AppUserService;
import pfe.api.superjahiz.services.RoleService;

import java.util.ArrayList;

@SpringBootApplication
public class SuperjahizBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SuperjahizBackendApplication.class, args);
	}

	@Bean
	PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner run(AppUserService appUserService, RoleService roleService){
		return args -> {
			try {
				roleService.addRole(new Role(null,"ADMIN"));
				roleService.addRole(new Role(null,"USER"));

				appUserService.addAppUser(new AppUser(null,"fartasanas","1234","fartas@gmail.com","fartas","anas",null,new ArrayList<>(),null));


				appUserService.addRoleToAgent("fartasanas","ADMIN");

			}
			catch (Exception e){
				System.out.println("Duplicated Default Values");
			}

		};
	}

}
