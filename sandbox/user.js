const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2
console.log(map1)

const map2 = new Map([
    ['x', 10],
    ['y', 20],
    ['z', 30]
]);

console.log(map2);

for (const obj of map2) {
    console.log(obj);
}
// console.log(obj)

for (let obj of map2) {
    console.log(obj);
}

// console.log(obj)
// var obj;

var tst = new Object();
tst.__proto__ = () => {
    console.log("Hello");
};
tst.a = 5;
console.log(tst.valueOf);
console.log(tst.a)
console.log(tst.__proto__)

function Person(name, age) {
    this.name = name;
    this.age = age;
  }

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };

var me = new Person("John", 30);
me.greet();

var tst2 = Object()
console.log(tst2)

let john = { name: "John" };

let array = [ john ];

john = null; // overwrite the reference

console.log(array[0]);

let person1 = { name: "John" };
const map = new Map([[person1, "John's details"]]);
console.log(map.get(person1));
person1 = undefined;
console.log(map.get(person1));
map.forEach((value, key) => {
    console.log(key, value);
})

map.delete(person1);
person1 = undefined

map.forEach((value, key) => {
    console.log(key, value);
})

let person2 =  { name: "Yarik" };
const weakMap = new WeakMap([[person2, "Yarik's details"]]);
person2 = undefined;
console.log(weakMap.get(person2));
console.log(weakMap.get(person2));


const map3 = new Map();
map3.set("name", "John").set("age", 30).set("single", true);
map3.forEach((value, key) => {
    console.log(key, value);
});

// const map4 = new weakMap();
// map4.set("name", "John").set("age", 30).set("single", true);
// map4.forEach((value, key) => {
//     console.log(key, value);
// });