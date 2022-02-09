
// NEW EXCITING CLASS!!!!!

class Sword {

    // MEMBER VARIABLES
    private int integrity;
    private String type;

    // CONSTRUCTOR
    public Sword(String swordType){
        this.integrity = 50;
        this.type = swordType;
    }


    // GETTERS AND SETTERS -----------
    public int getIntegrity() {
        return this.integrity;
    }
    public void setIntegrity(int swordIntegrity) {
        this.integrity = swordIntegrity;
    }

    public String getType() {
        return this.type;
    }
    public void setType(String swordType) {
        this.type = swordType;
    }




}