const person = {
  fullName: function( city, country) {
    return this.fName + " " + this.lName + " from " + city + ", " + country;
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

console.log(person.fullName.call(person1, "Dhaka", "Bangladesh")); // Output: Sumit Saha from Dhaka, Bangladesh
console.log(person.fullName.call(person2, "New York", "USA")); // Output: John Doe from New York, USA