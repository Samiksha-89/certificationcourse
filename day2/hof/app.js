
//case1
// function a(b){
//     console.log("i am inside function a");
//     b();
// }
// function b(){
//     console.log("i am  inside function b");
// }
// console.log(a(b))

//case2
function a(){
    console.log("i am inside function a");
}
    function b(){
        console.log("i am  inside function b");
        return b;

}



