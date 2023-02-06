// class Person{
//     constructor(name,type){
//         this.name=name;
//         this.type=type;
//     }
//     display(){
//         console.log(`hi my name is ${this.name} and i am of ${this.type} player`);

//     }
//     where(){
//         console.log(this);
//     }
// }

// class Wizard extends Person{
//     constructor(name,type){
//         super(name,type);
//         this.x=`hi ${this.name} i am here to kick you out`;
        
//     }
//     wheres(){
//         console.log(this);
//     }
// }

// const p1=new Wizard("karan","healthy");
// const p2=new Person("jassi","healthy");
// p1.wheres();
// p2.where();




// let obj1={
//     karan:90,
//     jassi:55,
//     ritik:29
// }
// let B=obj1;
// obj1=1000;
// console.log(B);
// console.log(obj1);


let obj={
    1:100,
    2:200,
    3:300,
    4:400,
    5:500
};
let keyss=Object.keys(obj);
console.log(keyss);
let z=Object.keys(obj).map((key)=>obj[key]*10);
console.log(z);