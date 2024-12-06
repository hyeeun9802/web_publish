import PackageContent from './PackageContent.jsx';
// 중요 
//패키지 영화관람권 .. 반복되는 부분 => map를 통해 반복
// html -> react로 바꾸는 부분 정말 중요

import { useState, useEffect } from 'react';

export default function Package(){

    const [plist, setPlist] = useState([]);
    
    useEffect(() => {
            fetch("data/cgv_content.json")
                .then(data=>data.json)
                .then(jsonData => setPlist(jsonData.packageList))
                .catch(error => console.log(error));
               
    });

    return(
        
         <div className="content-event-special">
        
        <section className="package-content-list">
              
        {plist.map((object)=>{
            <PackageContent title={object.title}
                            list={object.list} />
        })}

        {/* 
        <PackageContent title="패키지" list={null}/> {/* 패키지 
        ...
            
        */}
      
           </section>
           </div>
    );
}