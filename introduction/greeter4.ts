class Student {
  fullName: String;
  constructor(public firstName, public middleInitial, public lastName) {
    return firstName + middleInitial + lastName
  }
}

interface Person {
  firstName: String;
  lastName: String;
}

function greeter4(person: Person) {
  return "Hello, " + person.firstName + person.lastName
}

let user4 = new Student("jane", "Mr.", "last")

document.body.innerHTML = greeter4(user4)