## Methods in Javascript

**Methods in JavaScript are fundamental building blocks that encapsulate reusable blocks of code, allowing you to perform specific tasks efficiently.** They're essential for organizing your code, promoting modularity, and enhancing code readability.

**Key Concepts:**

- **Function:** A named block of code that can be executed multiple times.
- **Method:** A function that is associated with an object and can access the object's properties.
- **Object:** A collection of properties (data) and methods (functions) that represent a real-world entity or concept.

**Core JavaScript Methods:**

JavaScript provides a vast array of built-in methods that operate on different data types, including:

- **String Methods:**

  - `length`: Returns the length of a string.
  - `toUpperCase()`: Converts a string to uppercase.
  - `toLowerCase()`: Converts a string to lowercase.
  - `indexOf()`: Returns the index of the first occurrence of a substring.
  - `slice()`: Extracts a part of a string.
  - `split()`: Splits a string into an array of substrings.
  - `replace()`: Replaces a substring with another.
  - `trim()`: Removes whitespace from the beginning and end of a string.
  - Many more...

- **Number Methods:**

  - `toFixed()`: Formats a number to a specified number of decimal places.
  - `toPrecision()`: Formats a number to a specified number of significant digits.
  - `parseInt()`: Parses a string and returns an integer.
  - `parseFloat()`: Parses a string and returns a floating-point number.
  - `Math.sqrt()`: Calculates the square root of a number.
  - `Math.abs()`: Returns the absolute value of a number.
  - `Math.random()`: Generates a random number between 0 and 1.
  - Many more...

- **Array Methods:**

  - `length`: Returns the length of an array.
  - `push()`: Adds elements to the end of an array.
  - `pop()`: Removes the last element from an array and returns it.
  - `shift()`: Removes the first element from an array and returns it.
  - `unshift()`: Adds elements to the beginning of an array.
  - `join()`: Joins the elements of an array into a string.
  - `slice()`: Extracts a part of an array.
  - `splice()`: Adds/removes elements from an array.
  - `forEach()`: Executes a function for each element in an array.
  - `map()`: Creates a new array by transforming each element.
  - `filter()`: Creates a new array with elements that pass a test.
  - `reduce()`: Reduces an array to a single value.
  - Many more...

- **Date Methods:**

  - `getFullYear()`: Returns the year of a date.
  - `getMonth()`: Returns the month of a date (0-11).
  - `getDate()`: Returns the day of the month of a date.
  - `getHours()`: Returns the hours of a date (0-23).
  - `getMinutes()`: Returns the minutes of a date (0-59).
  - `getSeconds()`: Returns the seconds of a date (0-59).
  - `getTime()`: Returns the milliseconds since January 1, 1970.
  - Many more...

- **Other Methods:**
  - `console.log()`: Logs messages to the console.
  - `alert()`: Displays an alert box.
  - `prompt()`: Prompts the user for input.
  - `confirm()`: Prompts the user for confirmation.
  - Many more...

**Creating Custom Methods:**

You can also define your own methods to perform specific tasks tailored to your application. This promotes code reusability and organization:

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");
greet("Bob");
```

**Best Practices:**

- Use meaningful method names that accurately reflect their functionality.
- Keep methods concise and focused on a single task.
- Use comments to explain the purpose and logic of methods.
- Consider using object-oriented programming techniques to organize your code into classes and methods.(not part of course scope)

By effectively utilizing methods, you can write cleaner, more efficient, and maintainable JavaScript code.
