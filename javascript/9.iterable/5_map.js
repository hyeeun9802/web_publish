// key, value를 한쌍으로 가지는 클래스
// set(key, value) : 데이터를 추가
// get(key) : 데이터 출력
// has(key) : 데이터 존재 여부 확인 true, false
// delete : 데이터 삭제
// Map은 iterable object이므로 for...of, spread, destructure 가능함

let fruitMap = new Map();

//추가
fruitMap.set('apple', '🍎');
fruitMap.set('apple', '🍎'); //똑같이 작성해도 apple은 하나만 저장됨!
fruitMap.set('orange', '🍊');

console.log(fruitMap.get('apple'));
console.log(fruitMap.get('orange'));

//has는 업데이트하거나 삭제할 때 확인하려고 사용!
console.log(fruitMap.has('orange'));
console.log(fruitMap.has('lemon'));

if (fruitMap.has('orange')) fruitMap.delete('orange');
console.log(fruitMap);
