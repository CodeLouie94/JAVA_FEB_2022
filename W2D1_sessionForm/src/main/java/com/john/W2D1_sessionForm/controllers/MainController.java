package com.john.W2D1_sessionForm.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

	@RequestMapping("/")
	public String index(Model model, HttpSession session) {
		
//		passing variables "key" only on this route
		String name = "Carol";
		model.addAttribute("name", name);
		
//		passing variables "key" for ANY route
		String sessionName = "Bob";
		session.setAttribute("sessionName", sessionName);
		
		Integer num = 33;
		session.setAttribute("num", num);
		
		return "index.jsp";
	}
	
	@RequestMapping("/other")
	public String other(HttpSession sesh) {
//		check if key exists in session
		if (sesh.getAttribute("num") != null) {			
			Integer sessionNum = (Integer) sesh.getAttribute("num");
			System.out.println(sessionNum);
			return "other.jsp";
		} else {
			sesh.setAttribute("num", 0);
			return "other.jsp";
		}
	}
	

}
