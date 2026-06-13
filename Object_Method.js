const myObject = 
{
  fName: "John",
  lName: "Doe",
  fullName: function () 
  {
    return this.fName + " " + this.lName;
  }
}

console.log(myObject.fullName());