// ...(Spread Operator, 전개구문)
// 모든 Iterable object에서 사용 가능
// function 함수명(... param)
// [...iterable]
// {...iterable}

//2개의 숫자 더하기
function add(a, b) {
  return a + b;
}
let sum = add(1, 2);
console.log(`sum = ${sum}`);

//3개의 숫자 더하기
function add2(a, b, c) {
  return a + b + c;
}
let sum2 = add2(1, 2, 3);
console.log(`sum2 = ${sum2}`);

//numbers <- 배열이다
function add3(...numbers) {
  let sum = 0;
  for (let a of numbers) {
    sum += parseInt(a); //문자나 문자열이 있으면 안되어서 parseInt로 정수형 바꿔 실행하기!
  }
  return sum;
}
let sum3 = add3(1, 2, 3, 4, 5, 6, 10);
console.log(`sum3 = ${sum3}`);

//2. [ ...iterable]
let fruit1 = ['🍏', '🍋'];
let fruit2 = ['🍎', '🍋', '🍎'];

// fruit3 => fruit1와 fruit2 concat(붙이기)
// fruit3과 fruit4는 같은 결과
let fruit3 = fruit1.concat(fruit2);
let fruit4 = [...fruit1, ...fruit2];

// fruit5는 fruit1과 fruit2 사이에 '😋'추가
let fruit5 = fruit1.concat('😋', fruit2);

console.log(`fruit3 = ${fruit3}`);
console.log(`fruit3 = ${fruit4}`);
console.log(`fruit5 = ${fruit5}`);

//3. {...iterable}
const lee = {
  name: '이혜은',
  age: 27,
  address: '서울시 강남구',
};

const leeUpdate = {
  ...lee,
  job: '개발자',
};

console.log(leeUpdate);
