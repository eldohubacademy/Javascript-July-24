// higher order fuctions -- take funtions as arguments, they can also return function
// callback fn
function claculate(num, num2){
    // input validation
    console.log(num*num2);
    return num*num2
}

// expect that the arguments of type number
// arg-- number, string, array, object, function

function one(str){
    console.log("code in f one - input: "+ str);  
}


function two(email,fnarg){
    fnarg(email)
}
// fnarg -- our callback funtion -  a callback function is afunction passed into another function as an argument. This function(two) is responsible for calling the callbact fn(fnarg)

two("albert@eldohub.co.ke", one) // calling two, with 2 args - a string and a function


// array methods that are themselves HOF -- forEach, filter, map, sort

const numbers = [32,43,5,10,50,8,19]

numbers.forEach(  number=>{
        console.log( number * 2 );     
} )



// multiplyByTwo(32)
// multiplyByTwo(43)
// multiplyByTwo(10)


// a function that returns a function

function superCool(){
    console.log( "does some cool stuff" )
    let operate = 790*200 
    return  function boringThings(){
        console.log("Doing some boring things")
        return "boring"
    }
}

let result = superCool()

console.log(result())




let newres = numbers.find(num=>num<10)

console.log(newres);
