var Ganondorf = (function () {
    function Ganondorf(name) {
        this.name = name;
    }
    Ganondorf.prototype.getName = function () {
        return this.name;
    };
    return Ganondorf;
})();

function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user = { firstname: "Ganondarf", lastname: "The Great" };

document.body.innerHTML = greeter(user);
//# sourceMappingURL=test.js.map
