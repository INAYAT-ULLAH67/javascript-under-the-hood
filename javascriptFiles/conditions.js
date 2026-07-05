let age = Number.parseInt(prompt('enter your age')); 

if (age<18 && age>0){
    console.log('permission denied!')
}
else  if (age>=18) {
    console.log('permitted! ');
    
} 
else {
    console.log('you have entered wrong age!')
    
} 
// condition ? expression if true : expression if false
// use the ternary operator for simple, single-line checks.
let marks = 45;
let result = (marks >= 40) ? 'Pass' : 'Fail';
console.log('The exam result is :', result);


