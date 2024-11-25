//Iterable Object - 순회가 가능한 객체들을 말함, String, Array, Map, Set ...
//for...of, ... : Spread Operator(전개 구문), Destructring Object(구조 분해 할당)

//Map : (key, value) 인덱스는 따로 없음
// - Set, get, has, keys, values, entries...
//Set : (value) - add(데이터를 넣을 때), get(데이터를 가져올때(꺼내올때)),has, delete, keys, values, clear...

//1. Spread Operator
function display(...params) {
  //...params 는 갯수를 모른다, 배열로 만들어졌다. 파라미터에 있는 갯수만큼 순회함
  // 파라미터는 배열로 만들어지기 때문에 for문으로 만들어 순회시키기
  for (number of params) console.log(number);
}
display(1, 2);
display(1, 2, 3, 4);

const lee = {
  name: '이혜은',
  age: 27,
};
//lee의 업데이트를 만들어주세요
const leeUpdate = {
  ...lee,
  address: '강남',
};
console.log(leeUpdate);

//2. Destructuring Object (구조 분해 할당)
const getObject = () => {
  return { name: '공유', age: 30 };
};
const { name, age } = getObject();
console.log(name, age);

const getObject2 = () => {
  return [1, 2, 3];
};
const [n1, n2, n3] = getObject2();
console.log(n1, n2, n3);

//3. 인스턴스객체.forEach(콜백함수);
const numbers = [1, 2, 3]; // 배열객체를 가르키고 있음
numbers.forEach((element, i) => {
  //인덱스 위치를 알고 싶을 때 i 사용
  console.log(element, i);
});

const myMap = new Map();
myMap.set('name', '홍길동');
myMap.set('age', 20);
myMap.forEach((value, key) => {
  value, key;
});

const mySet = new Set();
mySet.add('홍길동');
mySet.add('홍길동');
mySet.add('서현진');

console.log(mySet);
mySet.forEach((value, key) => {
  console.log(key, value);
});
