function greeter1(person) {
  return "Hello, " + person;
}

let user1 = "Jane User";

document.body.innerHTML = greeter1(user1);

// tsc greeter.ts 