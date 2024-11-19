//filter
//filter도 새로운 배열을 만들어줌!

//💡중요
//filter / map 정말 중요!!

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
console.log(
  words.filter((item) => {
    return item.length > 6;
  })
);
//💡중요) 콜백함수에 {}을 추가하면 반드시 return 키워드를 붙여서 값을 반환
//console.log(words.filter(item) => { return item.length > 6 }));

let numbers = [1, 2, 3, 4, 5, 6, 7];
//5이상 숫자 출력
numbers.forEach((x) => {
  let array = [];
  if (x >= 5) {
    array.push(x);
  }
});
console.log(array);

/*
let array2 = numbers.filter((x) => {
  return x >= 5;
});
console.log(array2);
*/ //필요없는 {}를 삭제하면 아래와 같다!

let array2 = numbers.filter((x) => x >= 5);
console.log(array2);

let numbers2 = [1.4, 2.5, 3.2, 4.7, 5, 6, 7];
//3보다 크거나 같은 값을 출력
console.log(numbers2.filter((x) => x >= 3));

//numbers2의 모든 값을 반올림한 후 3보다 크거나 같은 값을 출력해주세요
console.log(
  number2
    .map((x) => Math.round(x))
    .filter((x) => {
      x >= 3;
    })
);

//아이템 배열의 전체 길이수를 반환하는 함수
function searchItem(array, sItem) {
  array.filter((item) => item === sItem).length;
}

function searchItem2(array, sItem) {
  let count = 0;
  array.forEach((item) => {
    //forEach는 순회하면서 일치하는 값만
    if (item === sItem) count++;
  });
  return count;
}

let fList = ['🍇', '🍎', '🍊', '🍇']; //4
let nList = [1, 2, 3, 4, 6, 5]; //6

console.log(searchItem(fList, '🍇'));
console.log(searchItem(nList, 4));

/*
안녕하세요. 컴포트 담당자님
저는 러너웨이 페이서로 활동하고 있는 이혜은입니다. 
저번에 컴포트 양말 덕분에 안전하게 잘 달렸습니다. 
현재까지 컴포트 2종류의 양말을 신어보면서 정말 만족했는데요, 
*/
