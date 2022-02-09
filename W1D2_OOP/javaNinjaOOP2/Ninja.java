class Ninja {

    private String name;
    private int health;

    //// NEW Member Variable: ////
    private Sword sword;

    public Ninja(String name, Sword sword){
        this.name = name;
        this.health = 100;
        this.setSword(sword);
    }

    public void displayStats(){
        System.out.println("Name: " + this.name);
        System.out.println("Health:" + this.getHealth());
        System.out.println("Sword: " + this.getSword().getType());
        System.out.println("integrity: " + this.getSword().getIntegrity());
        
        // What code would you add if any?
    }

    public void eatStrawberry(){
        this.health += 10;
    }

    // YOUR CODE HERE:
    public void pickUpSword(Sword swordType) {
        System.out.println(this.getName() + " picks up a " + swordType.getType());
        // Add the code to give the ninja a sword
    }


    // GETTERS & SETTERS
    public int getHealth() {
        return this.health;
    }
    public void setHealth(int health) {
        this.health = health;
    }

    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }

    // sword
    public Sword getSword() {
        return this.sword;
    }
    public void setSword(Sword sword) {
        this.sword = sword;
    }
}