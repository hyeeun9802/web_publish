import HeaderTopMenu from "./HeaderTopMenu.jsx";
import { useEffect, useState } from 'react'; 


export default function HeaderTopMenuList(){


    const [list, setList] = useState([]);


    return (
        <nav>
            <ul>
                {list.map((menu) => {
                        <li>
                              <HeaderTopMenu 
                                    href ={menu.href}
                                    src={menu.src}
                                    name={menu.name}/>
                        </li>

                })}
               
            </ul>
        </nav>
    );


}