//fetch는 비동기
const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20120101`;

//코딩 테스트
//비동기, 동기식 차이점
//비동기 setTimeout 함수일 때 결과값 적기

//API의 promise 리턴값 확인 후 호출
//fetch('네트워크로 접속할 서버의 주소 : URL')
fetch(url) //resolve(result), reject(error)
  .then((result) => {
    console.log(`result ==> ${result}`);
  })
  .catch((error) => {
    console.log(`error ==> ${error}`);
  });
