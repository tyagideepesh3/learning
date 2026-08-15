//  1.    this keyword in global space
console.log(this); // globalObject :- window object(js), global obj

//  2.  this keyword inside a function.
// value of this keyword inside a function depends upon how function is being called
// if in strinct mode :- it is undefined or null.
// if in non-strict mode :- it is window obj or global obj

function x() {
  console.log(this);
}
x();

//  3.  this inside an object function.
// value of this keyword is determined during the runtime depending upon the context

const obj = {
  a: 10,
  print: function () {
    console.log(this.a);
  },
};

obj.print();

//  4.  this keyword with call, bind and apply
// these methods are used for function sharing and you can override value of this keyword using
// call, bind and apply

const student = {
  name: "deep",
  age: 10,
  print: function (info) {
    console.log(this, info);
  },
};

const student2 = {
  name: "deepika",
  age: 12,
};

student.print.call(student2, "call");
student.print.apply(student2, ["apply"]);
const bindFunc = student.print.bind(student2, "bind");
bindFunc();

//  5.  this keyword inside an arrow function
// arrow function do not provide their own this binding
// it taked the value of enclosing lexical context
// value of this keyword in taken from outer normal function

const obj2 = {
  a: 10,
  x: () => {
    console.log(this);
  },
};

obj2.x();

const obj3 = {
  a: 10,
  x: function () {
    console.log(`obj3 x `, this);
    const y = () => {
      console.log(`obj3 y `, this);
    };
    y();
  },
};

obj3.x();

const obj4 = {
  a: 10,
  x: () => {
    console.log(`obj4 x `, this);
    const y = () => {
      console.log(`obj4 y `, this);
    };
    y();
  },
};

obj4.x();

const obj5 = {
  a: 10,
  x: function () {
    console.log(`obj5 x `, this);
    const y = () => {
      console.log(`obj5 y `, this);
    };
    return y;
  },
};
const y = obj5.x();
// Arrow functions completely ignore how they are called.
// They never determine this from the call site.
// this is inherited from the surrounding lexical scope where it was defined.
y();

const obj6 = {
  a: 10,
  x: function () {
    console.log(`obj6 x `, this);
    function y() {
      console.log(`obj6 y `, this); //window
    }
    y();
    // return y; // window
  },
};
const y6 = obj6.x();
// y6()
// {...} does not create their own this keyword but function does
const familyObj = {
    name: "Deep",
    age: 10,
    sayHlw: function(){
        console.log("sayHlw, ", this); // obj
    },
    sayHi: () => {
        console.log("sayHi, ", this); // {}
    },
    parentObj: {
        name: "Pradeep",
        age: 40,
        sayHlw: function(){
            console.log("sayHlw parentObj, ", this); // parentObj
        },
        sayHi: () => {
            console.log("sayHi parentObj, ", this);// {}
        },
    }
}
familyObj.sayHi();
familyObj.sayHlw();
familyObj.parentObj.sayHi();
familyObj.parentObj.sayHlw();

//  6.  this keyword inside a class

class User {
  constructor(name) {
    this.name = name;
    console.log(this); // user object
  }
  greet() {
    console.log("User Greet ", this); // user object
  }
  greetArr = () => {
    console.log("User greetArr ", this); // call === user.object ? user : undefined ;
  };
}

const user = new User("deep");
user.greet(); // depends upon how it is being called => user
user.greetArr();
const newFunc = user.greet;
newFunc(); // undefined
const newFuncArr = user.greetArr;
newFuncArr(); // does'nt depend upon how called depends on how crated user

//  7.  this keyword with settimeout

// const obj7 = {
//   name: "obj7",
//   greetArr: function () {
//     setTimeout(() => {
//       console.log("obj7 greet arr", this);
//     }, 1000);
//   },
//   greet: function () {
//     setTimeout(function () {
//       console.log("obj7 greet normal ", this);
//     }, 1000);
//   },
//   greetFix: function(){
//     setTimeout(function(){
//         console.log("obj7 greet fix ", this)
//     }.bind(this), 1000);
//   }
// };
// obj7.greet(); // called independently this => window
// obj7.greetArr(); // normal obj7 as this
// obj7.greetFix(); // normal obj7 as this because of bind

// const obj8 = {
//     name: 'obj8',
//     greet: function(){
//         console.log('obj8 greet ',this)
//     }
// }
// setTimeout(obj8.greet, 1000); // undefined or global objct as execution is independent
// setTimeout(function(){
//     obj8.greet() // obj8 as execution is dependent
// }, 1000)
// setTimeout(() => {
//     obj8.greet(); // obj8 as execution is dependent
// }, 1000);

// Important Output Question

function makeUser(){
    return {
        name: 'user',
        ref: this
    }
}

const userObj = makeUser();// called as normal function call, parent = global; so this is global
console.log('makeUser ', userObj)

var len = 4;
function cb(){
    console.log(this .len)
}
const obj9 = {
    len: 5,
    method(fn){
        fn()
    }
}
obj9.method(cb); // undefined or window

const obj10 = {
    total: 0,
    add: function(a){
        this.total += a;
        return this;
    },
    sub: function(a){
        this.total -= a;
        return this;
    },
    mul: function(a){
        this.total *= a;
        return this;
    },
    div: function(a){
        this.total /= a;
        return this;
    },
    print(){
        console.log(this.total);
        
    }
}
obj10.add(12).mul(2).sub(5).print();
