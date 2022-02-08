class Ninja {

    private String name;
    private int health;

    //// NEW Member Variable: ////
    private Sword sword;

    public Ninja(String name){
        this.name = name;
        this.health = 100;
    }

    public void displayStats(){
        System.out.println("Name: " + this.name);
        System.out.println("Health:" + str(self.health));
        
        // What code would you add if any?
    }

    public void eatStrawberry(){
        this.health += 10
    }

    // YOUR CODE HERE:
    public void pickUpSword(swordType) {
        // Add the code to give the ninja a sword
    }


    // GETTERS & SETTERS
    public int getHealth() {
        return this.health;
    }
    public void setHealth(int health) {
        this.health = health;
    }

    public int getName() {
        return this.health;
    }
    public void setName(String name) {
        this.name = name;
    }
}