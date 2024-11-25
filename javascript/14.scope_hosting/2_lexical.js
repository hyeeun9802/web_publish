//lexical(렉시컬) - 실행 컨텍스트 안에 포함된 개념으로 스코프별로 메모리를 효율성
//있게 관리하는 영역, 변수 선언, 실행코드, 외부호출 코드
//콜스택(call stack) - 호출되는 코드(함수)를 순차적으로 실행

{
  let a = 10;
  console.log(`a --> ${a}`);

  {
    let b = 20;
    console.log(`b --> ${b}`);
    {
      let c = 30;
      console.log(`c --> ${c}`);
      console.log(`a --> ${a}`);
      console.log(`b --> ${b}`);
    } //level 3
  } //level 2
} //level 1
