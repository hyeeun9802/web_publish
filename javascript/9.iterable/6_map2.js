// Map 클래스 생성
const fList = new Map([
  [1, 'one'],
  [2, 'two'],
]);
console.log(fList);
console.log(fList.get(1));

//사이즈 확인
console.log(`size ==> ${fList.size}`);

//데이터 추가
fList.set(3, 'three');
//fList.set([4, 'four']); 뒤에 값이 더 없을 때
//fList.set([4, 'four'], [5, 'five']); //set은 key값과 value로 받아야함!
console.log(`size2 ==> ${fList.size}`);
console.log(fList);

//데이터 확인
console.log(fList.has(3)); //true
//console.log(fList.has(5)); //false
if (fList.has(3)) console.log(fList.get(3));

//모든 키값 출력
console.log(fList.keys());

//모든 value 출력
console.log(fList.values());

//key, value를 입력된 순서대로 배열 형태로 반환
let iteratorObj = fList.entries();
console.log(iteratorObj);

console.log(iteratorObj.next().value);
//{ value: [ 1, 'one' ], done: false }

//순회 : forEach
fList.forEach((element) => console.log(element));
fList.forEach((value, key, map) => console.log(value, key, map));

//Map(3) { 1 => 'one', 2 => 'two', 3 => 'three'}

//순회 : for...of
for (element of fList) {
  console.log(element);
}
console.log(fList.keys());

//순회 : for...of
//[key, value]
for (let element of fList) console.log(element);

//key 출력
for (let key of fList.keys()) console.log(`key => ${key}`);

//value 출력
for (let value of fList.values()) console.log(`value => ${value}`);

//entries : 1, one 함께 출력
for (let entry of fList.entries()) console.log(`entry => ${entry}`);

//데이터 삭제
if (fList.has(1)) fList.delete(1);
console.log(fList);

//전체 삭제
fList.clear();
console.log(fList);
