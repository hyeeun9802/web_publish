//중첩 for문 : 이차원 형태의 저장소 데이터 출력

//1(1,1) 2(1,2) 3(1,3)
//4(2,1) 5(2,2) 6(2,3)

/* 행, 열
for() { //행
  for () {  //열
    
  }}
*/

/*
for (let i = 1; i < 3; i++) {
  let rows = '';

  for (let j = 1; j < 4; j++) {
    rows += `${j}\t`;
  }
  console.log(rows);
}
*/

//1 2 3
//4 5 6
let count = 1;
for (let i = 1; i < 3; i++) {
  let rows = ''; // String 타입

  for (let j = 1; j <= 3; j++) {
    rows += `${count++}\t`;
  }

  console.log(rows);
}
console.clear();

//구구단 2단을 출력
/**
 * 2*1 = 2
 * ...
 * 2*9 = 18
 *
 */
console.log('********');
let num = 2;
for (let i = 1; i < 10; i++) {
  let sum = num * i;
  console.log(`${num}*${i} = ${sum}`);
}
