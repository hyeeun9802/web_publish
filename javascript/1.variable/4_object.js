//object 객체 : Array(배열 :[]), JSON ({})..
let apple = null;
apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

//orange JSON 객체 생성 후 출력
orange = {
  name: 'orange',
  color: 'orange',
  display: '🍊',
};

console.log(orange.name);
console.log(orange.color);
console.log(orange.display);

//1부터 5까지 출력
let numberList = [1, 2, 3, 4, 5]; //번지 위치는 0부터 시작!!
console.log(numberList[2]);
console.log(numberList[5]); //undefined => 5번지 상자가 지금 없어서 정의된게 없다고 출력됨
