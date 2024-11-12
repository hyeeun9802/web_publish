//구구단 3단 ~ 5단까지 출력

for (let i = 1; i < 10; i++) {
  let sum = '';
  for (let j = 3; j <= 5; j++) {
    sum += `${j} * ${i} = ${j * i}\t`;
  }
  console.log(sum);
}

//사과 이모지를 이용하여 출력
/**
 * 🍏
 * 🍏🍏
 * 🍎🍎🍎
 * 🍏🍏🍏🍏
 * 🍏🍏🍏🍏🍏
 */

for (let i = 1; i <= 5; i++) {
  let sum = ' ';

  for (let j = 1; j <= i; j++) {
    if (i == 3) {
      sum = sum + '🍎'; //템플릿 리터럴 (`)는 문자열을 출력한다. 변수가 그 사이에 있다면 ${}로 묶어주기!
    } else {
      sum += '🍏';
    }
  }
  console.log(sum);
}
