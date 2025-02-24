// function Details(){
//     this.name='samiksha';
//     this.age=21;
//     this.address="kognoli";
// }
// let user=new Details();
// console.log(user.name);

//coustom
function Details( name,age,place){
    this.name=name;
    this.age=age;
    this.address=place;
    this.description=function(){
        return(`my name is ${this.name} my age is ${this.age}`)
    }
}
let user=new Details("samiksha",21,"kognoli");
let user1=new Details("priya",21,"nipani")
let user2=new Details("abhi",24,"kognoli");
console.log(user);
// console.log(user1);
console.log(user.description());
 console.log(user2);