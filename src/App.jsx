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

function App() {
  const myList = ["apple pie", "banana bread", "citrus soda", "dragon fruit jelly", "eucalyptus drops"];

  return (
    <>
      <h1>Hello world!</h1>
      <Greeting/>
      <SimpleList items={myList} />
      <Farewell/>
    </>
  )
}

export default App
