class Door {
    location : String ;
    isOpen : boolean;
    color : String;

    constructor( name : String, initialState : boolean ) {
        this.location = name ;        // "this" is a reference to the current object
        this.isOpen = initialState;
    }

    open() {
        this.isOpen = true;
    }

    shut() {
        this.isOpen = false;
    }

    slam() {
        this.shut();
        console.log( "BAM!" );
    }
}

class DoorInspector {
    inspect( door : Door ) {
        console.log( `Door at ${door.location} is open? ${door.isOpen}` );
    }

    paint( door : Door, color : String ) {
        door.color = color;
    }
}

let frontDoor : Door = new Door( "Front", false );
console.log( `Door at ${frontDoor.location} is open? ${frontDoor.isOpen}` );
frontDoor.open();
console.log( `Door at ${frontDoor.location} is open? ${frontDoor.isOpen}` );

frontDoor.slam();
console.log( `Door at ${frontDoor.location} is open? ${frontDoor.isOpen}` );

let garageDoor : Door = new Door( "Garage", true );
garageDoor.shut();
