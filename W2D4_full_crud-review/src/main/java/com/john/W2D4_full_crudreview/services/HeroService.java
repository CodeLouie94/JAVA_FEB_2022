package com.john.W2D4_full_crudreview.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.john.W2D4_full_crudreview.models.SuperHero;
import com.john.W2D4_full_crudreview.repos.SuperHeroRepo;

@Service
public class HeroService {

//	remember to do dependency injection for the REPO
	@Autowired
	private SuperHeroRepo heroRepo;

	// READ ALL
	public List<SuperHero> allSuperHeros() {
		return heroRepo.findAll();
	}

//    CREATE
	// creates a book
	public SuperHero createSuperHero(SuperHero b) {
		return heroRepo.save(b);
	}

//    READ ONE
	// retrieves a book
	public SuperHero findSuperHero(Long id) {
		Optional<SuperHero> optionalSuperHero = heroRepo.findById(id);
		if (optionalSuperHero.isPresent()) {
			return optionalSuperHero.get();
		} else {
			return null;
		}
	}

//    UPDATE
	public SuperHero updateWholeSuperHero(SuperHero b) {
		return heroRepo.save(b);
	}

//    ---- DELETE ---
	public void deleteSuperHero(Long id) {
		heroRepo.deleteById(id);
	}

}
