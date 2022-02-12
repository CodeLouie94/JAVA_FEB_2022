package com.caresoft.clinicapp;

public interface HIPAACompliantUser {
	    
	    // Expected to assign the pin to the user (as a member variable)
	    abstract boolean assignPin(int pin);
	    
	    // Expected to compare instance id with id passed in. Returns true if ids match, false if not.
	    abstract boolean accessAuthorized(Integer confirmedAuthID);

}
