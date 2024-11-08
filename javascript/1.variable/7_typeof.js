//typeof operand, typeof(operand, operand..)

let name = '홍길동';
let age = 20;
a = 20;
a = 0.1;
a = '가나';
a = true;

console.log(typeof 100); //number
console.log(typeof '자바스크립트'); //string
console.log(typeof name);
console.log(typeof age);
console.log(typeof a);
console.log(typeof a === typeof age);

console.log(typeof (a, age)); // typeof에 괄호가 있다면 마지막 변수의 값으로 출력
console.log(typeof (age, a));
console.log(typeof a === typeof age);
