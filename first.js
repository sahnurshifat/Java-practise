console.log("Shanur Alam Shifat");
console.log("age= 24")
fullName = "Shanur Alam Shifat";
Age = 24;
Day = 01;
console.log(fullName);
console.log(Age);
console.log(Day);

/** Variables are case sensitive 
    we will use let, const to declare the variable.
    var use korbo  na cz var diye variable redeclare 
    kora jay.
    const diye constant variable declare hoy.

**/
let age = 23;
const gender = "male";
console.log(age);
console.log(gender);

let a;
let b;
a = 30;
b = 20;
console.log(a+b);


/** variable blocks used for let and const .
 * blocks are started with { }
*/

{
    let a = 35;
    console.log(a);
}

{
    let a = 40;
    console.log(a);

}

/** Data types- 
 * primitive(number, string,) * non primitive(objects are np)
 */

/** OBJECTS */

const User = {
    Name : "Shanur Alam Shifat",
    Age : 24,
    Dept : "CSE",
    Course : "Javascript",
}

console.log(User);

User["Age"] = User["Age"] + 1;
console.log(User);

/** we can change the key of the object */

const product = {
    Title : " A pen",
    color : " Black",
    isDeal : true,
    price : 50,
}

console.log(product);   

product["isDeal"] = product["isDeal = false"];
console.log(product);