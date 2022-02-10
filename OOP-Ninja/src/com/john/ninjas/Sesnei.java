package com.john.ninjas;

public class Sesnei extends Ninja implements Knowledgeable {

	public Sesnei(String name, int powerlevel) {
		super(name, powerlevel);
	}
	
	@Override
	public String sayWisdom() {
		return "you are awesome!";
	}

}
