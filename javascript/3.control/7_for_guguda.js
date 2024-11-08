//구구단 2단을 출력
/**
 * 2*1 = 2
 * ...
 * 2*9 = 18
 *
 */

/**let num = 2;
for (let i = 1; i < 10; i++) {
  let sum = num * i;
  console.log(`${num}*${i} = ${sum}`);
}
 **/

//2단~9단 출력

/*for (let i = 2; i < 10; i++) {
  let rows = '';

  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
*/

console.clear();
//console.log로 출력하면 한줄 한줄 나오기 때문에 옆으로 출력하고 싶다면 콘솔 사용하면 안됨!
for (let i = 1; i < 10; i++) {
  let rows = '';
  for (let j = 2; j < 10; j++) {
    rows += `${i} * ${j} = ${i * j}  `;
  }
  console.log(rows);
}

//별찍기
for (let i = 1; i < 6; i++) {
  let star = '';
  for (let j = 1; j <= i; j++) {
    star += '🔸';
  }
  console.log(star);
}

//별 거꾸로 찍기
for (let i = 1; i < 5; i++) {
  let star = '';

  for (let j = 5; j >= i; j--) {
    star += '🔸';
  }
  console.log(star);
}
