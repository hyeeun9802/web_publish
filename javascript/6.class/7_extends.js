// 클래스 간의 상속관계
// 동물원에서 동물관리 프로그램을 생성
// 흰색사자, 회색사자, 흰색 호랑이, 회색 호랑이, 푸들, 말티즈
// 객체 모델링 ==> Lion, Tiger, Dog 클래스
// Lion 클래스
// 속성 : name, color, emoji, taste
// 메소드 : display(이모지), sleep, eat

// Lion, Tiger, Dog 클래스를 모델링하여 부모 클래스 생성 ==> Animal
// Animal 클래스 속성 : name, color, emoji, taste
// Animal 클래스 메소드 : display, sleep, eat

//자식 당 부모는 하나!

class Animal {
  constructor(name, color, emoji, taste) {
    this.name = name;
    this.color = color;
    this.emoji = emoji;
    this.taste = taste;
  }
  display = () => console.log(`${this.name} : ${this.emoji}`);
  sleep = () => console.log(`${this.name}가 잔다`);
  eat = () => console.log(`${this.name}가(이) 먹는다`);
}

//Lion클래스는 Animal 클래스에 포함됩니다 즉, Lion은 Animal의 자식이다
class Lion extends Animal {
  constructor(name, color, emoji, taste) {
    super(name, color, emoji, taste); //맨 첫 줄에 와야함
  }
  // display = () => console.log(`${this.name} : ${this.emoji}`);
  // sleep = () => console.log(`${this.name}가 잔다`);
  // eat = () => console.log(`${this.name}가(이) 먹는다`);
}

// Tiger 클래스
// 속성 : name, color, emoji, taste
// 메소드 : display(이모지), sleep, eat
class Tiger extends Animal {
  constructor(name, color, emoji, taste, age) {
    super(name, color, emoji, taste, age); //맨 첫 줄에 와야함
    this.age = age;
  }
  getAge = () => console.log(this.age);
}

// Dog 클래스
// 속성 : name, color, emoji, taste
// 메소드 : display(이모지), sleep, eat
class Dog extends Animal {
  constructor(name, color, emoji, taste, type) {
    super(name, color, emoji, taste); //맨 첫 줄에 와야함
    this.type = type;
  }
  display = () => console.log(`${this.name} : ${this.emoji}`);
  sleep = () => console.log(`${this.name}가 잔다`);
  eat = () => console.log(`${this.name}가(이) 먹는다`);
}

/**
 * 동물원에서 동물을 관리하는 클래스
 * 속성 : #type, 동물의 객체 (Lion, Tiger, Dog)
 * 메소드 :setter / getter
 */
class EverZoo {
  static LION = 1;
  static TIGER = 2;
  static DOG = 3;
  #type;
  #animal;
  constructor(type, animal) {
    this.#type = type;
    this.#animal = animal;
  }

  get type() {
    return this.#type;
  }
  get animal() {
    return this.#animal;
  }

  set type(type) {
    this.#type = type;
  }
  set animal(animal) {
    this.#animal = animal;
  }
}

const Tom = new Lion('tom', 'white', '🐶', 'meat');
const smith = new Tiger('smith', 'gray', '🐰', 'meat', 3);
const judy = new Dog('judy', 'white', '😺', 'meat', '푸들');

Tom.display();
Tom.sleep();
Tom.eat();

smith.display();
smith.sleep();
smith.eat();
smith.getAge();

judy.display();
judy.sleep();
judy.eat();
judy.getType();

const everZoo = new EverZoo(EverZo.LION, tom);
console.log(everZoo.type, everZoo.animal);
