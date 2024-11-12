//함수에서의 return은 정말 중요!
//함수의 실행결과 반환 키워드 :: return

/*

전역변수 (Global Variable)
let a = undefined; 값을 모른다면undefined 또는 null로 설정
let obj = null;
const START_COUNT = 0;

function aa{
 기능을 구현하는 작업 진행
 변수 선언시 "반드시 초기화" // 미리 기본값 0을 넣어주는 작업을 의미함
 지역변수, 로컬(Local Variable) // {}로 묶여있는 변수들

 let result = 0;
}

*/

function add(a, b) {
  //console.log(parseInt(a) + parseInt(b));
  return parseInt(a) + parseInt(b); //결과값을 반환하려면 반드시 return 이 있어야 한다.
}

let result = add(5, 6);
console.log(`result = ${result}`);

// ---------------------------------------------------

//이름, 나이를 매개변수로 입력하여, 객체를 생성한 후
//반환하는 함수를 정의
function createObject(name, age) {
  //객체 생성
  let obj = {
    name: name, //obj.name
    age: age,
  };

  return obj; //obj의 주소값 반환
}

let resultObj = createObject('lee', 27);
console.log(resultObj);
console.log(resultObj.name); //resultObj의 이름만 출력
console.log(resultObj.age); //resultObj의 나이만 출력

// ---------------------------------------------------

//두 수를 입력받아 곱한 값을 반환하는 함수를 작성해주세요
//두 수는 0보다 커야함
function multi(a, b) {
  let result = undefined;
  if (a > 0 && b > 0) {
    result = a * b;
  } else {
    result = 'a와 b는 0보다 모두 커야합니다.';
  }
  return result;
}

let num = multi(0, 5);
console.log(num);
