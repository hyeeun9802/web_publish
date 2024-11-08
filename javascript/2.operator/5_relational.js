//비교 연산자 : >, <, >=,<=,!
//실행 결과 타입 : boolean
//제어문 if, while문 사용!!!!

/**
 * if(조건식 : 3 > 2 ) {
 *  //true
 *
 * } else {
 *  //false
 * }
 *
 */

console.log(3 > 2);
console.log(3 < 2);
console.log(3 >= 2);
console.log(3 <= 2);
console.log(3 == 2);
console.log(3 == '2');
console.log(3 === '2'); // numver === string

let obj1 = {
  name: '이혜은',
};

let obj2 = {
  name: '이혜은',
};

let obj3 = obj1;

console.log(obj1);
console.log(obj2);

//문자로 출력, 객체데이터의 타입이 출력됨
console.log(`obj1 : ${obj1}`);
console.log(`obj2 : ${obj2}`);

//obj1의 "주소값"과 obj2의 "주소값"을 비교한 것!!
console.log(obj1 === obj2); //false

console.log(obj1 == obj2);
console.log(typeof obj1 === typeof obj2);

console.log(obj1 === obj3);
console.log(obj1 == obj3);
console.log(typeof obj1 === typeof obj3);

console.log(obj1.name == obj2.name);
