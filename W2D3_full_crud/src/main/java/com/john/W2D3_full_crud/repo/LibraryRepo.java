package com.john.W2D3_full_crud.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.john.W2D3_full_crud.models.Library;

@Repository
public interface LibraryRepo extends CrudRepository<Library, Long> {
	List<Library> findAll();
}
