//class의 field는 생성자함수에서 정의하는 값
//field에 접근 제어를 정의 : private(#), public

class Fruit {
  //constructor
  #name; //인스턴스.name 형식으로 외부에서 호출하는 경우 데이터 숨김
  constructor(name, color, emoji) {
    //fields
    this.name = name;
    this.color = color;
    this.emoji = emoji;
  }

  display = () => console.log(`${this.name}, ${this.color}, ${this.emoji}`);
}

const apple = new Fruit('apple', 'green', '🍏');
apple.display();
console.log(apple.name);
console.log(apple.color);
console.log(apple.emoji);

console.clear();
//사번(#), 사원명, 부서명
//info() 메소드 호출시 모든 정보 출력
class Employee {
  #empno; //외부에서 접근 못하도록 private
  constructor(empno, ename, depart) {
    this.#empno = empno;
    this.ename = ename;
    this.depart = depart;
  }

  info = () => console.log(`${this.ename}, ${this.depart}`);
  infoAll = () => console.log(`${this.#empno}, ${this.ename}, ${this.depart}`);
}

const job = new Employee('1234', '홍길동', '개발1팀');
job.info(); //일반정보 : 사원명, 부서명 출력
job.infoAll(); //모든 정보
