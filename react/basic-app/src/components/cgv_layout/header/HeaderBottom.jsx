import HeaderBottomMenuList from './HeaderBottomMenuList.jsx';
import HeaderBottomSearch from './HeaderBottomSearch.jsx';


export default function HeaderBottom(){

    return (
        <div className="header-bottom">
            <div className = "header-bottom-comtent">
            <HeaderBottomMenuList />
         {/** <HeaderBottomSearch /> */}   
        </div>
    </div>
    );
}