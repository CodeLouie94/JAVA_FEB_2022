public class ShoppingCart {
    public ArrayList<String> items = new ArrayList<String>();
    public String store;
    public double total = 100;

    public ShoppingCart(String store, double total) {
        this.store = store;
        this.total = total;
    }
    // constructor

    public void add_item(String item, double price){
        this.items.add(item)
        this.total += price;
    }
}