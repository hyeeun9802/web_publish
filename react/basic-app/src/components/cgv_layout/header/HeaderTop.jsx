import Logo from './Logo.jsx';

 
import HeaderTopImage from './HeaderTopImage.jsx';
import HeaderTopImageList from './HeaderTopImage.jsx';


export default function HeaderTop({children}){
    return (
        <div className = "header-top">
            <Logo 
                    href="#"
                    src="/images/logoRed.png"
                    text="DEEP DIVE SPACE"
                    target="_self"
                    alt="CGV Logo" />

        <HeaderTopImage 
                    src="/images/header_card_img.png"
                    alt="Card Image" />

       <HeaderTopImageList />
        </div>

    );

}