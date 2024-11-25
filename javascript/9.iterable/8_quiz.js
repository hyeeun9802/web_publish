// 중복된 배열을 입력받아, 중복을 제거한 후 출력
// 함수 set

function filter(iterable) {
  return new Set(iterable);
}

let numbers = [1, 2, 3, 4, 1, 2, 1, 2, 3, 3, 5, 6, 7, 8, 9];
let names = ['홍길동', '김영희', '최철수', '홍길동'];
let resultObj = filter(numbers);
let resultObj2 = filter(names);
console.log(`numbers => ${numbers}`);
console.log(`resultObj => ${resultObj}`);
console.log(`resultObj2 => ${resultObj2}`);

//사원의 이름을 입력받아, 사번을 생성하고 각각의 변수로 반환하는 함수 작성

function createEmployeeNumber(array) {
  //배열 전체의 요소를 대상으로 하는 작업이며, 결과가 새로운 배열로 반환
  return array.map((ename) => {
    return ename.concat('_', Math.trunc(Math.random() * 10000000));
    //Math.trunc : 소숫점 이하를 단순히 잘라내버린다.
    //블럭({})으로 묶은 상태에서 실행한 경우 반드시 return
  }); //[]
}

let employeeNames = ['smith', 'kelly'];
let [smith, kelly] = createEmployeeNumber(employeeNames); //['smith_123456', 'kelly_976543']

console.log(`smith => ${smith}`);
console.log(`kelly => ${kelly}`);

/*
let nSet = new Set(numbers);

console.log(numbers.length, numbers);
console.log(nSet.size, nSet);
*/
