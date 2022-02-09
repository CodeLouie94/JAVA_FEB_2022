package com.john.ninjas;

public class Ninja {
//	member variables
	private String name;
	private int health;
	private int power;
	
//	constructor
	public Ninja() {
//		this.name = "ninja"
		this.setName("some Ninja");
		this.setHealth(100);
		this.setPower(50);
	}
	public Ninja(String name, int power) {
		this.setName(name);
		this.setHealth(100);
		this.setPower(power);
	}
	
//	methods
	public void displayStats() {
		System.out.println(this.getClass().getSimpleName());
		System.out.println("name: " + this.getName());
		System.out.println("health: " + this.getHealth());
		System.out.println("power: " + this.getPower() + "\n");
	}
	
	public void attack(Ninja otherNinja) {
		otherNinja.setHealth(otherNinja.getHealth() - 10);
		System.out.println(otherNinja.getName() + " lost 10 hp by " + this.getName());
	}
	
//	GETTERS AND SETTERS
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getHealth() {
		return health;
	}

	public void setHealth(int health) {
		this.health = health;
	}

	public int getPower() {
		return power;
	}

	public void setPower(int power) {
		this.power = power;
	}


}
