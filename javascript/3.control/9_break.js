// 1부터 6까지 출력
//i=3인 경우 for문 빠져나오기

for (let i = 1; i < 7; i++) {
  let sum = '';

  if (i === 3) {
    break;
  } else {
    sum += `${i}\t`;
  }
  console.log(sum);
}
