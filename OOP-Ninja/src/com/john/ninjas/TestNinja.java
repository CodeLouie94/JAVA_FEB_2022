package com.john.ninjas;

public class TestNinja {

	public static void main(String[] args) {
		
		Ninja ken = new Ninja("Kenshiro", 100);
		ken.displayStats();
		
		Ninja goku = new Ninja("Goku", 90002);
		goku.displayStats();
		
		goku.attack(ken);
		ken.displayStats();
		
		SuperNinja shaggy = new SuperNinja("Shaggy", 500, "scooby snacks");
		shaggy.displayStats();
		
		String weapon = shaggy.getWeapon();
		System.out.println(shaggy.getName() + " has a weapon: " + weapon);
	
//		using interface
		Sesnei masterSplinter = new Sesnei("Master Splinter", 1000);
		String result = masterSplinter.sayWisdom();
		System.out.println(result);
		
		
		
		
	
	
	}

}
