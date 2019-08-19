new Promise((resolve, reject) =>{
    // 写主逻辑代码
    // 成功请调用 resolve(),对应 then 方法的第一个参数
    // 失败请调用 reject(),对应 then 方法的第二个参数
}).then(()=>{},()=>{

});


// 链式调用

var promise1 = new Promise((resolve, reject) =>{
    // 写主逻辑代码
    // 成功请调用 resolve(),对应 then 方法的第一个参数
    // 失败请调用 reject(),对应 then 方法的第二个参数
});


var promise2 = new Promise((resolve, reject) =>{
    // 写主逻辑代码
    // 成功请调用 resolve(),对应 then 方法的第一个参数
    // 失败请调用 reject(),对应 then 方法的第二个参数
});

promise1.then(()=>{
    return promise2;
}).then(()=>{
   console.log('promise2 success')
});

