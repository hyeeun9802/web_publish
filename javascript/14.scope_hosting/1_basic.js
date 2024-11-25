/*

  scope(스코프) : 메모리 관리, 이름의 충돌 방지한다.
  let 은 똑같은 이름으로 선언 불가능
  const는 그 이름 그대로 사용, 수정 불가
  block(블록 : {})
  {
    블록단위의 실행 개념 : for, switch~case, if~else ..
  }

  let과 const 차이점
  scope와 block의 차이점 다시 공부!
*/

{
  //우리가 작성할 때 불편해서 그렇지, 원래 가장 바깥에 {} 블럭이 있다

  //전역변수, Global Variable
  //파일전체 어느곳에서든 호출이 가능, 실행도 가능
  //변수는 선언만 해도 괜찮음(전역변수만 해당됨), 초기화는 자동
  let ab;
  let a = 10; //전역변수
  const b = 20;

  console.log(a);
  console.log(b);

  {
    //지역변수, Local Variable
    //선언된 블럭안에서만 호출 가능
    //반드시 초기화를 진행

    let aa = 10; //지역변수
    const bb = 200;
    console.log(aa, bb);
  }
  //console.log(aa);

  //1~5 출력
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  for (let i = 1; i < 6; i++) {}
}
