import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Message from './Message';
import Clock from './Clock';
import Toggle from './Toggle';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import NumberList from './NumberList';
function App() {  
  const number = [69,96,420,786, 'sassy boii'];
  return <div>
    <Welcome name = "Jihaadi"/>
    <Message message ="olahuber"/>
    <Clock />
    <Toggle />
    <NumberList number = {number}/>
    <LoginControl hasNewMessage ={true} credit ={69} hasWarning ={true}/>
  </div>
}

export default App;
