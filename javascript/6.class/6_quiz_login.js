// 로그인 체크를 위한 클래스 정의
class User {
  #id;
  #pass;
  constructor(id, pass) {
    this.#id = id;
    this.#pass = pass;
  }
  get id() {
    return this.#id;
  }
  get pass() {
    return this.#pass;
  }

  set id(id) {
    this.#id = id;
  }
  set pass(pass) {
    this.#pass = pass;
  }
}

/**
 * 로그인 버튼 클릭시 호출하는 함수
 */
let user = null; // 전역변수로 선언, 객체니까 null로 선언!
const DID = 'test';
const DPASS = '1234';

function loginClick() {
  let id = document.querySelector('#id'); //id값이 입력되는 폼 객체
  let pass = document.querySelector('#pass'); //pass값이 입력되는 폼 객체

  if (id.value === '') {
    alert('아이디를 입력해주세요');
    id.focus();
  } else if (pass.value === '') {
    alert('패스워드를 입력해주세요');
    pass.focus();
  } else {
    //id, pass =? user 클래스 객체 생성과 처리작업
    user = new User(id.value, pass.value);
    console.log(user.id, user.pass);

    if (DID === user.id && DPASS === user.pass) alert('로그인 성공!!');
    else alert('로그인 실패!!');
  }
}
/**
 * 서버 연동 작업
 */

/*
const result = new User('lee 9617', '1111');
console.log(`id = ${result.id}, pass=${result.pass}`);
result.id = 'leeeee';
result.pass = '2222';

console.log(`id = ${result.id}, pass=${result.pass}`);
*/
