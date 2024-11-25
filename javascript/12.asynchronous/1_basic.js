//비동기는 시간이 소요될 때
//동기는 순차적으로 바로바로 실행될 때

function a() {
  c(); //return address (복귀 주소)
  console.log(`----> a function !!`);
}

function b() {
  //setTimeout함수는 비동기식 함수이다, 그래서 시간(delay)이 주어지지 않아도 맨마지막에 실행
  setTimeout(() => {
    console.log(`1초 후 setTimeOut 함수 실행!!`);
  }, 1000); //전역함수라서 호출하는 애 없이 바로 사용 가능, (비동기)
  console.log(`----> b function !!`);
}

function c() {
  b();
  console.log(`----> c function !!`);
}

a();
//b();
//c();
