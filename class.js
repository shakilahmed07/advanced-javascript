// example ES6
class bus {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myBus = new bus(`Handy`, 1974);
// console.log(myBus);
