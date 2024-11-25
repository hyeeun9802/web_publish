//비동기식 처리 방식에서 callback 함수 호출
//runInDelay(callback 함수, seconds 시간)

function runInDelay(callback, seconds) {
  setTimeout(callback, seconds);
}

//1초후에 실행
//runInDelay(함수, 1000);

// 같은 의미
// 1) runInDelay (function() {}, 1000);
// 2) runInDelay(() => {})

//괄호 포함 {}, () 잘 구분해서 작성하기, 안 그러면 다 문자열로 받아들여서
// 결과값 이상하게 나옴
runInDelay(function () {
  console.log(`타이밍 3초 경과!!`);
}, 3000);
runInDelay(() => {
  console.log(`타이머 1초 경과!!`);
}, 1000);

console.log(`--프로그램 종료 --`);
