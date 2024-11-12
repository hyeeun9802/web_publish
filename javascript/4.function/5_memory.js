// function은 데이터 타입? object (주소값을 가지고 있음)

function add(a, b) {
  console.log(a + b);
}

let sum = add; // call by reference
console.log(add);
console.log(sum);

add(1, 3);
sum(1, 2);
console.log('--- 프로그램 종료 ---');
