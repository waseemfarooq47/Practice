//variables just like container which contains our data//

//var      but it was function scope variable.


// ES6
// let     we can change the value through the exection of program.  ES6 bloack scopr variables.
// const   we cannot change the value throughout the execution.


// var names = "aqib fayaz"; //function scoped
// console.log(names)

// names = "Qalander";
// console.log(names)



// let nameu = "basir ahmad"; //block scoped
// console.log(nameu)

// nameu = "ashraf shadi";
// console.log(nameu)



// const password = "123456";
// console.log(password)




// var trying = () => {
//     for (let num = 0; num < 6; num++) {
//         console.log(num)
//     }
//     console.log(num);
// }

// trying();




// primitive datatypes 
// 1 Number
// 2 String
// 3 null
// 4 Boolean
// 5 undefined



// let amount = 34567;
// let amounttype = "cash";
// let balance = null;
// let renewcode = true;
// let paid;
// paid = 7000;
// console.log(typeof (paid))



// Arrays > in arrays we can store values of different datatypes 


// syntax
// 1 let arr=[]
// 2 let arr= new Array()

// examples 

// let student = [
//     'waseem', true, null, 7000
// ]

// let conting = ['waseem', 'asima', 'zahid', 'suhail', 'yawar', 'aaqib', 'umer']

// console.log(conting)
// console.log(conting.sort())


let marks = [200, "orange", 45, true, 477, "blue", 37, null]

console.log(marks)

// *****somepredefined functions regarding arrays 
// marks.slice(0, 2)  //slice(start,end)
//marks.splice(7, 1, "waseem")  //splice(start,deletecounter,add/remove)
//console.log(marks)
// marks.unshift("hunk") adds array element at begining
// marks.shift("hunk") removes array element at begining
// marks.push("tree") adds array element at end
// marks.pop("tree") removes array element at end



// objects 
// syntax
// let obj={}

// example
// let teacher = {
//     name: "Waqar Ahmad",
//     qualification: "PHD Physics",
//     teaches: ['physics', 'chemistry'],
//     salary: 80000,
//     married: true
// }

// console.log(teacher.name)

// JSON very popular javascript object notation

// let books = [
//     {
//         name: "billest owners",
//         author: "waseem farooq",
//         rating: 2.5
//     },
//     {
//         name: "kite runners",
//         author: "Hossain",
//         rating: 4.5
//     }
// ]
// console.log(books[1].author)



// conditonal statements

//if and else       if >> condition true    ||    else >> condition false both cannot be executed at the same time.
//syntax
//if(){}
// else{}
// var x = 17;
// if (x % 2 == 0) {
//     alert(`${x}  is even`);
// } else {
//     alert(`${x} is odd`);
// }

// another method of syntax but it cannot work i n multiple conditions

// let x = 43;
// x % 2 == 0 ? console.log(`${x} is even`) : console.log(`${x} is odd`);

// multiple condition examples

// let day = 'monday';
// if (day == 'monday') {
//     console.log(day + " its working");
// } else if (day == 'tuesday') {
//     console.log(day + " its coding day");
// } else if (day == 'wednesday') {
//     console.log(day + " its mentorship day");
// } else if (day == 'thursday') {
//     console.log(day + " its mentorship day");
// } else if (day == 'friday') {
//     console.log(day + " its half day");
// } else if (day == 'saturday') {
//     console.log(day + " its weekend");
// } else if (day == 'sunday') {
//     console.log("off");
// } else {
//     console.log("wrong entry, Try Again!");
// }


//loops 

//   for loops we require three things
//   1. intialization
//   2. condition
//   2. increment/decrement


// while loop
// let a = 1;
// while (a < 10) {
//     console.log("iteration " + a);
//     a++;
// }

// do while   if condition is falsi still it executes once.
// let b = 0;
// do {
//     console.log(b);
// } while (b > 10)

// for (let z = 10; z < 30; z++) {
//     console.log(z);
// }

// some predefined functions string examples
// 1. charAt()
// 2. slice()
// 3. replace()
// 4. split()
// 4. toString()



