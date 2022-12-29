class Cat {
  //...
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
    this.speak = function () {
      return `${this.name} says meow!`;
    };
  }
}

class Dog {
  //...
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
    this.speak = function () {
      return `${this.name} says woof!`;
    };
  }
}

class Bird {
  //...
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
    this.speak = function () {
      return `It'\s me! ${this.name},the parrot!`;
    };
  }
}
// class Bird2 {
//   //...
//   constructor(name, sex) {
//     this.name = name;
//     this.sex = sex;
//     this.speak = function () {
//       return `${this.name} says squawk!`;
//     };
//   }
// }
