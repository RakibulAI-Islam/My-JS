function Person(first, last, age) {
    this.fName = first;
    this.lName = last;
    this.age = age;
    this.fullName = function () {
        return this.fName + " " + this.lName;
    }
};

const sumit = new Person("Sumit", "Shaha", 35);
const rakib = new Person("Rakibul", "Islam", 30);
const jasim = new Person("Jasim", "Uddin", 25);

//console.log(sumit);
//console.log(rakib);
//console.log(jasim);

rakib.country = "Bangladesh";
console.log(rakib);