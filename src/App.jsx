import './App.css'
import Greeting from './components/Greeting.jsx'
import { Farewell } from "./components/Farewell.jsx";

function ListItem(props) {
  return (
    <li>{props.item}</li>
  )
}
function SimpleList(props) {
  if(!props.items){
    return <div>Loading...</div>
  }

  if (props.items.length === 0) {
    return <h2>No items yet</h2>
  }

  return (
    <ul>
      {props.items.map((item, index) => {
        return <ListItem key={index} item={item} />
      })}
    </ul>
  )
}

function Button({ text="Click me!", color="green", fontSize="small", handleClick }) {
  const buttonStyle = {
    color,
    fontSize,
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>{text}</button>
  )
}

function App() {
  const myList = ["apple pie", "banana bread", "citrus soda", "dragon fruit jelly", "eucalyptus drops"];
  const renderMessage = (msg) => {
    console.log(msg)
  }

  return (
    <>
      <h1>Hello world!</h1>
      <Greeting/>
      <Button handleClick={()=>renderMessage("yay!")}/>
      <SimpleList items={myList} />
      <Button text="Don't touch it!" color="red" fontSize="big" handleClick={()=>renderMessage("bad user!")} />
      <Farewell/>
    </>
  )
}

export default App
