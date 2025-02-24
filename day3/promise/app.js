let promise = new Promise(function(reslove,reject){
        console.log("wait for promise");
        setTimeout(function(){
                 let data="promise is resolved data mil gaya";
                let err=`promise is rejected, miaim paise nhidung `;
                reslove(data);
                reject(err);
        },2000)
})


promise.then(function(data){
console.log(data);
}).catch(function(err){
    console.log(err);
})