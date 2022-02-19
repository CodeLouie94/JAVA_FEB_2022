package com.john.full_crud.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.john.full_crud.models.LoginUser;
import com.john.full_crud.models.User;
import com.john.full_crud.services.UserService;

@Controller
public class LoginController {
    
    @Autowired
    private UserService userServ;
    
    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "index.jsp";
    }
    
    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser, 
            BindingResult result, Model model, HttpSession session) {
        userServ.register(newUser, result);
        if(result.hasErrors()) {
            model.addAttribute("newLogin", new LoginUser());
            return "index.jsp";
        }
        session.setAttribute("user_id", newUser.getId());
        return "redirect:/home";
    }
    
    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
            BindingResult result, Model model, HttpSession session) {
        User user = userServ.login(newLogin, result);
        if(result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "index.jsp";
        }
        session.setAttribute("user_id", user.getId());
        return "redirect:/home";
    }
    
//    ------------ logged in -----------
//    -- moved to BooksController----
    @GetMapping("/home")
    public String home(HttpSession s, Model model) {
//    	retrieve from DB the session id
    	Long userId = (Long) s.getAttribute("user_id");
//    	check if userID !null
    	if (userId == null) {
    		return "redirect:/";
    	} else {    		
//    	go to the DB to retrieve the user with the id
    		User thisUser = userServ.findOne(userId);
    		model.addAttribute("thisUser", thisUser);
    		return "home.jsp";
    	}
    }
//    logout
    @GetMapping("/logout")
    public String logout(HttpSession sesh) {
    	sesh.invalidate();
    	return "redirect:/";
    }
    
}