package com.john.W2D3_full_crud.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.john.W2D3_full_crud.models.Book;
import com.john.W2D3_full_crud.repo.BookRepository;

@Service
public class BookService {

	@Autowired
	private BookRepository bookRepository;
	
//    // adding the book repository as a dependency
//    private final BookRepository bookRepository;
//    public BookService(BookRepository bookRepository) {
//        this.bookRepository = bookRepository;
//    }

    // READ ALL
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    
    
    // CREATE
    public Book createBook(Book b) {
    	b.setDescription("intercepted by Service");
        return bookRepository.save(b);
    }
    
    
    // READ ONE
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
    
//    UPDATE
    // CREATE
    public Book updateBook(Book b) {
    	System.out.println("update service");
        return bookRepository.save(b);
    }

//    DELETE
    public void deleteBook(Long id) {
    	bookRepository.deleteById(id);
    }
    
    
    
    
    
    
}
