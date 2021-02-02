// class
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

let myBus = new bus(`Loyd`, 1985);
console.log(myBus); // show bus { name: 'Loyd', year: 1985}
