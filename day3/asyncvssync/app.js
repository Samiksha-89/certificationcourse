
//sync
// console.log("first");
// console.log("second");
// console.log("third");

//async
// console.log("first");
// setTimeout(function(){
//     console.log("it will after 2sec");
// }, 2000)
// setTimeout(function(){
//     console.log("it will after 4sec");
// }, 4000)
// console.log("third");


//setInterval

// setInterval(function(){
//     console.log("it wil run after 2sec");
// },2000)

let count=0;
let IntervalID=setInterval(function(){
            count++;
            console.log(`my count is: ${count}`);

            if(count==5){
                clearInterval(IntervalID);
                console.log(`task completed`);
            }
},2000)