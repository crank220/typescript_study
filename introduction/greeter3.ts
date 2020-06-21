interface Person {
  firstName: String
  lastName: String
}

function greeter3(person: Person) {
  return "Hello," + person.firstName + person.lastName
}

let user3 = {
  firstName: "i",
  lastName: "crank"
}

document.body.innerHTML = greeter3(user3)

// tsc greeter.ts 