import Dwitter from './Dwitter.jsx';
import './Dwitter.css' 
import { useEffect, useState } from 'react';

/*
Dwitter = [ {
    "img":"./images/1.jpg",
    "name":"Smith Kim" ,
    "id":"@Smith",
    "date":"2024-12-04",
    "content":"거울입니다. 감기 조심하세요!"
    }]
    => 이렇게 가리키고 있다
 */

export default function AppDwitter() {

    const [dwitters, setDwitters] = useState([]);
    //dwitters에 처음에는 아무값도 없었는데 
    //useState()를 사용해 


    // react network를 통해 접속을 할 때 useEffect() 리액트 Hooks 사용한다
    // react hooks -- useEffect();
    // useEffect(callback함수, dependencies) : 맨 처음에 실행되는 함수
    useEffect(() => { //맨 처음 한번만 호출하도록 상태 관리를 하는 것이 useEffect
        //fetch로 받기 때문에 처음엔 string값으로 받음
         fetch("data/dwitter.json") //네트워크를 이용해서 접속
         .then((result) => result.json())
         .then((jsonData) => setDwitters(jsonData))
         .catch(error => console.log(error));
   }, []);

    return (
        <div className="dwitter-container">
            <h1>Dwitter</h1>
          
            <ul class="dwitter-menu">
                <li>All Dwitter</li>
                <li>My Dwitter</li>
                <li>Login / Sigh up</li>

            </ul>

            {/* Dwitter map을 통해 출력 */}
           
           {
           dwitters.map((dwitter) => 
                    <Dwitter 
                        img={dwitter.img}
                        name={dwitter.name}
                        id={dwitter.id}
                        date={dwitter.date}
                        content={dwitter.content}/>
            ) 
            }


           
        </div>
    );

}