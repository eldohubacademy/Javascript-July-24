// objects in js

let student = {
    name: "Jackson Omondi",
    age: 23,
    siblings: ["george", "anita","geofrey"],
    course: "Computer Science",
    isDancer: true,
    sing: ()=>{
        console.log("Jackson singing.!!! again!!");        
    },
    study: function (){
            console.log("Jackson studying");
    }
}

const eldohubStudent = Object.create(student)


student.study() // console.log()

// Functions found within an object are called Methods.
// sing and study are methods of the student object


console.log(typeof console);

// javascript is built with many objects e.g console, Math, Date, 
console.log( Math.PI  );  // 3.141592653589793
console.log(  Math.random()  ); // a random number between 0 and 1
console.log( Math.abs(-12) ); // 12
console.log( Math.round(23.83277 ) ); // round off a number to nearest whole number
console.log( new Date().toLocaleDateString() ); // epoch number - number of seconds since 1970/01/01

// {} , new Object() , Object.create()

// in JS almost everything is an object

// datatypes in have objects built in -- -these provive properties and methods to manipulate this data types

// Array , Object, String , Number

console.log("albert".length);



// Array Methods -- 5 examples - code
// String Methods -- 5 examples - code

