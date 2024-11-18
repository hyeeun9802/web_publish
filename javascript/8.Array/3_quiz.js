// 1. 배열의 사과 요소를 딸기로 교체해주세요.

let fruit = ['🥝', '🍎', '🍊', '🍏', '🍇', '🍋'];
console.log(fruit);

//1.1 for문의 index 주소 활용
for (let i = 0; i < fruit.length; i++) {
  // 요소값을 먼저 찾아야하기 때문에 if문 꼭 사용하기!!
  if (fruit[i] === '🍎') {
    fruit[i] = '🍋';
  }
  console.log(fruit[i]);
}

console.log('----');

//1.2 함수 : 파라미터 (old, new)
//교체한 값을 콘솔창에 출력
function replace(array, oldValue, newValue) {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '🍏') {
      array[i] = newValue;
    }
    result += `${array[i]}\t`;
  }
  console.log(result);
}
replace(fruit, '🍏', '🍋');

let numbers = [1, 2, 3, 1, 2, 1, 5];
replace(numbers, 1, 9);

//1.3 함수 : 파라미터 (배열객체, old, new)
//배열타입으로 객체를 반환

function replace2(array, oldValue, newValue) {
  let resultArray = Array.from(array);

  for (let i = 0; i < resultArray.length; i++) {
    if (resultArray[i] === oldValue) resultArray[i] = newValue;
    //result += `${array[i]}\t;
  }
  //console.log(result);
  return resultArray;
}

let names = ['lee', 'kim', 'park', 'lee'];
let resultObject = replace2(names, 'lee', 'hahahaha');
console.log(resultObject);
