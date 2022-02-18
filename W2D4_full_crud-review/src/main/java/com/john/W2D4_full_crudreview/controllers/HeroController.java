package com.john.W2D4_full_crudreview.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.john.W2D4_full_crudreview.models.SuperHero;
import com.john.W2D4_full_crudreview.services.HeroService;

@Controller
public class HeroController {
	
//	Dependency injection for the service
	@Autowired
	private HeroService hServ;
	
	@GetMapping("/")
	public String index() {
		return "redirect:/hero";
	}
	
//	create hero render
	@GetMapping("/hero")
	public String thisRoute(@ModelAttribute("hero") SuperHero superHero) {
		return "index.jsp";
	}
	
//	create hero post
	@PostMapping("/newHero")
	public String createHero(@Valid @ModelAttribute("hero") SuperHero superHero,
								BindingResult res) {
		if (res.hasErrors()) {
			return "index.jsp";
		} else {
			hServ.createSuperHero(superHero);
			return "redirect:/all";
		}
		
	}
	
//	all heroes
	@GetMapping("/all")
	public String all(Model model) {
		List<SuperHero> allHeroes = hServ.allSuperHeros();
		model.addAttribute("allHeroes", allHeroes);
		return "all.jsp";
	}
	
//	edit hero
	@GetMapping("/hero/{id}")
	public String editThis(@PathVariable("id") Long id, Model model) {
		SuperHero thisHero = hServ.findSuperHero(id);
		model.addAttribute("thisHero", thisHero);
		return "edit.jsp";
	}
	
	@PutMapping("/edit/{id}")
	public String actuallyEditThis(@Valid @ModelAttribute("thisHero") SuperHero superHero,
			BindingResult res) {
		if (res.hasErrors()) {
			return "edit.jsp";
		} else {
			hServ.updateWholeSuperHero(superHero);
			return "redirect:/all";
		}
	}
	
	
//	DELETE
	@DeleteMapping("/hero/{id}")
	public String deleteMe(@PathVariable("id") Long id) {
		hServ.deleteSuperHero(id);
		return "redirect:/all";
	}
	
	

}
