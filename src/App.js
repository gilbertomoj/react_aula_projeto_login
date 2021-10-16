import './App.css';
import Input from './Components/Input';
import Img from './icon.svg'
function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="card">
        <div className="card-image">
          <img src={Img} alt="Logo"/>
        </div>
        <div className="card-content">
          <center><h5>Member Login</h5></center> 
          <center><Input ph="Email"/></center>
          <center><Input ph="Password"/></center>
          <center><span>
            Login
          </span></center> 
          <center><h6>Esqueci minha senha</h6></center> 
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
