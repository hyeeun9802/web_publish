//임의의 과일을 선택받아..
//좋아하는 과일 : apple, orange, lemon
//이외 과일 선택시 '좋아하는 과일 없음'

let fruit = 'orange';
let choose = undefined;
if (fruit === 'apple') {
  choose = '🍎';
} else if (fruit === 'orange') {
  choose = '🍊';
} else if (fruit === 'lemon') {
  choose = '🍋';
} else {
  choose = `${fruit} 없어요!`;
}
console.log(`결과는 : ${choose}`);
