// package com.hackathon.dekofcards;

public class TestDeck {

	public static void main(String[] args) {
		
		Deck myDeck = new Deck();
		System.out.println(myDeck.getCards());
		for (Card card: myDeck.getCards()) {
			// card.showCard();
		}
		
	}
}
