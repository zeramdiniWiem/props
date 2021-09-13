import logo from './logo.svg';
import './App.css';
import Profile from './profile/profile'
import img from "./img.jpg"


function App() {
  const stylep={color: "red", padding: "30px", fontFamily:"Fantasy", textAlign:"center",
}
  const alertme = () => {
    alert('problem msg')
  }
  return (
    <div style={stylep} > 
        <Profile  FullName='   Zeramdini Wiem  ' Profession="   Etudiante  " fncAlert={alertme}> <br></br>
        <img src={img} alt ='myImage'/></Profile>
    </div>
  );
}

export default App;
