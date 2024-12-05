import EventItem from "./EventItem";


export default function Event(){

    const list = [
       
        {"src" : " https://img.cgv.co.kr/WebApp/contents/eventV4/42386/17297657794310.jpg", 
            "title":"[CGV]10우러 컬쳐위크", 
            "date":"2024.10.24~2024.10.31"},

        {"src" : "/cgv/images/event1.jpg", 
                "title":"[콜렉터블 무비머니]vol.1 맥스 달튼", 
                "date":"2024.10.24~2024.10.31"},

         {"src" : "/cgv/images/event1.jpg", 
                    "title":"모아나2", 
                    "date":"2024.10.24~2024.10.31"},
    
                ];

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