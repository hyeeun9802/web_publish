// 논리연산자 : &&(AND), ||(OR)

/* 

  (논리식1) && (논리식2) = 결과값 => 두개 모두 true이면 결과값은 true
    true          true  = true
    true          false = false
    false         true  = false
    false         false = false

  (논리식1) || (논리식2) = 결과값 => 하나라도 true이면 결과값은 true
    true          true  = true
    true          false = true
    false         true = true
    false         false = false

*/

let a = 1;
let b = 2;
console.log(a < b && b > a);
console.log(a < b && b < a);
console.log(a === b && b > a);
console.log(a === b && b < a);

console.log(a < b || b > a);
console.log(a < b || b < a);
console.log(a === b || b > a);
console.log(a === b || b < a);

//임의의 숫자를 입력받아, 1~9까지의 범위에 포함되면 숫자를 출력
let number = 11;
if (number < 10 && number > 0) {
  // && 연산인 경우 false 값이 앞에 오도록 함. 더욱 효율적!
  // true           false  =========> false
  // false          true   =========> false (처음부터 false네? 그럼 뒤에 안봐~)
  console.log(`number는 사용 가능한 숫자 [${number}] 입니다.`);
} else {
  console.log(`number를 다시 입력해주세요`);
}
//임의의 숫자를 입력받아, 0보다 크면 숫자를 출력
let number2 = 11;
if (number2 > 0 || number2 < 10) {
  // || 연산인 경우 true 값이 앞에 오도록 함.
  // false           false =========> true :: shortcut 연산!!
  // false           false =========> true

  console.log(`number는 사용 가능한 숫자 [${number2}] 입니다.`);
} else {
  console.log(`number를 다시 입력해주세요`);
}
