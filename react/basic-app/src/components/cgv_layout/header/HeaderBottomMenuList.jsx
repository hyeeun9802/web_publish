import HeaderBottomMenu from './HeaderBottomMenu.jsx'
import { useEffect, useState } from 'react'; 
import { fetchJson } from './js/commons.js';

export default function HeaderBottomMenuList(){
   
    const [names, setNames] = useState([]);

    useEffect(()=>{
        
        fetchJson("/data/cgv_header.json")
                    .then(result => setNames())
                    .catch()
        /*
        fetch("/data/cgv_header.json")
            .then(data => data.json)
            .then(jsonData => setNames(jsonData.bottomMenuList))
            .catch(error=>{console.log(error);
            });
    }
    */
    , []});


    return(
     <ul class="flex-container">
        {names.map((item)=>{
            <li>
                <HeaderBottomMenu 
                        item={name}/>
            </li>
        })}
    </ul>
    );

}