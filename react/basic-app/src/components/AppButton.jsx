import Button from "./Button.jsx";
import ButtonList from "./ButtonList.jsx";

export default function AppButton(){
 
  const propsList = [
    {"name" : "All", "type" : "button"},
    {"name" : "Front-end", "type" : "button"},
    {"name" : "Back-end", "type" : "button"},
    {"name" : "Mobile", "type" : "button"},
    {"name" : "Submit", "type" : "submmit"},
    {"name" : "Reset", "type" : "reset"}
    
  ];

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

