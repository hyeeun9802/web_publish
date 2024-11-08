//임의의 숫자를 입력받아
//짝수이면 빨간 사과, 홀수이면 초록 사과를 출력해주세요

let num = 100;
let fruit = undefined;

if (num % 2 === 0) {
  fruit = 'red apple';
} else {
  fruit = 'blue appele';
}
//console.log(fruit);

//삼항연산자
//num % 2 === 0 생략하면 (num % 2) 이렇게만 작성해도 된다.
num % 2 === 0 ? (fruit = '🍎') : (fruit = '🍏');
console.log(fruit);

//삼항연산자 2줄로 만들기
let emoji = !(num % 2) ? '🍎' : '🍏';
console.log(emoji);
