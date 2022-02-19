package com.john.full_crud.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="books")
public class Book {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min = 5, max = 200, message="hey you need a cool title")
    private String title;
    
    @NotNull
    @Size(min = 5, max = 200)
    private String description;
    
    @NotNull
    @Size(min = 3, max = 40)
    private String language;
    
    @NotNull
    @Min(100)
    private Integer numberOfPages;
    
 
//    ----- M : 1 ----------
//    many books to 1 library
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="library_id")
    private Library library;
//    ==== DON'T FORGET GETTER AND SETTERS ====
//    --------------------------
    
    
    
    
    
    
    
    
//  --- !!!!! GETTERS AND SETTERS !!!! ------

//    ------ M : M ----------
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
    		name="users_books",
    		joinColumns = @JoinColumn(name="book_id"),
    		inverseJoinColumns = @JoinColumn(name="user_id"))
    private List<User> authors;
//    --------------------
//  --- !!!!! GETTERS AND SETTERS !!!! ------

    
    
    
    
    
    
    
    
    
    
//    private List<User> reader;
    
    


    
    
    
    //    ALWAYS GENERATE GETTERS AND SETTERS FOR ALL MEMEBER VARS
    
    
    
    
    
    
    // This will not allow the createdAt column to be updated after creation
    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
//    ----- CONSTRUCTOR(S) -----
//    must have empty constructor to create new!!!
    public Book() {
    }
    //-- APIs --
//    public Book(String title, String desc, String lang, int pages) {
//        this.title = title;
//        this.description = desc;
//        this.language = lang;
//        this.numberOfPages = pages;
//    }
    
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
    
//    -------- GETTERS AND SETTERS ------------
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public Integer getNumberOfPages() {
		return numberOfPages;
	}
	public void setNumberOfPages(Integer numberOfPages) {
		this.numberOfPages = numberOfPages;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	public Date getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public Library getLibrary() {
		return library;
	}

	public void setLibrary(Library library) {
		this.library = library;
	}

	public List<User> getAuthors() {
		return authors;
	}

	public void setAuthors(List<User> authors) {
		this.authors = authors;
	}
}





