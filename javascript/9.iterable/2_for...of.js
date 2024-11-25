// iterable object의 요소를 순회하며 출력함
// 형식 : for(variable of iterable_object) {statement (실행문);}

// 배열의 요소를 교체하는 함수를 정의 : for...of

function replace(array, origin, target) {
  let resultArray = Array.from(array);

  resultArray.forEach((element, index) => {
    if (element === origin) resultArray.splice(index, 1, target);
  });

  /*
  // 2번째 방법
  for (let i = 0; i < resultArray.length; i++) {
    let element = resultArray[i];
    if (element === origin) {
      //resultArray[i] = target;
      resultArray.splice(i, 1, target);
    }
  }
}
  */

  /*
  // 3번째 방법
  for (let element of resultArray) {
    if (element === origin) {
      //splice (인덱스, 1, 교체할 요소)
      resultArray.splice(index, 1, target);
    }
    index++;
  }
    */
  return resultArray;
}

let fruits = ['🍇', '🍊', '🍎', '🍋', '🍏'];
let result = replace(fruits, '🍎', '🍊');
console.log(result);

//let numbers2 = [1, 2, 3, 4, 2, 2, 5, 2];
//let result2 = replace(numbers, 2, 7);
//console.log(result2);
