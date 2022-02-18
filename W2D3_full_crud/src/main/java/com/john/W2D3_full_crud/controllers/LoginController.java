package com.john.W2D3_full_crud.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.john.W2D3_full_crud.models.LoginUser;
import com.john.W2D3_full_crud.models.User;
import com.john.W2D3_full_crud.services.UserService;

@Controller
public class LoginController {
	
	@Autowired
	private UserService userServ;
	
//	LOGIN
	@GetMapping("/")
	public String loginReg(Model model) {
		model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "index.jsp";
	}
	
//	REGISTER NEW USER
	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser,
							BindingResult result, 
							Model model, 
							HttpSession sesh) {
//		execute the Service to Register first!
		userServ.register(newUser, result);
//		then check errors
		if (result.hasErrors()) {
	        model.addAttribute("newLogin", new LoginUser());
			return "index.jsp";
		} else {
			sesh.setAttribute("user_id", newUser.getId());
			return "redirect:/home";
		}
	}
	
//	Login
	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin,
							BindingResult result, 
							Model model, 
							HttpSession sesh) {
		User user = userServ.login(newLogin, result);
		if (result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "index.jsp";
		} else {
			sesh.setAttribute("user_id", user.getId());
			return "redirect:/home";
		}
		
	}
	
//	------ from this point on we are Logged in! ---------
//	home route
//	you can move this route to other controller as well
	@GetMapping("/home")
	public String home(HttpSession s, Model m) {
//		retrieve the the DB using session id
		Long userId = (Long) s.getAttribute("user_id");
//		check if userID is null
		if (userId == null) {
			return "redirect:/";
		} else {
//			go to the DB to retrieve the user using the id
			User thisUser = userServ.findOne(userId);
			m.addAttribute("thisUser", thisUser);
			return "home.jsp";
		}
	}
	
//	LOGOUT
	@GetMapping("/logout")
	public String logout(HttpSession s) {
		s.invalidate();
		return "redirect:/";
	}
	
	
	
	

}
