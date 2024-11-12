//반복이 종료되는 시점을 알고 있을 때까지 반복

/**
 *
 * while (조건식){ //조건식의 결과값은 무조건 true, false 둘 중 하나!
 *
 *  실행문;
 *
 * }
 *
 * for문 : 1~5까지 출력 */
// 3이면 종료
for (let i = 1; i < 6; i++) {
  if (i === 3) {
    break;
  }
  console.log(`i = ${i}`);
}

//while문 : 1~5까지 출력
//i=3인 경우 종료

// ex. 키오스크에서 메뉴 선택할 때 나가기 클릭하는 경우 => 반복문 사용한거임!
console.log('*');
let count = 1;

while (count <= 5) {
  if (count === 3) {
    break;
  }
  console.log(`count = ${count}`);
  count++;
}

//메뉴 선택
let flag = true;
let menu = 1;

while (flag) {
  console.log(`1 : 🍕\t 2: 🌭\t 0:종료`);
  if (menu === 1) {
    console.log(`선택한 메뉴는 🍕 입니다. `);
    flag = false;
    //while loop 자연스럽게 종료!
  } else if (menu === 2) {
    console.log(`선택한 메뉴는 🌭 입니다. `);
    flag = false;
    //while loop 자연스럽게 종료!
  } else if (menu === 3) {
    console.log(`선택을 종료합니다.`);
    flag = false;
    //while loop 자연스럽게 종료!
  }
}
