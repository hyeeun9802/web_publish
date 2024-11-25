//import는 제일 위에서 호출
import { sum, sub, mul, div } from './commons.js'; //파일 확장명 .js 무조건 붙이기

//DHTML 형식으로 계산기 프로그램
initForm();

/** 계산기 폼을 생성하는 함수 */
function initForm() {
  let output = `
    <h1>DHTML - Calculator</h1>

<ul>
    <li>
      <input type="text" id="num1" placeholder="1번째 숫자">
      <input type="text" id="num2" placeholder="2번째 숫자">
    </li>

    <li>
      <button type="button" class="button" data-operation="sum">+</button>
      <button type="button" class="button" data-operation="sub">-</button>
      <button type="button" class="button" data-operation="mul">*</button>
      <button type="button" class="button" data-operation="div">/</button>
    </li>
 
    <li>
    <h3 id="result">Result : </h3>
    </li>
</ul>
  `;

  /**화면 출력 */
  document.querySelector('#content').innerHTML = output;

  /**버튼 이벤트 처리 */
  let buttonList = document.querySelectorAll('.button');
  //console.log(buttonList);

  //첫번째 버튼을 하나 가져와서 여기에서 실행처리 함
  buttonList.forEach((button) => {
    //이벤트가 없는 애들은 자동으로 안 생김
    //button.addEventListener('이벤트 종류', 이벤트 실행 콜백함수);
    button.addEventListener('click', () => {
      let num1 = document.querySelector('#num1').value;
      let num2 = document.querySelector('#num2').value;

      let result = 0; // 계속 변할테니까 let으로 선언
      //+버튼을 눌렀다면 operation에 sum 값이 들어감
      let operation = button.dataset.operation;

      switch (operation) {
        case 'sum':
          //result = parseInt(sum1) + parseInt(num2);
          result = sum(num1, num2);
          break;

        case 'sub':
          result = sub(num1, num2);
          break;

        case 'mul':
          result = mul(num1, num2);
          break;

        case 'div':
          result = div(num1, num2);
          break;
      }

      console.log(`result = ${result}`);
      document.querySelector('#result').textContent = `Result = ${result}원`;
    });
  });
} //initForm
