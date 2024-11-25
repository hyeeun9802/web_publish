//자바스크립트 호출시 HTML의 body를 DOM에 먼저 로딩 후 실행하도록 하는 함수들
//window, onload(), document.ready(), DOMContentLoad()

//윈도우에 event를 주겠다
window.addEventListener('DOMContentLoaded', function () {
  initForm();
});

//counter 함수 생성
function initForm() {
  let output = `
    <h1>DHTML - Counter</h1>

    <div class="counter_container">
      <div id="number">0</div>
      <button type="button" class="button" data-operation="increment">increment</button>
      <button type="button" class="button" data-operation="decrement">decrement</button>
    </div>
  `;

  //counter 폼 출력
  document.querySelector('#content').innerHTML = output;

  //button 이벤트 처리
  let buttons = document.querySelectorAll('.button');
  //console.log(buttons);

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      //버튼 하나하나에 <- 이렇게 적용된 함수를 적용한다
      let flag = button.dataset.operation;
      let number = document.querySelector('#number').textContent;

      if (flag === 'increment') {
        document.querySelector('#number').textContent = ++number;
      } else {
        if (number > 0) {
          document.querySelector('#number').textContent = --number;
        }
      }
    });
  });
}

//counter 증가/감소
//function counter(flag) {
//  let number = document.querySelector('#number').textContent;
//  if (flag === 'increment') {
//    document.querySelector('#number').textContent = ++number;
//  } else {
//    if (number > 0) {
//      document.querySelector('#number').textContent = --number;
//    }
//  }
// }
