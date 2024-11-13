//객체를 생성하기 위한 틀 ==> class(클래스)

/*

class 클래스명 {
  //constructor(생성자) 함수 

constructor(){
  //filled
  this.필드명 = 값;

  
  }

  //메소드

}
*/

class Animal {
  //생성자 함수
  constructor(emoji, color) {
    //생성자 함수는 constructor 소문자로 작성하기로 약속함
    this.emoji = emoji;
    this.color = color;
  }

  //메소드
  display = () => {
    console.log(this.emoji);
  };
}

const rabbit = new Animal('🐰', 'gray');
rabbit.display();
