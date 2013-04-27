$var assert = require("assert"),
    hundredDoors = require("./assignment-final-prod");

//Mon - still not completely understanding toggle need to try and work on it more effectivly

//do we have a hallway?
assert(hundredDoors.hallway);

//do we have doors in the hallway?
assert(hundredDoors.hallway.doors);

//do we have 10 doors?
assert.equal(hundredDoors.hallway.doors.length, 5);

//are all the doors closed?
hundredDoors.hallway.doors.forEach(function(door){
    assert.equal(door,0);
});

