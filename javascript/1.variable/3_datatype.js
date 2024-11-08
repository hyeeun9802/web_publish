/**
 * primitive 데이터 타입
 * - 정수형(Integer) : 100, 1 ...
 * - 실수형(Float, Double) : 1.123, 234.2
 * - 문자형(Character) : '',""
 * - 불리형(Boolean) : true, flase
 * ex) let flag = true;
 *
 * Reference 데이터 타입
 * - 객체형 (object) : 배열([]), Json({}) ...
 *
 *
 */

//정수형 변수
let number = 100;
numver = 100.234;
console.log(number);

//실수형 변수
let fnumber = 10.23;
fnumber = 200;
console.log(fnumber);

//불린형 변수
let flag = true; // !(not)
flag = !true;

let flagTest = !flag;

//객체형 변수
let nameList = ['홍길동', '홍길순', '홍길남'];
console.log(nameList);

// primitive, reference 데이터 타입 초기화
let address = undefined; //primitive
let addressList = null; //reference

//데이터 타입 비교 : typeof
let x = 10;
let xx = 10;
let y = '10';
let obj = { name: '홍길동' }; // 주소값을 가지고 있음

console.log(x, typeof x);
console.log(y, typeof y);
console.log(x == y); //보이는 값으로만 비교
console.log(x === y); //데이터 타입 비교 결과
console.log(xx, typeof xx);
console.log(obj, typeof obj);
console.log(y === obj);
