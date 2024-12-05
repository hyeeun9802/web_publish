/** header top에 들어가는 메뉴 
 * 로그인/회원가입/my cgv / 고객센터 
 * */

export default function HeaderTopMenu({href, src, name}){

    return (
        <a href={href} 
        target="_parent"
        className="header-menu-icon">
        <img src={src} alt="" />    
        <span>&nbsp;&nbsp;{name}</span>
    </a>

    );


}