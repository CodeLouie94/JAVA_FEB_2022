package com.john.W1D5_templating.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	
	@RequestMapping("/")
	public String index(Model model) {
		String x = "<h1>this is something!</h1><script>alert('oh no!')</script>";
		model.addAttribute("myKey", x);
		model.addAttribute("x", 123);
		return  "cool.jsp";
	}
	
	@RequestMapping("/cooler")
	public String index2(Model model) {
		ArrayList<String> dojos = new ArrayList<String>();
		dojos.add("San Jose");
		dojos.add("Burbank");
		dojos.add("Seattle");
		
		System.out.println(dojos);
		
		model.addAttribute("dojosArray", dojos);
		
		return "cooler.jsp";
	}

}
