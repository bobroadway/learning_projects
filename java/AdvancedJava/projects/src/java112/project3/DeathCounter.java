package java112.project3;

import java.util.*;

public class DeathCounter {

    // instance variables
    private String name;
    private int age;
    private char gender;
    private boolean smoker;
    private boolean riskTaker;
    private Date deathDate;

    // accessor
    public String getName() {
        return this.name;
    }
    public int getAge() {
        return this.age;
    }
    public char getGender() {
        return this.gender;
    }
    public boolean getSmoker() {
        return this.smoker;
    }
    public boolean getRiskTaker() {
        return this.riskTaker;
    }
    public Date getDeathDate() {
        return this.deathDate;
    }

    // constructor
    public DeathCounter(String name, int age, char gender, boolean smoker, boolean riskTaker) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.smoker = smoker;
        this.riskTaker = riskTaker;

        double remainingLifeExpectancy;
        if (Character.toString(gender).equals("m")) {
            remainingLifeExpectancy = 76 - age;
        } else {
            remainingLifeExpectancy = 81 - age;
        }

        if (smoker) {
            remainingLifeExpectancy = remainingLifeExpectancy * .8;
        }

        if (riskTaker) {
            remainingLifeExpectancy = remainingLifeExpectancy * .3;
        }

        Random rn = new Random();
        int dayOfYearRandomizer =  rn.nextInt(365) + 1;

        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        cal.add(Calendar.YEAR, (int) remainingLifeExpectancy);
        cal.add(Calendar.DAY_OF_YEAR, (int) dayOfYearRandomizer);
        this.deathDate = cal.getTime(); 
    }

}


