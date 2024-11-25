//iterable(이터러블) object - Iteration Protocol : 순회를 위한 규칙, 조약
//for...of, ...(Spread : 전개구문), 구조분해할당(destructing object)
//String, Array, Map, Set ...

//"Hello~ JavaScript~!!!!"
const text = new String('Hello~ JavaScript~!!!!');

//text : 출력하고자 하는 객체
for (element of text) {
  console.log(`element = ${element}`);
}

//[1,2,3,4,5]
const numbers = [1, 2, 3, 4, 5];
for (let n of numbers) {
  console.log(n);
}

//Numbers 클래스 생성 및 실행
const numberClass = new Number(1, 2, 3, 4, 5);
for (let a of numberClass) console.log(a);
//TypeError: numberClass is not iterable => 에러 발생
