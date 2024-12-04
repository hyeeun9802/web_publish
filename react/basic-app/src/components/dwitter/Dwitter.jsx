//화면에 보여지는 컴포넌트
//import './Dwitter.css'; -> 부모에서 똑같은 css사용해서 자식에서는 삭제해도 됨!

//받아오는 파라미터가 여러개일 경우, 구조분해 (하나씩 받는 것)보다 
//props로 레퍼런스하는게 더 좋은 방법
export default function Dwitter(props){
    return(
        <div className='dwitter' key={props.id}>
            <div className='dwitter-image'>
                <img src={props.img} alt="image"/>
            </div>
            <div className="title">
                <span>{props.name}</span>
                <span>{props.id}</span>
                <span>{props.date}</span>
            </div>
            <div className="content">{props.content}        
            </div>

        </div>

    );
}