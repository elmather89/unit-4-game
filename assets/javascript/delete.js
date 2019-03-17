// Create an Array of 3 Objects
var threeObjects = [
  {
    name: "Digital Destructor",
    brand: "Honda",
    carsDestroyed: 2001
  },
  {
    name: "Turbulent Combuster",
    brand: "Toyota",
    carsDestroyed: 500
  },
  {
    name: "Sams Man",
    brand: "Sam",
    carsDestroyed: 2
  }
];


// Console log 3 properties for every one of the five objects
for (var i = 0; i < threeObjects; i++) {
    alert("+ threeObject[i].name +");
  console.log(threeObjects[i].name);
  console.log(threeObjects[i].brand);
  console.log(threeObjects[i].carsDestroyed);
}