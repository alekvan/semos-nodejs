const { counter } = require("./stuff");
const events = require("events");

class Person extends events.EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

let james = new Person("james");
let mary = new Person("mary");
let kevin = new Person("kevin");
let people = [james, mary, kevin];

people.forEach((person) => {
  person.on("speak", (msg) => {
    console.log(person.name + " said " + msg);
  });
});

james.emit("speak", "hey dudes!");
