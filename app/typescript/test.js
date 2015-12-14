var Ganondarf = (function () {
    function Ganondarf(name) {
        this.name = name;
    }
    Ganondarf.prototype.getName = function () {
        return this.name;
    };
    return Ganondarf;
})();

function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user = { firstname: "Ganondarf", lastname: "The Great" };

document.body.innerHTML = greeter(user);
console.log("Hello");
//# sourceMappingURL=test.js.map
