package com.john.helloSpring.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UnicornController {

	@RequestMapping("/")
	public String coolRoute() {
		return "hello ninjas";
	}

	@RequestMapping("/cool")
	public String anotherCoolRoute() {
		return "<h1> this is an h1 tag </h1>";
//		return "<h1>hello</h1><p>this is cool</p><script>alert('you are hacked')</script>";
	}

//	Query parameter
//	http://localhost:8080/something/search?q=mycooltext
	@RequestMapping("/something/search")
	public String someSearch(@RequestParam(value = "aaa") String urlSearch) {
		System.out.println(urlSearch);
		return String.format("you searched for %s", urlSearch);
	}

//	PathVariable
//	http://localhost:8080/something/123
	@RequestMapping("/find/{var1}/{var2}")
	public String someVars(@PathVariable("var1") String someVar1, @PathVariable("var2") Integer var2) {
		System.out.println(someVar1 + " : " + var2);
		return "hello " + someVar1 + " you have " + var2 + " cats!!!";
	}

}
