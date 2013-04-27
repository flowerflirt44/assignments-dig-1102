$var assert = require("assert"),
    hundredDoors = require("./assignment-final-prod");

// researching pass and still struggling to understand things such as this.map and how it effects everything
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

//can we change the state of a door(create toggle function)?
assert(hundredDoors.hallway.toggle);

// can we change closed to open?
assert(hundredDoors.hallway.toggle(0) === 1);

// are all doors in the right place after the first pass?
assert(hundredDoors.hallway.pass)

hundredDoors.hallway.pass().forEach( function( door ) {
    assert.equal( door, 1);
});