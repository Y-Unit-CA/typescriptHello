var Door = /** @class */ (function () {
    function Door(name, initialState) {
        this.location = name; // "this" is a reference to the current object
        this.isOpen = initialState;
    }
    Door.prototype.open = function () {
        this.isOpen = true;
    };
    Door.prototype.shut = function () {
        this.isOpen = false;
    };
    Door.prototype.slam = function () {
        this.shut();
        console.log("BAM!");
    };
    return Door;
}());
var DoorInspector = /** @class */ (function () {
    function DoorInspector() {
    }
    DoorInspector.prototype.inspect = function (door) {
        console.log("Door at ".concat(door.location, " is open? ").concat(door.isOpen));
    };
    DoorInspector.prototype.paint = function (door, color) {
        door.color = color;
    };
    return DoorInspector;
}());
var frontDoor = new Door("Front", false);
console.log("Door at ".concat(frontDoor.location, " is open? ").concat(frontDoor.isOpen));
frontDoor.open();
console.log("Door at ".concat(frontDoor.location, " is open? ").concat(frontDoor.isOpen));
frontDoor.slam();
console.log("Door at ".concat(frontDoor.location, " is open? ").concat(frontDoor.isOpen));
var garageDoor = new Door("Garage", true);
garageDoor.shut();
