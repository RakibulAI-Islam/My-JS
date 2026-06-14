const a = {
  fName: "Rakib",
  sleep: function () {
    console.log(`${this.fName} is sleeping`);
  }
}

console.log(a.sleep());