//Array 빌트인 객체의 메소드 익히기
let array1 = [1, 2, 3, 4, 5];
console.log(array1[0]); //array1.0 <- 사용 불가
console.log(array1['0']); //숫자를 문자열로 바꿔줄 때도 있어서 가능!
console.log(`array1.length = ${array1.length}`);

let fruits = ['🍏', '🍊'];
console.log(fruits);
fruits[fruits.length] = '🍎'; //빨간사과 추가
console.log(fruits);

fruits.push('🍊'); // 자동으로 배열의 마지막에 추가됨
console.log(fruits);

// 1. 배열 요소 추가 : push(item1.. itemN)
let a = ['🍏', '🍊', '🍊']; // 자동으로 마지막에 추가됨
fruits.push(a);
console.log(fruits);

// 2. fruits 배열의 전체 key값 반환 : Object.keys(인스턴스명)
// 배열의 key값은 인덱스 주소
let keyList = Object.keys(fruits); // 배열로 만들어져 리턴을 한다.
console.log(keyList[2]);

// 3. 배열 요소 삭제
// 3-1. 배열객체이 마지막 요소 삭제 - pop()
console.log(fruits);
let deleteItem = fruits.pop(); // 삭제된 마지막 요소만 deleteItem에 저장됨
console.log(`deleteItem = ${deleteItem}`);
console.log(fruits);

// 3-2. 배열객체이 처음 요소 삭제 - shift()
console.log(fruits.shift());
console.log(fruits);

// 3-3 배열 특정요소 삭제 - splice
// array.splice(start[, deleteCount[, item1[, item2]]])
fruits.push('🥝', '🥥', '🍇'); // [ '🍊', '🍎', '🍊', '🥝', '🥥', '🍇' ]
console.log(fruits);

fruits.splice(0, 1, '😺'); //🍊 -> 😺로 교체
console.log(fruits);
fruits.splice(1, 3); // 1 ~ 3 번지 요소를 삭제
console.log(fruits);
fruits.splice(0, 0, '🐰'); // 0번지 요소에 추가
console.log(fruits);

// 원본에 영향을 주는지 아닌지에 따라 깊은 복사 , 얕은 복사라고 칭함

// 3-4. 배열객체의 특정요소 추출 - slice(index1, index2)
// 원본 배열 객체의 특정 요소를 추출하여 새로운 배열로 생성
fruits.push('🥝', '🥥', '🍇');
console.log(fruits);

// 1,2 인덱스의 요소를 추출 (얕은 복사 : shallow copy)
// shallow copy는 원본에 영향을 주지 않음
let sfruits1 = fruits.slice(1, 3);
//[ '🍊', '🍎', '🍊','🥝', '🥥', '🍇']
console.log(sfruits1);

// 3-5. 배열 하비기 : concat (배열)
console.clear();
let numberList1 = [1, 2, 3];
let numberList2 = [4, 5, 6];
console.log(numberList1.concat(numberList2));
console.log(numberList2.concat(numberList1));

// 3-6. 배열의 순서 바꾸기 : reverse()
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.reverse());

// 3-7. 배열의 중첩 해제 : flat()
// [1,2,3,[5,6]] => [1,2,3,5,6]로 결과값을 리턴함
let fnumbers = [1, 2, 3, [5, 6, [7, 8]]];
console.log(fnumbers);
console.log(fnumbers.flat()); // 1 level 중첩 해제
console.log(fnumbers.flat(2)); // 2 level 중첩 해제

// 3-8. join()
let textList = ['a', 'b', 'c'];
console.log(textList);
console.log(textList.join()); // 'a', 'b', 'c'
console.log(textList.join().split(',')); // textList 스트링 문자열 타입일 때 사용 가능 / join과 함께 사용됨
