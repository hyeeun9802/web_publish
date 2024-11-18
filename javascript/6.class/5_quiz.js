// 학생 (student) 클래스
// 속성 : (#)이름 (자바스크립트에서만 private에 #을 사용 다른 곳에선 private으로 작성하기),
// 나이, 주소 , 별칭
// 메소드 : setter/getter 메소드 정의

class Student {
  #name;
  #age;
  #address;
  nickName;

  constructor(name, age, address, nickName) {
    this.#name = name;
    this.#age = age;
    this.#address = address;
    this.nickName = nickName;
  }
  /*
  getName = () => this.#name;
  getAge = () => this.#age;
  getAddress = () => this.#address;
  getNickName = () => this.nickName;
*/
  get name() {
    // 2번째 방법 위 방법과 똑같이 출력됨
    return this.#name;
  }
  get age() {
    // 2번째 방법 위 방법과 똑같이 출력됨
    return this.#age;
  }
  get address() {
    // 2번째 방법 위 방법과 똑같이 출력됨
    return this.#address;
  }
  get nickName() {
    // 2번째 방법 위 방법과 똑같이 출력됨
    return this.nickName;
  }

  //private으로 정의된 필드값은 반드시 set 함수
  setName = (name) => (this.#name = name);
  setAge = (age) => (this.#age = age);
  setAddress = (address) => (this.#address = address);
  setNickName = (nickName) => (this.nickName = nickName);
}

const result = new Student('lee', 26, '서울시', '이혠');
/*
console.log(
  // \n은 줄바꿈 엔터 누른 효과를 줌
  `${result.getName()}\n, ${result.getAge()}\n, ${result.getAddress()}\n, ${result.getNickName()}`
);
*/

console.log(result.name);
console.log(
  `${result.name}\n ${result.age}\n ${result.address}\n ${result.nickName}`
);
