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

    private Static Room                    bedroom     = new Room("Bo", true); // this.isCluttered = true
    private Static Room                    bathroom    = new Room("Bath", true); // this.isCluttered = true
    private Static Room                    garage      = new Room("Garage", true); // this.isCluttered = true
    private Static ArrayList<CleanLaundry> closet      = new ArrayList<CleanLaundry>();
    private Static ArrayList<Possession>   possessions = new ArrayList<Possession>();
    private Static Bed                     bed         = new Bed("Queen");
    private Static Phone                   phone       = new Phone("Samsung Galaxy S7");
    private Static PackedBag               gymBag      = new PackedBag(false); // this.isPacked = false
    private Static Person                  bo          = new Person(new LocalDate(1985, 2, 9);

    public static void main(String args[]) {
        // shopping
        possessions.add(ToDo.buy("Shoes", "East Towne Mall"));
        possessions.add(ToDo.buy("Socks", "Target"));
        bo.setPossessions(possessions);
        
        // laundry
        CleanLaundry load = ToDo.doLaundry("Clothes");
        if (load != null) {
            foldLaundry(load, closet);
            bed.make(ToDo.doLaundry("Bed"));
        }
        
        // prep for Tara
        ArrayList<Room> rooms = new ArrayList<>(Arrays.asList(bedroom, bathroom, garage));
        for (Room room : rooms) {
            ToDo.cleanRoom(room); // clean bedroom, clean bathroom, clean garage
        }
        
        // prep for trip
        phone = ToDo.putMusicOnPhone(phone, new ArrayList<>(Arrays.asList("Oblivion", "ChildOfLight", "Vocaloid")));
        gymBag = ToDo.packForTrip("OKC", new ArrayList<>(Arrays.asList("Clothes", "Toiletries", "3DS", "Chargers")));
        if (!bo.getIsClean()) {
            bo = ToDo.shower(bo);
        }
    }
}

public ToDo {
    
    // shopping
    public Possession buy(String item, String location) {
        return new Possession(item + " from " + location);
    }

    // laundry
    public CleanLaundry doLaundry(String type) {
        return new CleanLaundry(type).wash("All").dry("Bounce");
    }
    public void foldLaundry(CleanLaundry load, ArrayList<ClosetItem> closet) {
        closet.add(load.fold());
    }
    
    // prep for trip
    public Phone putMusicOnPhone(Phone phone, ArrayList<String> music) {
        phone.addMusic(music);
        return phone;
    }
    public PackedBag packForTrip(String destination, ArrayList<String> items) {
        return new PackedBag(items).setDestination(destination);
    }
    public Person shower(Person person) {
        person.setClean(true);
        return person;
    }
    
    // prep for Tara
    public void cleanRoom(Room room) {
        room.setIsCluttered(false);
    }
}