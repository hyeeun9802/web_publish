import './App.css';
import AppButton from './components/AppButton.jsx';
import Box from "./Box.jsx";

export default function App() {
  return (
    <> 
    <Box name="lee" num="1"/>
    <Box name="kim" num="2"/>
    <Box name="park" num ="3"/>
   
   <div className="App">
      <AppButton />
    </div>
  </> 
  );
}

