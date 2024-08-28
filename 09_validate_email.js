// Write a function `validateEmail(email)` that takes an email address `email` and returns true if it is a valid email address format, false otherwise.

// albert.kip@gmail.com

// must have @ symbol
// end with .com , .co.ke , .
//  . cannot be the las char or first
// @ neither at the end start

function validateEmail(email){
    const substrings = email.split("@")
    if(substrings.length == 2){
        if(email.startsWith(".") || email.endsWith(".") || email.startsWith("@")|| email.endsWith("@") ){
            return false
        }else{
            if( substrings[1].includes(".") ){
                return true
            }else{
                return false
            }
        }
    }else{
        return false
    }    
}
// nested if else 
// RegExp -- solve this ---- patterns -- match()


console.log( validateEmail("albert@gmai@l.com")  );
console.log( validateEmail("albertgmail.com")  );
console.log( validateEmail("albertgmail.com.")  );
console.log( validateEmail(".albertgmail.com")  );

console.log( validateEmail("albert@gmail")  );
console.log( validateEmail("albert@gmail.ke")  );

