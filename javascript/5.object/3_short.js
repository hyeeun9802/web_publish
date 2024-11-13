//변수를 객체의 value로 사용하는 경우, property 생략 가능

let name = 'lee';
let age = 20;
const person = {
  //property와 객체의 이름이 같으면 생략 가능하다
  name,
  age,
};
console.log(person);

let x = 0;
let y = 0;
const obj = { x, y };

let fname = 'apple';
let emoji = '🍎';
let color = 'Red';
const fruits = { fname, emoji, color };
console.log(obj);
console.log(fruits);

//사원들의 정보를 입력받아서, 객체로 반환하는 함수를 정의
//사원정보 - 사번(empho), 이름(ename), 나이(age)
function createObj(empho, ename, age) {
  return { empho, ename, age };
}

console.log(createObj('1234', '홍길동', 20));
console.log(createObj('1234', '김철수', 20));

let emp1 = createObj('1234', '홍길동', 20); // {empho:"q234" ename="홍길동, age=20
let emp2 = createObj('1234', '김철수', 20); // {ememphophon:"7890" ename="김철수, age=20  }
