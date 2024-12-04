import './App.css';
import Avatar from './components/Avatar.jsx';
import AvatarImage from './components/AvatarImage.jsx';
import AvatarImageList from './components/AvatarImageList.jsx';
import AvatarList from './components/AvatarList.jsx';

import { useState, useEffect } from 'react';
export default function App() {
  
 /*
  const imgList = [
    { "img": "/images/1.jpg" },
    { "img": "/images/2.jpg" },
    { "img": "/images/3.jpg" },
  ];
  const avatarList = [
    { "img": "/images/1.jpg", "name": "smith" },
    { "img": "/images/2.jpg", "name": "james" },
    { "img": "/images/3.jpg", "name": "kelly" },
  ];
  */

  //imgList는 처음에 만들어질 때부터 종료될 때까지 리액트에서 관리한다
  const [imgList, setImgList] = useState([]);
  const [avatarList, setAvatarList] = useState([]);


  useEffect(() => {
    fetch("data/avatar.json")
          .then((result) => result.json()) //처음에 문자열로 가져오기 때문에 .then 한번더 사용
          .then(jsonData => {
            setImgList(jsonData.imageList);
            setAvatarList(jsonData.avatarList);
          })
          .catch();
          
  }, []);
  

  return (
    <div className="App">
      <div className="App-container">
        <Avatar img="/images/1.jpg"  name="smith"/>
        <Avatar img="/images/2.jpg"  name="james"/>
        <Avatar img="/images/3.jpg"  name="kelly"/>
      </div>
      <div className="App-container">
        <AvatarImage img="/images/1.jpg" />
        <AvatarImage img="/images/2.jpg" />
        <AvatarImage img="/images/3.jpg" />
      </div>
      <div className="App-container">
        <AvatarImageList list={imgList} />
      </div>
      <div className="App-container">
        <AvatarList list={avatarList} />
      </div>
    </div>
  );
}