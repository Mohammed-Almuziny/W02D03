function cars(make, model, colour, image, regNumber, price) {
  this.make = make;
  this.model = model;
  this.colour = colour;
  this.image = image;
  this.regNumber = regNumber;
  this.price = price;

  this.editPrice = function (newPrice) {
    this.price = newPrice;
  };

  this.showAll = function () {
    console.log(this);
  };
}

// function cars(make, model, colour, image, regNumber, price) {
//   this.make = make;
//   this.model = model;
//   this.colour = colour;
//   this.image = image;
//   this.regNumber = regNumber;
//   this.price = price;

//   this.editPrice = function (newPrice) {
//     this.price = newPrice;
//   };

//   this.showAll = function () {
//     console.log(this);
//   };
// }

let car1 = new cars("one", "sd", "blue", "car1 image", 202013, 20000);
car1.editPrice(15000);
car1.showAll();

let car2 = new cars("two", "mo", "blue", "car2 image", 102016, 30000);
car2.editPrice(20000);
car2.showAll();

let car3 = new cars("three", "ls", "red", "car3 image", 222313, 50000);
car3.editPrice(15000);
car3.showAll();

let car4 = new cars("fure", "osd", "white", "car4 image", 982013, 70000);
car4.editPrice(30000);
car4.showAll();

let car5 = new cars("five", "ls", "black", "car5 image", 445034, 20000);
car5.editPrice(16000);
car5.showAll();
