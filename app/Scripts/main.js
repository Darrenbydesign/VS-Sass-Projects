var Link = (function () {
    function Link(name) {
        this.name = name;
    }
    Link.prototype.getName = function () {
        return this.name;
    };
    return Link;
})();
function greeter(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
var user = { firstname: "Ganondarf", lastname: "The Great" };
document.body.innerHTML = greeter(user);
console.log("Hello");

//# sourceMappingURL=maps/main.js.map
