import Button from "./Button.jsx";
import ButtonList from "./ButtonList.jsx";

import { useState, useEffect } from "react"; // 얘는 중복되면 안됨!

export default function AppButton(){
 
  const [propsList, setPropsList] = useState([]);

  useEffect = (() => {
    fetch("data/button_names.js")
          .then((result) => {result.json()})
          .then((jsonData) => {setPropsList(jsonData)})
          .catch();

  }, []);

 //display:'flex' 가로 방향으로 배치
  return (
    <>
    <div style={{display :'flex'}}>
      <Button name="All" type="button" />
      <Button name="Front-end" type="button" />
      <Button name="Back-end" type="button" />
      <Button name="Mobile" type="button" />
      <Button name="Submit" type="submmit" />
      <Button name="Reset" type="reset" />

    </div>
    
    <div style={{display : 'flex'}}>
      <ButtonList list={propsList} />

    </div>
    </>
  );

}

