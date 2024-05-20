// var x = 5;
// y = 10;
// var obj = {
//   x: 10,
//   doIt: function doIt(){
//     console.log("setting x")
//     var x = 20;
//     // let x = 20;
//     setTimeout(function(){
//       console.log(this.x);
//       // console.log(x);
//       // console.log(this.y);
//     })
//   }
// }

// // console.log(x);
// obj.doIt();
// // console.log(x);
// // console.log(obj.x)
// // obj.doIt();

// var test = {
//   test(name){
//     console.log(name);
//   },

//   test2: function test2(name){
//     console.log(name);
//   }
// }


// test.test("sd")
// test.test2("sd")

{/* <div>adsa</div> */}

function multiply(n) {
  return n * this.modifier;
}

const x2 = {modifier: 2};
const x5 = {modifier: 5};

console.log(
  multiply.apply(x2, [1, x5, 10])
);

console.log(
  multiply.call(x2, [1, x5, 10])
);

// import alert from 'alert';

var x = 5;
// alert("sd")

var hero = {
  _name: 'John Doe',
  getName: function() {
    return this._name;
  }
}

var getHeroName =   hero.getName;
var tst = hero.getName()
console.log(getHeroName());
console.log(hero.getName());
console.log(tst);

let summer = {
  data: [1, 2, 3, 4, 5],
}

let winter = {
  data: [6, 7, 8, 9, 10],
  getLogger: function() {
    return () => console.log(this.data);
  }
}

var logger = winter.getLogger();
logger();
logger.call(summer)

console.log(null == undefined);
console.log(2.3 === (1+1.3));

'use strict';
f.call(null);
function f() {
  // alert(this);
}