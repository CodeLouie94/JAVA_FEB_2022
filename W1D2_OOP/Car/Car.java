public class Car {
    // member variables
    private String name;
    private String color;
    private int numberOfWheels;
    private static int numberOfCars = 0;

    // constructors -------------------------------
    public Car() {
        // this.name = "trusty";
        this.setName("Trusty");
        // this.color = "white";
        this.setColor("white");
        this.numberOfWheels = 4;
        this.numberOfCars++;
    }
    // overload the constructor
    public Car(int numberOfWheels, String carName, String carColor) {
        this.name = carName;
        this.setName(carName);
        this.color = carColor;
        this.numberOfWheels = numberOfWheels;
        this.numberOfCars++;
    
    // methods ---------------------
    public void honk() {
        System.out.println(this.getName() + " Honked!!!!!!! BEEEP!!");
    }

    public void honk(Car otherCar) {
        System.out.println(this.getName() + " Honked at " + otherCar.getName());
        
    }



    // in order to access private member variables we need..
    // ------------- GETTERS AND SETTERS --------------

    // STATIC getter
    public static int getCarCount() {
        return numberOfCars;
    }

    // getter
    public String getName() {
        return this.name;
    }
    // setter
    public void setName(String carName) {
        this.name = carName;
    }

    // getter
    public int getNumberOfWheels() {
        return numberOfWheels;
    }
    // setter
    public void setNumberOfWheels(int number) {
        numberOfWheels = number;
    }

    // getter
    public String getColor() {
        return color;
    }
    // setter
    public void setColor(String color) {
        this.color = color;        // 1
    }

}