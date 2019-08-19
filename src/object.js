// var name = 'Rosen';
// var age = 10;
//
// // 旧写法
// var obj ={
//     name: name,
//     age: age,
//     getName: function () {
//         return this.name;
//     },
//     getAge: function () {
//         return this.age;
//     }
// };

// 新写法
let name = 'Rosen',
    age = 18;
let obj={
    name,
    age,
    getName(){
        return this.name;
    },
    ['get' + 'Age'](){
        return this.age;
    }
}



//Object对象的扩展
console.log(Object.keys(obj));
console.log(Object.assign(obj,{sex:1}));   // 对象整合