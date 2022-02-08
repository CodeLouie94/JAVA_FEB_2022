class Ninja {

    private String name;
    private int health;

    public Ninja(String name){
        this.name = name;
        this.health = 100;
    }

    public void displayStats(){
        System.out.println("Name: " + this.name);
        System.out.println("Health:" + str(self.health));
    }

    public void eatStrawberry(){
        this.health += 10
    }

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