// object
// let person={
//         name: 'samiksha',
//         age: 21,
//         favColour: 'pink'
//  }

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// person.name = 'samiksha patil';
// console.log(person);
// // adding
// person.gender='female';
// console.log(person);
// // delete
// delete person.favColour;
// console.log(person);


// advance Object
let person={
    name: 'samiksha',
    age: 21,
    favColour: 'pink',
    fun:function print(){
        return(`my nameis ${this.name}and age is ${this.age}`);
    },
    newObj:{
        gender:"female",
        address:"kognoli",
    }
}
// console.log(person.fun());
console.log(person.newObj.address);