/**
 *
 * 함수 정의 ::
 * function 함수명(파라미터 (=매개변수)) {
 *
 *    실행 로직;
 * }
 *
 * 함수 호출 ::  함수명 (파라미터 형식일치);
 *
 * 내장(Built-in) 함수 : 자주 사용하는 기능을 함수로 구현하여 엔진에서 제공함
 *  -parseInt(문자열); 문자열을 숫자로 변환하는 함수
 *  ...
 *
 * 참고! 리액트는 모두 함수 기반으로 만들어져 있다!
 */

//빌트인 함수 parseInt() 호출
let a = '100';
console.log(a, typeof a);
console.log(parseInt(a), typeof parseInt(a));
console.log(a + 100); // 접합연산자 (+)
console.log(parseInt(a) + 100);

//두개의 숫자를 입력받아, 합계를 출력하는 로직 작성
let num1 = 10;
let num2 = 20;
console.log(`sum ==> (${num1 + num2})`);

//두개의 숫자를 입력받아, 합계를 출력하는 로직 생성
//함수 정의
function add(a, b) {
  //var a = 호출시 입력되는 값,
  //let n1 = parseInt(a);
  //let n2 = parseInt(b);
  //console.log(`sum ==> (${n1 + n2})`);
  console.log(`sum ==> (${parseInt(a) + parseInt(b)})`);
}

//두 숫자의 차를 구하되, 결과는 음수가 출력되지 않도록 함
//a가 b보다 큰 경우 결과값 출력
function min(a, b) {
  a = parseInt(a); //a와 b는 const 형식은 아니구나! 데이터 타입이 바뀔 수 있으니.
  b = parseInt(b);

  if (a > b) {
    console.log(a - b);
  } else {
    console.log(`a값은 b보다 커야 합니다.`);
  }
}

//함수호출 위치에 결과값 출력
add('10232', '2232320');
min('100', '20');
