package com.john.full_crud.controllers;

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

import com.john.full_crud.models.Book;
import com.john.full_crud.models.Library;
import com.john.full_crud.models.User;
import com.john.full_crud.services.BookService;
import com.john.full_crud.services.LibService;
import com.john.full_crud.services.UserService;

@Controller
public class BooksController {
	
//	import services we are going to use
	@Autowired
	private BookService bookService;
	@Autowired
	private LibService libServ;
	@Autowired
	private UserService  userServ;
	
//	default route
	@RequestMapping("/")
	public String redirectMe() {
		return "index.jsp";
	}
	
//	READ ALL (books)
	@RequestMapping("/books")
	public String index(Model model, HttpSession s) {
//		route guard
		Long id = (Long) s.getAttribute("user_id");
//		check if user_id is valid (logged in)
		if (id != null) {		
//			retrieve user from db
			User thisUser = userServ.findOne(id);
			model.addAttribute("thisUser", thisUser);
			
			List<Book> allBooks = bookService.allBooks();
			model.addAttribute("allBooks", allBooks);
			
//		
			return "/books/show_all.jsp";
		} else {
			return "redirect:/";
		}
	}
	
//	READ ONE (book)
	@RequestMapping("/books/{someBookId}")
    public String showOne(@PathVariable("someBookId") Long id, Model model) {
//    	find that one book, retrieve it from the db using the service
		Book oneBook = bookService.findBook(id);
//		send it over with Model
    	model.addAttribute("oneBook", oneBook);
    	return "books/show.jsp";
    }
	
//	CREATE - JSP (book)
//	RENDER THE NEW PAGE
//	@RequestMapping("/books/new")
	@GetMapping("/books/new")
    public String newBook(@ModelAttribute("unicornBook") Book book, Model model) {
//      pass all the books in to see them!
		model.addAttribute("allBooks", bookService.allBooks());
//		pass in all the libraries to select to make association
		model.addAttribute("allLibs", libServ.allLibraries());
		return "/books/new.jsp";
    }
	
//	CREATE - METHOD
//    @RequestMapping(value="/books", method=RequestMethod.POST)
    @PostMapping("/books")
    public String create(@Valid @ModelAttribute("unicornBook") Book book, BindingResult result, Model model) {
    	System.out.println(result);
        if (result.hasErrors()) {
//        	if there is an error re-pass all the libraries to show
        	model.addAttribute("allLibs", libServ.allLibraries());
            return "/books/new.jsp";
        } else {
//        	save the book
        	bookService.createBook(book);
            return "redirect:/books";
        }
    }
    
     
//    ------ EDIT ----
//    render edit.jsp
    @RequestMapping("/books/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
//      find (from the db) that one book we want to edit from the url path var
    	Book book = bookService.findBook(id);
//    	send it to the page to prepopulate the fields path="memberVar"
        model.addAttribute("book", book);
        return "/books/edit.jsp";
    }
    
//  edit METHOD - using hidden input
//    @PutMapping("/books/{id}")
    @RequestMapping(value="/books/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("book") Book book, BindingResult result) {
        if (result.hasErrors()) {
            return "/books/edit.jsp";
        } else {
            bookService.updateWholeBook(book);
            return "redirect:/books";
        }
    }
    
    
//    ---- DELETE ----
//    @DeleteMapping("/books/{id}")
    @RequestMapping(value="/books/{id}", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
        bookService.deleteBook(id);
        return "redirect:/books";
    }
    

    
//    ------------------ LIBRARY ----------------
    
//  render -> create new library page
    @GetMapping("/library/new")
    public String createLib(@ModelAttribute("lib") Library library, Model model) {
    	List<Library> allLibraries = libServ.allLibraries();
    	model.addAttribute("allLibraries", allLibraries);
    	return "/library/new.jsp";
    }
    
//  create method for library
    @PostMapping("/libraries")
    public String libMethod(@Valid @ModelAttribute("lib") Library library, BindingResult res, Model model) {
    	if (res.hasErrors()) {
    		List<Library> allLibraries = libServ.allLibraries();
        	model.addAttribute("allLibraries", allLibraries);
    		return "/library/new.jsp";
    	} else {
//    		write to the db
    		libServ.createLibrary(library);
    		return "redirect:/library/new";
    	}
    }
    
//    --------------------------------
//    adding an author to a book
    @GetMapping("/add/{id}")
    public String addAuthorToBook(
    				@PathVariable("id") Long book_id, 
    				HttpSession sesh) {
//    	1. grab the current logged in user
    	Long user_id = (Long) sesh.getAttribute("user_id");
//    	2. find that user from the DB using the id from session
    	User u = userServ.findOne(user_id);
    	
//    	find the book to add to 
    	Book b = bookService.findBook(book_id);
//    	add the user the books' authors list
    	b.getAuthors().add(u);
//    	save the change!
    	bookService.updateWholeBook(b);
    	
    	return "redirect:/books";
    }
    
//    -------------------------------
//    remove an author from a book
    @GetMapping("/remove/{id}")
    public String removeAuthorfromBook(
    				@PathVariable("id") Long book_id, 
    				HttpSession sesh) {
//    	1. grab the current logged in user
    	Long user_id = (Long) sesh.getAttribute("user_id");
//    	2. find that user from the DB using the id from session
    	User u = userServ.findOne(user_id);
    	
//    	find the book to add to 
    	Book b = bookService.findBook(book_id);
//    	add the user the books' authors list
    	b.getAuthors().remove(u);
//    	save the change!
    	bookService.updateWholeBook(b);
    	
    	return "redirect:/books";
    }

}
