/* 
  공통 모듈 저장
*/

// 누구나 공동으로 가져다 사용할 수 있도록 "export"를 한다

//똑같은 함수이름을 여러번 만들면 오류 발생함!!!
/* sum() */
export function sum(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

/* sub() */
export function sub(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

/* mul() */
export function mul(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

/* div() */
export function div(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}
