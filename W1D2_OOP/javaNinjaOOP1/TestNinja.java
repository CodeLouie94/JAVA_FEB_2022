public class TestNinja {
    public static void main(String[] args) {

        // Predict the Output (if there are any errors,
        // try to predict what it will say, and then fix it.)
        Ninja hikusake = new Ninja("Kenshiro");
        System.out.println(hikusake.getName());
        Ninja kikomo = new Ninja("Kikomo");
        kikomo.displayStats();
        kikomo.eatStrawberry();
        kikomo.displayStats();
        
    }
}