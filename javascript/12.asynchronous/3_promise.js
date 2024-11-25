//비동기 처리를 진행할 때 promise 를 사용
//promise 구문 안에 비동기 처리하는 코드가 들어가야함

/** 꼭 공부해야 할 부분 
 * 
1) 비동기 돌아가는 절차
2) 비동기, 동기 차리
3) 콜백으로 했을 때 돌아가는거
4) promise로 했을 때

*/

//빌트인 클래스인 Promise를 통해 비동기식 처리
let promise1 = new Promise((resolve, reject) => {
  //실행한 비동기식 로직
  //setTimeout(() => {},3000); 의미는 3초 후에 시작할 콜백함수를 가지고 있다

  //에러가 뜨든, 결과가 뜨든 내가 알려줄게요 (전담자 존재함)
  //2_callback.js 파일에는 전담자 x, 에러발생하거나 결과 잘 나와도 그거는 모름
  setTimeout(() => {
    resolve('success'); //성공한다면 resolve가 받음
    //reject('fail'); // 실패했다면 catch가 받음
  }, 3000);
});

/*
promise1
  .then(성공한 경우) => 시간 경과후 callback queue에 들어가는 실행함수를 정의
  .catch(실패한 경우) 
*/
promise1
  .then((result) => {
    console.log('3초 경과!!');
  })
  .catch((error) => {
    console.log(error);
  });
