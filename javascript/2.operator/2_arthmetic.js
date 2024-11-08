//사칙연산 : +, - , /, *, %, **

console.log(3 + 5);
console.log(3 - 5);
console.log(3 * 5);
console.log(3 / 5);
console.log(3 % 5); //모듈러 연산, 나머지 연산자
console.log(3 ** 5); // 3의 5승

// %(모듈러 연산자)
let a = 101;
console.log(a % 2); //a는 짝수? 홀수?

// + (접합 연산자)
// 문자로 시작하면 뒤에 나오는 +는 접합연사자로 실행됨
console.log(10 + 20);
console.log('sum : ' + (10 + 20));
console.log(`sum : ${10 + 20}`); // (주의) 싱글 쿼테이션 아니고 `이걸로 적어야함
