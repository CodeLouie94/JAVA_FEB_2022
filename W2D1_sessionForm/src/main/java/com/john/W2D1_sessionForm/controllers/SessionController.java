package com.john.W2D1_sessionForm.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class SessionController {

	@RequestMapping("/login")
	public String form() {
		return "form.jsp";
	}

	@RequestMapping(value = "/processForm", method = RequestMethod.POST)
	public String login(@RequestParam(value = "email") String email, 
						@RequestParam(value = "password") String password,
						@RequestParam(value = "age") Integer age, 
						HttpSession session, 
						RedirectAttributes flash) {

		System.out.println(email + " : " + password + " : age = " + age);

		session.setAttribute("email", email);
		session.setAttribute("password", password);
		session.setAttribute("age", age);

		if (age < 18) {
			System.out.println("you are not wise enough");
			flash.addFlashAttribute("ageError", "you are not wise enough!");
			return "redirect:/login";
		} else {
//		redirect point to a route
			return "redirect:/dashboard";
		}
	}

	@RequestMapping("/dashboard")
	public String dash() {
		return "results.jsp";
	}
}
