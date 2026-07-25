const obj  = {
    name: "Deep"
}

function greet(age){
    console.log(arguments)
    console.log(`Hello ${this.name} you are ${age}`);
}

const greetArr = (age) => {
    console.log(greet.length)
    console.log(`Hello greetArr ${this.name} you are ${age}`);
}

greet.call(obj , 23);

greetArr.call(obj, 24)


console.log(this)

var person = {
    name: "deep",
    age: 20,
    getAge: function(){
        console.log(this);
        return this.age;
    },
    getAgeArrow: () => {
        console.log(this)
        return this.age;
    }
}
var person2 = {
    age: 24
}
// console.log(person.getAge());
// console.log(person.getAgeArrow());
console.log(person.getAge.call(person2));
console.log(person.getAgeArrow.call(person2));