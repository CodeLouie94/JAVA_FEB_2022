import java.util.Arrays;
import java.util.ArrayList;


public class Hello{

// Entry point for every java APP
    public static void main(String[] args) {
        
        System.out.println("hello Ninjas! \n");

        // VARIABLES
//       type
//        |     var name (identifier) 
//        |      |
//        V      V      value
        String name = "john";
        System.out.println(name);

        // PRIMITIVE TYPE VARIABLES
        int age = 200000;
        boolean isAdmin = false;
        double price = 22.99;
        char letter = 'z';

        // OBJECT TYPE VARIABLES
        Integer num = 3434;
        Boolean vote = true;
        Double tax = 3.2;
        Character xyz = 'a';

        String a = "hello";
        String b = "hello";
        System.out.println(a == b);
         
        String x = new String("Dojo");
        String y = new String("Dojo");
        System.out.println(x.equals(y));


// ------ instantiate other Class
        OtherFile someOtherClass = new OtherFile();
        someOtherClass.sayGenericHello();
        
        System.out.println(someOtherClass.sayHello());

        String returnValue = someOtherClass.sayHello();
        System.out.println(returnValue);

        System.out.println(someOtherClass.sayHello("bob"));
        System.out.println(someOtherClass.sayHello(11));

        // ---------------- ARRAYS ------------
        int[] nums;
        nums = new int[5];
        System.out.println(nums);
        // import java.util.Arrays
        System.out.println(Arrays.toString(nums));

        nums[0] = 4;
        nums[1] = 8;
        nums[2] = 8;
        nums[3] = 5;
        nums[4] = 9;
        System.out.println(Arrays.toString(nums));

        for (int i=0; i < nums.length; i++) {
            nums[i] = nums[i] * 10;
            System.out.println(nums[i]);
        }

        // fixed array
        int[] myArray = {4, 8, 8, 5, 9};

        // --------------- ArrayList
        ArrayList<Integer> myCoolArray = new ArrayList<Integer>();
        System.out.println(myCoolArray);
        myCoolArray.add(100);
        myCoolArray.add(200);
        myCoolArray.add(300);
        myCoolArray.add(400);
        myCoolArray.add(500);
        System.out.println(myCoolArray);

        for(int i = 0; i < myCoolArray.size(); i++) {
            System.out.println(myCoolArray.get(i));
        }
        
        System.out.println(myCoolArray.get(2));



    }

}