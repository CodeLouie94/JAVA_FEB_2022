package com.john.W2D3_full_crud.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.john.W2D3_full_crud.models.LoginUser;
import com.john.W2D3_full_crud.models.User;
import com.john.W2D3_full_crud.repo.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepo;
    
    public User register(User newUser, BindingResult result) {     
        // Reject if email is taken (present in database)
//    	if (userRepo.findByEmail(newUser.getEmail()).isPresent() ) {
//    		result.rejectValue("email", "Unique", "This email is taken");
//    	}
    	Optional<User> potentialUser = userRepo.findByEmail(newUser.getEmail());
    	if (potentialUser.isPresent()) {
    		result.rejectValue("email", "Unique", "This email is taken");
    	}
        // Reject if password doesn't match confirmation
    	if (!newUser.getPassword().equals(newUser.getConfirm())) {
    		result.rejectValue("confirm", "Matches", "the confirm password must match the password");
    	}
        
        // Return null if result has errors
    	if (result.hasErrors()) {
    		return null;
    	} else {
    		// Hash and set password, save user to database
    		String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
    		newUser.setPassword(hashed);
//    		SAVE USER TO THE DB
    		return userRepo.save(newUser);
    	}
    
    }
    public User login(LoginUser newLogin, BindingResult result) {        

    	// Find user in the DB by email
    	Optional<User> potentialUser = userRepo.findByEmail(newLogin.getEmail());
    	if (!potentialUser.isPresent()) {
    		result.rejectValue("email", "somethingemail", "unkown email");
    		return null;
    	}
    	User user = potentialUser.get();
    	// Reject if BCrypt password match fails
    	if (!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
    		// Reject if NOT present
    		result.rejectValue("password", "somethingpass", "invalid password");
    		
    	}
    	
    	// Return null if result has errors
    	if (result.hasErrors()) {
    		return null;
    	} else {
    		// Otherwise, return the user object
    		return user;
    	}
    }
    
//    CRUD
//    	READ ONE
     public User findOne(Long id) {
    	 Optional<User> optionalUser = userRepo.findById(id);
    	 if (optionalUser.isPresent()) {
    		 return optionalUser.get();
    	 } else {
    		 return null;
    	 }
     }
    
     
     
     
     
     
     
     
     
     
}