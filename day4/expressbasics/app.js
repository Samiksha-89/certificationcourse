const express=require('express');
const app =express();
//middleware
app.use('/home',(req,res)=>{
    res.send('<h1> respone from server</h1>');
    console.log(res);
})



//get()
app.get('/thakgaye',(req,res)=>{
    res.send('<h1> respone from my route-> thakna mana hai</h1>')
})

app.get('/hellowrold',(req,res)=>{
    res.send('<h1> respone from me </h1>');
})


app.get('/chages',(req,res)=>{
    res.send("hellowrold")
})
app.listen(8080,()=>{
    console.log('server is running at port 8080');
})