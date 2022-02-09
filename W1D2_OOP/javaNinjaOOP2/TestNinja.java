public class TestNinja {
    public static void main(String[] args) {

        Sword katanaSword = new Sword("katana");


        Ninja kikomo = new Ninja("Kikomo", katanaSword);

        kikomo.displayStats();




        kikomo.pickUpSword(katanaSword);
        kikomo.eatStrawberry();
        kikomo.displayStats();
        
    }
}