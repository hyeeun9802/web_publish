//함수의 값 전달 인자 :: parameter, argument, 매개변수
function add(a, b) {
  return a + b;
}

function add2(...numbers) {
  //Spread operator(전개 구문)
  //numbers라는 배열로 만들어 입력되는 것을 다 넣는다!
  return numbers;
}

function add3(a, b, ...datas) {
  console.log(a);
  console.log(b);
  console.log(datas);
}

//함수 호출
let sum = add(200, 34);
let sum2 = add2(400, 2, 1, 3, 100); //배열로 출력됨
console.log(`sum = ${sum}`);
console.log(`sum2 = ${sum2}`);
add3(1, 2, 3, 4, 5, 6, 7);
