var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        return firstName + middleInitial + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + person.lastName;
}
var user4 = new Student("jane", "Mr.", "last");
document.body.innerHTML = greeter(user4);
