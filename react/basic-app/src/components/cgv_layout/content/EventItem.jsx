
export default function EventItem({src, title, date}) {

    return (
    <>
       <div>
        <img src={src}
            alt="Event Image"
            width="200px" />
    </div>
    <p class="event-content-title">{title}</p>
    <p class="event-content-title-date">{date}</p>

    </> 
    );
}