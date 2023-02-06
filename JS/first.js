// const obj={
//     fs:"kAran",
//     ls:"preetsingh"

// }

// function setattribute(param){
//     for(let i in param){
//         param[i]=`hlo bro this is chnaged to ${i} `;

//     }
// }
// console.log(obj.fs);
// setattribute(obj);
// console.log(obj.fs);











// const radius=[2,23,4,56,24,22,12,138];
// const AREA=(radius)=>Math.PI*radius*radius;
// const CIRCUM=(radius)=>2*Math.PI*radius;
// const DIAMETER=(radius)=>2*radius;
// const calculate=(radius,logic)=>{
//     output=[];
//     for (let i in radius){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log(calculate(radius,AREA));






// const Area=(radius)=>{
//     output=[];
//     for(let i in radius){
//     output.push(Math.PI*radius[i]*radius[i]);
   
//     }
//     return output;
// }
// let area=Area(radius);
// console.log(area);

//  --------------------------------------------------map functiion internally working
// let arr=[1,2,3,4,5,6,7,8,9];
  
// const MAP=(arr,logic)=>{
//    let output=[]
//     for(let i in arr){
//         output.push(logic(arr[i]));

//     }
//     return output;
// }

// const double=(num)=>2*num;
// const triplet=(num)=>3*num;


// const output=MAP(arr,triplet);
// console.log(output);




// ------------------------------------filter function internally working

const arr=[12,24,17,278,11,21,87,19,11];

const filters=(arr,logic)=>{
    let output=[];
    for(let i in arr){
        if(logic(arr[i])){
            output.push(arr[i]);
        }
    }
    return output;
}
const output=filters(arr,(num)=>!(num%2));
console.log(output);
