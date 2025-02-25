 const { create } = require("domain");
let fs=require(`fs`);

// //perform CRUD

// let data="hii today's wether is cool";

// //task1 write data
// // fs.writeFile('demo.txt',data,{
// //     encodeing:'uft-8'
// // },(err)=>{
// //     if(err) throw err
// //     console.log("file is created sucessfully");
// // })

// //way2

// fs.writeFileSync('demo.txt',data,
//     (err)=>{
//                  if(err) throw err
//                  console.log("file is created sucessfully");
//             })

// // read 
//  let fileread=fs.readFileSync('demo.txt');
//   console.log(fileread.toString());

//  //update

//  fs.appendFileSync('demo.txt','\n I hope this weathwer will be some for');

//  //delete

//  fs.unlinkSync('demo.txt');

let data="I am samiksha";

fs.writeFileSync('f1.txt',data,
    (err)=>{
        if(err) throw err
        console.log("I am samiksha");

})

//read

let fileread=fs.readFileSync("f1.txt");
console.log(fileread.toString());

//update
fs.appendFileSync('f1.txt',"\n I am living in kognoli");