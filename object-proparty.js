const students = [
  { id: 101, name: "Nayem" },
  { id: 102, name: "Shakil" },
  { id: 103, name: "Anik" },
  { id: 104, name: "Siam" },
];
// map
const map = students.map((x) => x.name);
console.log(map);

// filter
const filter = students.filter((z) => z.id > 102);
console.log(filter);

// find
const find = students.find((a) => a.id > 103);
console.log(find);
