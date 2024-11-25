//공통 모듈

/*
  KOBIS 박스오피스 정보 호출 함수
*/
export async function kobisBoxOffice(type, searchDt) {
  const key = `22675fe421bdb9e00db987bf798a268b`;
  const url = `
  http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`;

  // let kobis = await fetch(url); => await 함수 사용하려면 async function 사용해야 함
  const kobis = await fetch(url);
  const jsonData = await kobis.json();

  return jsonData;
}
