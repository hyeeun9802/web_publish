// 학사관리 프로그램을 생성하는 경우, 사용자를 정의하는 클래스를 설계
// 학생, 교수, 학부모, 직원 ==> Member 부모클래스 (name, age, address)

class Member {
  #name;
  #age;
  #address;
  constructor(name, age, address) {
    //자식의 클래스 생성자 함수에서 super메소드가 호출
    this.#name = name;
    this.#age = age;
    this.#address = address;
  }
  get name() {
    return this.#name;
  }
  get age() {
    return this.#age;
  }
  get address() {
    return this.#address;
  }
}

class Student extends Member {
  #sno; //학번
  constructor(sno, name, age, address) {
    //자식의 클래스 생성자 함수에서 super메소드가 호출

    this.#sno = sno;
  }
  get sno() {
    return this.#sno;
  }
}
