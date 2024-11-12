//구구단을 출력하는 함수 생성
//gugudan(start, end);

/*
기본 함수 형식 : 1 ~ 9단 출력
*/
/*
function gugudan(start, end) {
  for (let i = 1; i < 10; i++) {
    let sum = '';
    for (let j = start; j <= end; j++) {
      sum += `${j} * ${i} = ${i * j}\t`;
    }
    console.log(sum);
  }
}
  */
//gugudan(3, 7);

/*
function selectGugudan(start, end) {
  for (let i = 1; i < 10; i++) {
    let sum = '';
    for (let j = start; j <= end; j++) {
      sum += `${j} * ${i} = ${i * j}\t`;
    }
    console.log(sum);
  }
}
*/

/*
구구단 싱글 함수 형식 : single단 출력, 한 단만 출력!
입력되는 start는 0보다 커야한다.
10단 이상은 출력되지 안도록 한다.
*/

/*
function singleGugudan(dan) {
  for (let i = 1; i < 10; i++) {
    console.log(`${dan} * ${i} = ${dan * i}\t`);
  }
}
  */

import {
  singleGugudan,
  selectGugudan,
  gugudan,
  fruitsTower,
} from './fmodule.js';

singleGugudan(3); //3단 출력
selectGugudan(7, 9); // 7~9단 출력
gugudan(); //전체 1~9단 출력

//-----------------------------------------

fruitsTower('🍎', 5);
fruitsTower('🍋', 10);

/*
🍎
🍎🍎
🍎🍎🍎
🍎🍎🍎🍎
🍎🍎🍎🍎🍎
*/

/*
function fruitsTower(emoji, floor) {
  for (let i = 1; i <= floor; i++) {
    let sum = '';
    for (let j = 1; j <= i; j++) {
      sum += emoji;
    }
    console.log(sum);
  }
}

fruitsTower('🍎', 5);
fruitsTower('🍋', 10);
*/
