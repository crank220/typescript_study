function greeter(person) {
    return "Hello," + person.firstName + person.lastName;
}
var user = {
    firstName: "i",
    lastName: "crank"
};
document.body.innerHTML = greeter(user);
