// fetch(resourceURL) - 비동기식 처리 방식으로 네트워크를 통해 리소스를 가져옴
//KOBIS

let key = `22675fe421bdb9e00db987bf798a268b`;
let target = `20241121`;
let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${target}`;
//`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=22675fe421bdb9e00db987bf798a268b&targetDt=20241121`;

//return response.json();
//Promise { <pending> } : 리턴타입이 promise라서 이렇게 나옴
//1. Response 객체
fetch(url)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// 2. JSON 데이터 가져오기
let result = await fetch(url); // JSON객체가 문자열 데이터타입으로 가져옴!
//=> fetch 함수를 사용하면 response로 넘어가는데 문자열 상태로 넘어감
//fetch는 json함수 꼭 사용해야 한다! (*리액트는 엑시오스 함수 사용함!, 즉 json바로 받을 수 있음)
//await는 비동기식 함수
//fetch가 결과를 가져올 때까지 await 기다려~ (순서를 지키면서 실행할 수 있도록 await를 사용함)

let jsonData = await result.json(); // .json()함수를 통해 JSON 객체 타입 변환
console.log(`type => ${jsonData.boxOfficeResult.boxofficeType}`);
console.log(`range => ${jsonData.boxOfficeResult.showRange}`);
console.log(
  `rankList => ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].rank}`
);
console.log(
  `rankList => ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].movieNm}`
);

let jsonData2 = {
  boxOfficeResult: {
    //대문자 소문자 구별 잘하기!
    boxofficeType: '일별 박스오피스',
    showRange: '20241121~20241121',
    dailyBoxOfficeList: [
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
      [Object],
    ],
  },
};

/* 데이터가 잘 들어갈 걸 (성공) 알 수 있음
  Response {
    status: 200,
    statusText: 'OK',
    headers: Headers {
      date: 'Fri, 22 Nov 2024 01:32:47 GMT',
      'content-type': 'application/json;charset=utf-8',
      'transfer-encoding': 'chunked',
      connection: 'keep-alive',
      server: '.'
    },

    body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
    bodyUsed: false,
    ok: true,
    redirected: false,
    type: 'basic',
    url: 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=22675fe421bdb9e00db987bf798a268b&targetDt=20241121'
  }
    */
