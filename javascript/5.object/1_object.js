//object는 다양한 타입의 데이터들을 저장하는 방식
//object literal : {property(key) : value, property:value...}

//ex. 학생관리 프로그램 : 홍길동(name, age, address, gender), 공유, 김철수 ...
//배열은 사용 못함 => 공통된 타입이 아니라서

// 학생관리 프로그램 : 홍길동(name, kor, eng, math), ...

const obj = {
  //obj의 주소값은 재할당 불가!!
  name: '홍길동',
  age: 20,
};

// 1. obj 데이터 출력
console.log(obj);
console.log(obj.name, typeof obj.name);
console.log(obj.age, typeof obj.age);

// 2.name을 '김철수'로 변경
obj.name = '김철수';
console.log(obj.name);

// 3.age 값을 삭제
delete obj.age;
console.log(obj);
