// 구조 분해 할당(destructure)
let numbers = [1, 2, 3, 4, 5];
let aa = numbers; //aa <- numbers의 주소가 입력됨

//1. 배열이 와야한다
//a와 b 모두 변수이다
let [a, b, ...nlist] = numbers;

/*
  let a = numbers[0];
*/

console.log(aa);
console.log(a);
console.log(b);
console.log(nlist);

let lee = {
  name: '이혜은',
  age: 27,
  address: '서울시 강남구',
};

//위에 있는 속성 name, age, address 이름을 그대로 사용해야 함, 아니면 오류 발생
let { name, age, address } = lee;
/*
  구조분해 할당으로 정의되는 변수는
  객체의 속성과 동일한 이름으로 정의되어야함!
  let name = lee.name;
  let age = lee.age;
  let addree = lee.address;
*/

//lee 이라는 사람의 정보를 각각의 변수로 정의
console.log(name);
console.log(age);
console.log(address);

//💡 정말 중요하니까 개념 정리해두기
function test({ ...params }) {
  // {a:1 b:1 c:1}
  let { a, b, c } = params;
}

//함수의 반환값을 받아 구조 분해 할당(destructure) 방식으로 정의
function createEmoji() {
  return {
    fname: 'apple',
    color: 'red',
    emoji: '🍎',
  };
}

//순서는 상관 없음
//위에서 할당되지 않은 값 price는 초기화해줘야 함
let { fname, color, emoji, price = 100 } = createEmoji();
console.log(fname, color, emoji, price);

let flist = ['🍎', '🍇', '🍊'];
let [apple, grape, orange] = flist;
console.log(apple, grape, orange);
