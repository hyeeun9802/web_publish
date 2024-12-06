import { useState, useEffect } from "react";
import EventItem from "./EventItem";


export default function Event(){

    const [plist, setlist] = useState([]); 

    useEffect(()=>{
        fetch("/data/cgv_content.json")
            .then(data => data.json)
            .then(jsonData => setlist(jsonData.eventList))
            .catch(error => {console.log(error);
            })
    }, []);

    return(
        <section>
        <div class="content-title-style">
            <h3 class="content-title-style-font">EVENT</h3>
            <button class="total-view-button">전체보기 &gt;</button>
        </div>
        <ul class="content-event-list">
            {list.map((item) => {
                    <li>
                        <EventItem 
                            src={item.src}
                            title={item.title}
                            date={item.date}
                            />
                    </li>
            })}

           
           
        </ul>
   </section> 
    );
}