//연습용 공부코드
export default function Box(props){
 
  //버튼에 이벤트 넣기 alert
  const alarm = () => { // => 위에 Box 함수와 똑같은 함수이다!
    alert("React Studying");
  }
 
  return ( //이름, 넘버, 버튼 생성
    <div className="box-border">
      surname {props.num} {props.name} 
      <button type="button" onClick={alarm}>Click</button>
    </div>
  );

}
  