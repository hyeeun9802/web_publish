//패치함수 실행하는 로직


/**
 * 내용 : 비동기식 네트워크 연동 실행 함수
 * @returns 
 * 
 */
export async function fetchJSON(){
    
    //await는 바로 리턴하지말고 조금만 기다려주세요~ 의미
    const data = await fetch(url); 
    const jsonData = await data.json(); // 위 data를 제이슨화 시킴
    return jsonData;


}