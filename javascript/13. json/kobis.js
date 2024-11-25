import {kobisBoxOffice as boxOffice} from `./kobisCommons.js`;
// 이 파일안에서만 이름 바꾸는 방법 as 사용!


initForm();

function initForm() {
  const output = `
  <h1> 일별 박스 오피스 </h1>
  <div id="search">
    <select id="type">
      <option value="Daily">일별</option>
      <option value="Weekly">주간/주말</option>
    </select>

    <input type = "text" id="searchDt" placeholder="예시)20241122">
    <button type="button" id="searchBtn" onclick=searchBtn>Search</button>
      
  </div>
  <div id="result"></div>
  `;

  document.querySelector('body').innerHTML = output;

  // 디폴트값(20240101)으로 박스오피스 화면 출력 : 20240101
  searchBoxOffice('Daily', '20240101');

  //이벤트는 output을 실행한 (즉, 화면을 만든 상태)이후에 이벤트를 추가해야함
  /** search 버튼 이벤트 추가 */
  let searchButton = document.querySelector('#searchBtn');
  searchButton.addEventListener('click', () => {
    //searchDt 입력창, 박스오피스 타입의 유효성 체크
    let type = document.querySelector('#type');
    let searchDt = document.querySelector('#searchDt'); //💡.value 로 작성하면 안됨
    //alert(type.value + searchDt.value); //alert에서는 ,안먹음

    if (type.value === '') {
      alert('박스오피스를 입력해주세요 ');
      searchDt.focus(); //-> 팝업창 뜨게 한 후에 마우스커서가 searchDt로 가도록 설정함
    } else if (searchDt.value === '') {
      alert('검색일자를 선택해주세요');
      type.focus();
    } else {
      //일별&주간/주말 박스오피스 정보 화면 출력
      searchBoxOffice(type.value, searchDt.value);
    }
  });
} //end of initForm

/**
 * 일별 박스오피스 정보 화면 출력
 */
function searchBoxOffice(ktype, searchDt) {
  kobisBoxOffice(ktype, searchDt) //Promise 객체로 리턴
    .then((result) => {
      // const rankType = ktype.toLowerCase(ktype);

      const type = result.boxOfficeResult.boxofficeType;
      const range = result.boxOfficeResult.showRange;

      //ktype을 체크하여 Daily, Weekly
      let rankList = null;
      if (ktype === 'Daily') {
        rankList = result.boxOfficeResult.dailyBoxOfficeList;
      } else if (ktype === 'Weekly') {
        rankList = result.boxOfficeResult.weeklyBoxOfficeList;
      }

      let output = `
    
      <h5>박스오피스 타입 : ${type}</h5>
      <h5>박스오피스 일자 : ${range}</h5>

      <table> 
        <tr>
          <th>순위</th>
          <th>제목</th>
          <th>개봉일</th>
          <th>당일 관객수</th>
          <th>누적 관객수</th>
        </tr> `;

      //element가 rankList[0]를 대치함
      rankList.forEach((element) => {
        output += `
         <tr> 

          <td>${element.rank}</td>
          <td>${element.movieNm}</td>
          <td>${element.openDt}</td>
          <td>${element.audiCnt}</td>
          <td>${element.audiAcc}</td>
        </tr>
        
        `;
      });

      output += `</table></div>`;

      // console.log(output);

      //테이블 화면 출력
      document.querySelector('#result').innerHTML = output;
    })

    .catch();
}
