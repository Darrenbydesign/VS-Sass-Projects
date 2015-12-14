class Ganondarf {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user = { firstname: "Ganondarf", lastname: "The Great" };

document.body.innerHTML = greeter(user);
console.log("Hello");