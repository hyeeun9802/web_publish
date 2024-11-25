// 에러 처리 : try ~ catch

let numbers = [1, 2, 3]; //length : 3, index : 0,1,2
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]); //undefined

numbers[0] = 100;
console.log(numbers[0]);

//자바스크립트에서는 동적으로 배열을 제생성한 후 값을 입력한다.
//즉, 배열 크기를 3개로 줬는데 8번째에 900값을 넣으면 출력이 된다.
//즉, 자바에서는 동적으로 배열을 재생성하지 않음 ->
//ArrayIndexOutOfBoundsException 오류 발생함
numbers[9] = 900;
console.log(numbers[9]);

let number = 1234; //iteral 스트링, ... 외워야함 뭐뭐 있는지
try {
  //에러가 나는 코드를 try가 잡아줌
  for (m of number) console.log(m);
} catch (error) {
  console.log('에러는 엔진한테 넘김!!');
}

console.log('프로그램 종료 --- ');
