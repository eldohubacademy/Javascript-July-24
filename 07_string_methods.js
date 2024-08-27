//  When create/define a string, we automatically inherit properties and methods from the global built-in Sting object

// e.g legnth, startsWith, toUpperCase ... 

const email = "lbert@eldohub.co.ke   "

console.log( email.length );

console.log( email.includes("@") ); // input validation - -invalid input
console.log( email.includes("z") );

console.log( email.charAt(0).toUpperCase() ); // a


const newEmail = email.replace(".ke", "m")
console.log(newEmail);
