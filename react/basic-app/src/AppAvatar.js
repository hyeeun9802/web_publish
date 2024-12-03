import './App.css';
import Avatar from './components/Avatar.jsx';
import AvatarImage from './components/AvatarImage.jsx';
import AvatarImageList from './components/AvatarImageList.jsx';
import AvatarList from './components/AvatarList.jsx';

export default function App() {
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