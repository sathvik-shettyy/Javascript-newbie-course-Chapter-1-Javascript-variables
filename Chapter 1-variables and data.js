var x = 10; //x is a number
var y = "home";//y is a string
var z = [1, 2, 3];// z is an array

//Variable Naming Rules
//There are a few rules that you need to follow when naming variables in //JavaScript:

//Variable names can only contain letters, digits, underscores, and dollar //signs.
//Variable names cannot start with a digit.
//Variable names are case-sensitive.
//It is also a good practice to use descriptive and meaningful names for your //variables, as this makes your code easier to read and understand.

//Using Variables
//Once you have declared a variable, you can use it to store and retrieve data //in your program. For example:

var x = 10;
console.log(x); //prints 10

var x = "home"
console.log(x); //prints "home"

//You can also perform various operations on variables, such as mathematical calculations, string concatenation, and more. For example:

var x = 10; 
var y = 20;
var z = x + y; //z is 30

var str1 = "Hello";
var str2 = "world";
var str3 = str1 + " " + str2; //str3 is "Hello World"
//PRIMITIVES AND OBJECTS 

//Primitives
//Primitives are the simplest and most basic data types in JavaScript. They include:

//Numbers (e.g. 10, 3.14)
//Strings (e.g. "hello", 'world')
//Booleans (e.g. true, false) 
//Null (a special value that represents an absence of value) Undefined (a special value that represents an uninitialized variable Primitives are immutable, which means that once they are created, they cannot be changed. For example:

let x = 10;
x = 20; // x is now 20

//In this example, the value of "x" is changed from 10 to 20. However, this does not change the value of the primitive itself, but rather creates a new primitive with the value of 20.

//OBJECTS
//Objects are more complex data types in JavaScript and are used to represent real-world objects or abstract concepts. They are composed of key-value pairs, where the keys are strings and the values can be any data type (including primitives and other objects).

//Objects are mutable, which means that they can be changed after they are created. For example:

let obj = { name: "John" , age: 30 };
obj.age = 31; //the age of obj is now 31

//In this example, the "age" property of the "obj" object is changed from 30 to 31. This changes the value of the object itself, rather than creating a new object.

//There are several other data types in JavaScript that are classified as objects, including arrays, functions, and dates. These data types behave similarly to objects in that they are mutable and can be modified after they are created.

//OPERATORS AND EXPRESSIONS
//Operators and Expressions
//Operators in JavaScript are symbols that perform specific operations on one or more operands (values or variables). For example, the addition operator (+) adds two operands together and the assignment operator (=) assigns a value to a variable.

//There are several types of operators in JavaScript, including:

//Arithmetic operators (e.g. +, -, *, /, %)
//Comparison operators (e.g. >, <, >=, <=, ==, !=)
//Logical operators (e.g. &&, ||, !)
//Assignment operators (e.g. =, +=, -=, *=, /=)
//Conditional (ternary) operator (e.g. ?:)
//Expressions are combinations of values, variables, and operators that produce a result. For example:

let x = 10;
let y = 20;
let z =  x + y; //z is 30 
                // this is an Expression

//In this example, the expression "x + y" is evaluated to 30 and assigned to the "z" variable.
//Operator precedence determines the order in which operators are applied when an expression has multiple operators. For example:

let x = 10 + 5 * 3; //x is 25

//In this example, the multiplication operator (*) has a higher precedence than the addition operator (+), so the multiplication is performed before the addition. As a result, the expression is evaluated as 10 + (5 * 3) = 25.

//You can use parentheses to specify the order of operations in an expression. For example:
let x = (10+5) * 3; //x is 45

//In this example, the parentheses indicate that the addition should be performed before the multiplication. As a result, the expression is evaluated as (10 + 5) * 3 = 45.

//Conclusion
//In summary, operators are symbols that perform specific operations on one or more operands, and expressions are combinations of values, variables, and operators that produce a result. Operator precedence determines the order in which operators are applied in an expression, and parentheses can be used to specify the order of operations. Understanding how to use operators and expressions is an important part of programming in JavaScript.
