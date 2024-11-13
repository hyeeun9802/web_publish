//객체를 생성해주는 함수 : constructor , 즉 객체 생성자 함수
//객체 생성자 함수 정의와 사용법 익히기

//객체 생성자 함수 첫번째 알파벳은 대문자이어야 함,
function Fruit(name, color, emoji) {
  //field
  this.name = name;
  this.color = color;
  this.emoji = emoji;

  //method
  //this.display =  function () {console.log(this.emoji);
  //}
  this.display = () => console.log(this.emoji);
  //}
}

//생성자 함수는 이렇게 호출함
const apple = new Fruit('apple', 'red', '🍎');

console.log(apple);
console.log(typeof apple);

/*
//apple : property - name, color : method - display()
const apple = {
  name: 'apple',
  color: 'red',
  display: function () {
    console.log('🍎');
  },
};

//orange: property - name, color : method - display()
const orange = {
  name: 'orange',
  color: 'coral',
  display: function () {
    console.log('🍊');
  },
};

//lemon: property - name, color : method - display()
const lemon = {
  name: 'lemon',
  color: 'yellow',
  display: function () {
    console.log('🍋');
  },
}; 

*/
