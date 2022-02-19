package com.john.full_crud.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Libraries")
public class Library {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	@Size(min=3, max=200, message="Hey make sure you put something here!")
	private String name;

	private String location;

//	 ------- 1 : M ----------
//	one library can have many books
//	mappedBy is "what does the other side have as a member var?"
	@OneToMany(mappedBy = "library", fetch = FetchType.LAZY)
	private List<Book> books;
//  === ALWAYS GENERATE GETTERS AND SETTERS FOR ALL MEMEBER VARS ===

//	 ------ 1 : M --------
//	 @OneToMany(mappedBy="library", fetch = FetchType.LAZY)
//	 private List<Employee> employees;

//	 Constructor ----------
	public Library() {
	}

//	 ----------- GETTERS AND SETTERS ----------

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public List<Book> getBooks() {
		return books;
	}

	public void setBooks(List<Book> books) {
		this.books = books;
	}

}
