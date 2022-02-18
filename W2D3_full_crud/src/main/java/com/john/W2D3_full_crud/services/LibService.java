package com.john.W2D3_full_crud.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.john.W2D3_full_crud.models.Library;
import com.john.W2D3_full_crud.repo.LibraryRepo;

@Service
public class LibService {
	
	@Autowired
	private LibraryRepo libRepo;
	
    // READ ALL
    public List<Library> allLibraries() {
        return libRepo.findAll();
    }
    
    
    // CREATE
    public Library createLibrary(Library b) {
//    	b.setDescription("intercepted by Service");
        return libRepo.save(b);
    }
    
    
    // READ ONE
    public Library findLibrary(Long id) {
        Optional<Library> optionalLib = libRepo.findById(id);
        if(optionalLib.isPresent()) {
            return optionalLib.get();
        } else {
            return null;
        }
    }
    
//    UPDATE
    public Library updateLibrary(Library b) {
    	System.out.println("update service");
        return libRepo.save(b);
    }

//    DELETE
    public void deleteLibrary(Long id) {
    	libRepo.deleteById(id);
    }
    
}
