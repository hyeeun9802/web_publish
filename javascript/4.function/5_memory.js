// function은 데이터 타입? object (주소값을 가지고 있음)

function add(a, b) {
  console.log(a + b);
}

console.log(add);
let sum = add;

add(1, 2);
sum(1, 2);
