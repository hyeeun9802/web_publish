//패키지 컨텐트에 들어가는 것 (패키지 / 영화관람권 ..)

export  default function PackageContentTitle({title}){
    return(
        <div>
             <span className="package-title-font">{title}</span>
             <button className="package-title-button">{title}</button>
         </div>
    );
}