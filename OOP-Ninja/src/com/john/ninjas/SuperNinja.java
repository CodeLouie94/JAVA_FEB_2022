package com.john.ninjas;

public class SuperNinja extends Ninja {
//	member variables
	private String weapon;
	
//	Constructor
	public SuperNinja(String name, int powerLevel, String weapon) {
		super(name, powerLevel);
		setWeapon(weapon);
	}
	
//	public void displayStats() {
//		super.displayStats();
//	}
//	
	
//	GETTERS AND SETTERS

	public String getWeapon() {
		return weapon;
	}

	public void setWeapon(String weapon) {
		this.weapon = weapon;
	}

	
}
