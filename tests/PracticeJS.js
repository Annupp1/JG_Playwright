//creating custom error

/*let p= {
    name : "Anurag",
    Age : 25,
    height: 180
}

function Drink(p){
    if(p.Age>18){
        console.error("Drinking !!!");
    }
    throw new Error (" not the valid age to drink")
}

try{
    Drink(p);
}
catch(e){
    console.log("something went wrong!!");
   // console.log(e.getMessage);
}
*/
//Temporal dead zone (TDZ)

/*console.log("hi")
console.log(a);
console.log("anurag");
console.log("puri");
let a= 10;
console.log(a);
*/
//clonning obj

/*let obj ={
    name: "Anurag",
    age : 25,
    Drink : false
}
let ob1= {... obj}
obj.height= 180;
console.log(ob1);
console.log(obj);
*/

//merging obj

/*let obj ={
    name: "Anurag",
    age : 25,
    Drink : false,
    City : "blr"
}
let obj1={
    name: "Anup",
    age : 26,
    Drink : true
}

let c =Object.assign(obj, obj1);
console.log(c);
*/

//closure

/* function outer(){
    let a =10;
    function inner(){
        let a= 2;
        console.log(a);
       // console.log(b);
    }
    inner()


}
outer();
*/
//push, pop, shift, unshift

/* let array1 = [1,2,3,4,5];
array1.push (6,7)
console.log(array1);
array1.pop();
console.log(array1);
array1.shift();
console.log(array1);
array1.unshift(0,20)
console.log(array1);
*/


//Slice and splice
let a = ["a", "b", "c", "d"]
let a1= a.slice(1,3);
console.log(a);
console.log(a1);

let a2 = ["a", "b", "c", "d"]
a2.splice(2, "j","k");
console.log(a2);



