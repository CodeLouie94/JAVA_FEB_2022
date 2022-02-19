package com.john.full_crud.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.john.full_crud.models.Library;
import com.john.full_crud.repositories.LibraryRepo;

@Service
public class LibService {

	@Autowired
	private LibraryRepo libraryRepository;
	
//	CREATE
	public Library createLibrary(Library l) {
		return libraryRepository.save(l);
	}
	
//	READ ALL
	public List<Library> allLibraries() {
		return libraryRepository.findAll();
	}
	
//	READ ONE
	public Library findLibrary(Long id) {
		Optional<Library> optionalLibrary = libraryRepository.findById(id);
		if (optionalLibrary.isPresent()) {
			return optionalLibrary.get();
		} else {
			return null;
		}
	}
	
//	UPDATE
	public Library updateLibrary(Library l) {
		return libraryRepository.save(l);
	}
	
//	DELETE
	public void deleteLibrary(Long id) {
		libraryRepository.deleteById(id);
	}
}
