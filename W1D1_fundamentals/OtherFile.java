import java.util.Arrays;
import java.util.ArrayList;

public class OtherFile{

    public void sayGenericHello() {
        System.out.println("Hello from OtherFile");
    }

    public String sayHello() {
        return "Hello from OtherFile String";
    }

    public String sayHello(String someName) {
        return "hello my name is " + someName;
    }

    public String sayHello(int someName) {
        return "hello my name is " + someName;
    }
}