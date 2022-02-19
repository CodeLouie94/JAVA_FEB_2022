package com.john.W2D3_full_crud.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.john.W2D3_full_crud.models.Book;
import com.john.W2D3_full_crud.models.Library;
import com.john.W2D3_full_crud.models.User;
import com.john.W2D3_full_crud.services.BookService;
import com.john.W2D3_full_crud.services.LibService;
import com.john.W2D3_full_crud.services.UserService;

@Controller
public class BookController {

	@Autowired
	private BookService bookService;
	@Autowired
	private LibService libService;
	@Autowired
	private UserService userServ;

//	@RequestMapping("/")
//	public String index() {
//		System.out.println("index");
//		return "redirect:/books";
//	}


	@RequestMapping("/books")
	public String index(Model model, HttpSession s) {
		List<Book> books = bookService.allBooks();
		model.addAttribute("books", books);
		
		Long userId = (Long) s.getAttribute("user_id");
//		check if userID is null
		if (userId == null) {
			return "redirect:/";
		} else {
		User thisLoggedInUser = userServ.findOne(userId);
		model.addAttribute("thisLoggedInUser", thisLoggedInUser);
		return "/books/index.jsp";
		}
	}

//	SHOW ONE RENDER
//	localhost:8080/books/3
	@GetMapping("/books/{id}")
	public String showOne(@PathVariable("id") Long id, Model model) {
		Book oneBook = bookService.findBook(id);
//		System.out.println(oneBook.getTitle());
		model.addAttribute("oneBook", oneBook);
		return "/books/show.jsp";
	}

//    @GetMapping("/books/new")
//    public String newBook(Model model) {
//    	Book book = new Book();
//    	model.addAttribute("book", book);
//    	return "/books/new.jsp";
//    }

//	CREATE BOOK - JSP ----------------------
	@GetMapping("/books/new")
	public String newBook(@ModelAttribute("book") Book book, Model model, HttpSession s) {
		
//		Route guard - check if user is in sesion!
		Long userId = (Long) s.getAttribute("user_id");
//		check if userID is null
		if (userId == null) {
			return "redirect:/";
		} else {
		User thisLoggedInUser = userServ.findOne(userId);
		model.addAttribute("thisLoggedInUser", thisLoggedInUser);
		
		List<Book> allBooks = bookService.allBooks();
		model.addAttribute("allBooks", allBooks);
		
		List<Library> allLibs = libService.allLibraries();
		model.addAttribute("allLibs", allLibs);
		
//		model.addAttribute("test", "<h1>hello</h1>");
		return "/books/new.jsp";
		}
	}

//    CREATE METHOD -------------------
	@PostMapping("/books")
	public String create(@Valid @ModelAttribute("book") Book book, 
				BindingResult result, Model model, HttpSession s) {
		if (result.hasErrors()) {
//			grab the user again
			Long userId = (Long) s.getAttribute("user_id");
			User thisLoggedInUser = userServ.findOne(userId);
			model.addAttribute("thisLoggedInUser", thisLoggedInUser);
			
//			all the libs to choose from
			List<Library> allLibs = libService.allLibraries();
			model.addAttribute("allLibs", allLibs);
			
//			all the books (display)
			List<Book> allBooks = bookService.allBooks();
			model.addAttribute("allBooks", allBooks);
			return "/books/new.jsp";
		} else {
//			alt way
//			Long userId = (Long) s.getAttribute("user_id");
//			User thisLoggedInUser = userServ.findOne(userId);
//			model.addAttribute("thisLoggedInUser", thisLoggedInUser);
//			
//			book.setAuthor(thisLoggedInUser);
			
			
			System.out.println(book.getDescription());
			bookService.createBook(book);
			return "redirect:/books";
		}
	}

//    EDIT JSP -----------------------
	@RequestMapping("/books/{id}/edit")
	public String edit(@PathVariable("id") Long id, Model model) {
		Book book = bookService.findBook(id);
		model.addAttribute("book", book);
		return "/books/edit.jsp";
	}

//    EDIT METHOD ------------------------
//    @PutMapping("/books/{id}")
	@RequestMapping(value = "/books/{id}", method = RequestMethod.PUT)
	public String update(@Valid @ModelAttribute("book") Book book, BindingResult result) {
		if (result.hasErrors()) {
			return "/books/edit.jsp";
		} else {
			bookService.updateBook(book);
			return "redirect:/books";
		}
	}

//    DELETE ---------------

	@RequestMapping(value = "/books/{id}/delete", method = RequestMethod.DELETE)
	public String destroy(@PathVariable("id") Long id) {
		bookService.deleteBook(id);
		return "redirect:/books";
	}
	
	
//	============= LIBRARY ===============
//	render create new library
	@GetMapping("/library/new")
	public String createLibraryPage(@ModelAttribute("library") Library library, Model model) {
		List<Library> allLibs = libService.allLibraries();
		model.addAttribute("allLibs", allLibs);
		return "/library/new.jsp";
	}
	
	@PostMapping("/library")
	public String libraryMethodCreate(@Valid @ModelAttribute("library") Library library, 
									BindingResult result) {
		if (result.hasErrors()) {
			return "/library/new.jsp";
		} else {
//			save it to the DB!
			libService.createLibrary(library);
			return "redirect:/library/new";
		}
	}
	
//	======= conditional render =========
	@GetMapping("/author")
	public String author(Model model, HttpSession s) {
		Long userId = (Long) s.getAttribute("user_id");
//		check if userID is null
		if (userId == null) {
			return "redirect:/";
		} else {
			User thisLoggedInUser = userServ.findOne(userId);
			model.addAttribute("thisLoggedInUser", thisLoggedInUser);
			return "author.jsp";
		}
	}

	
}
