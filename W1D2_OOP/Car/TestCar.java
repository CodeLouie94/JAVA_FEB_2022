public class TestCar{

    // main entry method
    public static void main(String[] args) {
       
    //    create an instance of the Car class
        Car myCoolCar = new Car();
        System.out.println(myCoolCar.getName());
        System.out.println(myCoolCar.getColor());
        System.out.println(myCoolCar.getNumberOfWheels());
        System.out.println("\n ---");

        Car oldCar = new Car(4, "rusty", "red");
        System.out.println(oldCar.getName());
        System.out.println(oldCar.getNumberOfWheels());
        // System.out.println(oldCar.make);

        oldCar.honk(myCoolCar);

        // get number of cars
        int totalCars = Car.getCarCount();
        System.out.println(totalCars);
    }
}