package com.john.W2D2_APIDemo.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.john.W2D2_APIDemo.models.Book;
import com.john.W2D2_APIDemo.services.BookService;

@Controller
public class MainController {
	
//	import the BookService here
	private final BookService bookService;
	public MainController(BookService bookService) {
	        this.bookService = bookService;
	    }
	
	@RequestMapping("/")
	public String redirectMe() {
		return "redirect:/books";
	}

	@RequestMapping("/books")
	public String index(Model model) {
		List<Book> books = bookService.allBooks();
		model.addAttribute("books", books);
		return "/books/index.jsp";
	}

}
