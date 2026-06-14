const person = {
  fullName: function() {
    return this.fName + " " + this.lName;
  }
};

const person1 = {
  fName: "Sumit",
  lName: "Saha"
};

const person2 = {
  fName: "John",
  lName: "Doe"
};

console.log(person.fullName.call(person1)); // Output: Sumit Saha
console.log(person.fullName.call(person2)); // Output: John Doe