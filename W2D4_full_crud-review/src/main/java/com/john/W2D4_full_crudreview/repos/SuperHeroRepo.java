package com.john.W2D4_full_crudreview.repos;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.john.W2D4_full_crudreview.models.SuperHero;

@Repository
public interface SuperHeroRepo extends CrudRepository<SuperHero, Long> {
	List<SuperHero> findAll();
}
