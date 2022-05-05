import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Hello></Hello>
     
      <Profile name = "Monika" lastname ="Petrevska"/>
      <Message messagetxt ="Ova e poraka za Zdravo!"/>
      <Counter/>

    </div>
  );
}

export default App;
