//static 메소드 : 객체를 생성하지 않고, 클래스명.메소드 형식으로 호출이 가능함!

class Fruit {
  static MAX_SIZE = 100;

  constructor(name, color, emoji) {
    this.name = name;
    this.color = color;
    this.emoji = emoji;
  }

  static getMaxSize = () => this.MAX_SIZE;

  static makeFruit = () => {
    //static은 메소드에만 붙음
    //static이라는 메모리 공간에 별도로 저장된다

    //console.log('makeFruit 호출완료!!');

    return new Fruit('orange', 'coral', '🍊');
  };

  //class 내에서는 this.display라고 안해도 됨
  display = () => {
    console.log(`${this.name}, ${this.color}, ${this.emoji}`);
  };
}

let apple = new Fruit('apple', 'red', '🍎');
apple.display();
let orange = Fruit.makeFruit();
console.log(orange);
orange.display();

//apple.makeFruit(); => 실행 안됨

console.log(Fruit.getMaxSize());
