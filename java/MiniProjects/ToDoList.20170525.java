package earth.west.na.us.wi.dane.madison.broadway.bo.main;

import earth.life.Room;
import earth.life.Bed;
import earth.life.Phone;
import earth.life.PackedBag;
import earth.life.Person;

import java.util.*;

/**
 * To Do List
 * Created on 5/25/2017
 *
 * @author Bo Broadway
 */

public ToDoListSeventeenMayTwentyFifth {

    public static void main(String args[]) {
        // declare
        Room                    bedroom     = new Room("Bo", true); // this.isCluttered = true
        Room                    bathroom    = new Room("Bath", true); // this.isCluttered = true
        Room                    garage      = new Room("Garage", true); // this.isCluttered = true
        ArrayList<Room>         rooms       = new ArrayList<>(Arrays.asList(bedroom, bathroom, garage)); // rooms I need to clean
        ArrayList<CleanLaundry> closet      = new ArrayList<>(); // do laundry
        ArrayList<Possession>   possessions = new ArrayList<>(); // go shopping
        Bed                     bed         = new Bed("Queen");
        Person                  bo          = new Person(new LocalDate(1985, 2, 9); // Bo Broadway, Age 32
        Phone                   phone;
        PackedBag               gymBag;
        
        // shopping
        possessions.add(ToDo.buy("Shoes", "East Towne Mall")); // buy shoes
        possessions.add(ToDo.buy("Socks", "Target")); // buy socks
        bo.setPossessions(possessions);
        
        // laundry
        CleanLaundry load = ToDo.doLaundry("Clothes"); // do clothes laundry
        if (load != null) {
            closet = foldLaundry(load, closet); // put clothes away
            bed.make(ToDo.doLaundry("Bed")); // do bed laundry
        }
        
        // prep for Tara
        for (Room room : rooms) {
            room = ToDo.cleanRoom(room); // clean bedroom, clean bathroom, clean garage
        }
        
        // prep for trip
        ArrayList<String> phoneMusic = new ArrayList<>(Arrays.asList("Oblivion", "ChildOfLight", "Vocaloid"))
        phone = ToDo.putMusicOnPhone(new Phone("Samsung Galaxy S7"), phoneMusic); // add music to phone
        ArrayList<String> packItems = new ArrayList<>(Arrays.asList("Clothes", "Toiletries", "3DS", "Chargers"))
        gymBag = ToDo.packForTrip("OKC", packItems); // pack
        if (!bo.getIsClean()) {
            bo = ToDo.shower(bo); // shower
        }
    }
    
    public static class ToDo {
        // shopping
        public static Possession buy(String item, String location) {
            return new Possession(item + " from " + location);
        }
    
        // laundry
        public static CleanLaundry doLaundry(String type) {
            return new CleanLaundry(type).wash("All").dry("Bounce");
        }
        public static ArrayList<CleanLaundry> foldLaundry(CleanLaundry load, ArrayList<CleanLaundry> closet) {
            closet.add(load.fold());
            return closet;
        }
        
        // prep for trip
        public static Phone putMusicOnPhone(Phone phone, ArrayList<String> music) {
            phone.addMusic(music);
            return phone;
        }
        public static PackedBag packForTrip(String destination, ArrayList<String> items) {
            return new PackedBag(items).setDestination(destination);
        }
        public static Person shower(Person person) {
            person.setClean(true);
            return person;
        }
        
        // prep for Tara
        public static Room cleanRoom(Room room) {
            room.setIsCluttered(false);
            return room;
        }
    }
}

