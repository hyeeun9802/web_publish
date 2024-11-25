//1. text 배열을 입력받아,
//길이가 3자 이상인 text들을 새로운 배열 객체로 생성하여 반환해주세요

const textFilter = (object) => {
  //아래 두 방법은 같음
  //let result = object.filter((text) => text.length >= 3); //[] 배열로 리턴함
  //return result;

  return object.filter((text) => text.length >= 3);
};
const textFilter2 = (object) => {
  return object.filter((text) => text.length >= 3);
};

//⌈ function textFilter2() {} , const textFilter = (object) => {} ⌋
//✓ 위 방법 2가지 다 알고 있어야함!
let textArray = ['nodeJS', 'javascript', 're', 'ja'];
let result = textFilter(textArray);
console.log(result);

//2. 숫자 배열을 입력받아, 짝수만 필터링하여 출력하는 함수를 생성해주세요
//출력되는 값들은 배열 객체에 담아 반환해주세요
const evenNumber = (array) => {
  return array.filter((number) => !(number % 2));
  //(number % 2)는 0! false 값은 자동적으로 버리지만 0을 false로 인식,
  //프로그래밍 언어는 1 : 참 / 0: 거짓 으로 처리되어서 홀수값이 출력됨
  //따라서 !로 NOT으로 바꿈
};

const oddNumber = (array) => {
  return array.filter((number) => number % 2);
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`짝수는 => ${evenNumber(numbers)}`);
console.log(`홀수는 => ${oddNumber(numbers)}`);

//3. 사원의 아이디를 받아서, 7자리 번호를 랜덤하게 생성하여 아이디와 번호를
//조합하여 사번을 생성해 주세여
//사원의 아이디는 배열객체로 입력받고, 출력도 배열형태로 출력해주세요

const createEmployeeNumber = (array) => {
  //중복된 데이터 처리
  let array2 = new Set(array);
  console.log(Array.from(array2));

  return array.map((id) => {
    let number = Math.trunc(Math.random() * 10000000); //trunc함수든 floor함수든 상관없음
    return id.concat('_', number); //ex) lee_12345
  }); //ex) ['lee_12345', ...]

  // 한줄로 처리할 경우 더 간략하게 작성, return을 사용 안하고 싶다면 아래 방법 이용하기
  /*
  return array.map(
    (id) => id.concat('_', Math.trunc(Math.random() * 10000000)) 
  ); 
  */
};

const employeeIds = ['lee', 'kimaa', 'abcd', 'test1234', 'lee', 'test1234'];
const employeeNumber = createEmployeeNumber(employeeIds);
console.log(employeeNumber);
