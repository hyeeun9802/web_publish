import './BoxOffice.css';

export default function BoxOffice({rank, title,open, cnt, total, amt, type}){
  
  if(type === "content"){
    cnt = parseInt(cnt).toLocaleString().concat('명');
    total = parseInt(total).toLocaleString().concat('명');
    amt = parseInt(amt).toLocaleString().concat('명');
  }



  return (
 
      <div>
        <p style = {{width:50}}>{rank}</p>
        <p style = {{width:200}}>{title}</p>
        <p style = {{width:100}}>{open}</p>
        <p style = {{width:100}}>{cnt}</p>
        <p style = {{width:100}}>{total}</p>
        <p style = {{width:100}}>{amt}</p>
     </div> 

    );
}