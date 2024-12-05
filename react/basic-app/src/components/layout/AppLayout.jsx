import Header from './Header.jsx'
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import AvatarImage from '../AvatarImage.jsx';
import AvatarList from '../AvatarList.jsx'; 
import Button from '../Button.jsx';
import Menu from '../Menu.jsx'
import ButtonList from '../ButtonList.jsx';

export default function AppLayout(){

    const avatarList = [

        {"img" : "/images/1.jpg", "name" :"Smith"},
        {"img" : "/images/2.jpg", "name" :"James"},
        {"img" : "/images/3.jpg", "name" :"Kelly"}
    ];

    const buttonList = [
        {"name" : "회원가입","type" : "button" },
        {"name" : "support", "type" : "button"},
        {"name" : "MyPage", "type" : "button"}

    ];

    return(

        <>
        <Header>
         <AvatarImage img="/images/1.jpg" />
            <Button name="Login" type="button"/>
            <Menu name="Home" href="#home" bg="gray" color="white" />
        </Header>
      
        <Body>
            <AvatarList list={avatarList}/>
        </Body>
       <Footer>
            <ButtonList list={buttonList} />
        </Footer> 
        
        </>
    );


}