class Link {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user = { firstname: "Ganondarf", lastname: "The Great" };
document.body.innerHTML = greeter(user);
console.log("Hello");

//# sourceMappingURL=maps/main.js.map
