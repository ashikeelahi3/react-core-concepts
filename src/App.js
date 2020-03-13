import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  const phones =[
    {name: "iPhone 10", price: "$ 930"},
    {name: "iPhone 11", price: "$ 1080"},
    {name: "iPhone 12", price: "$ 1130"},
    {name: "iPhone 13", price: "$ 1233"},
    {name: "iPhone 14", price: "$ 1399"},
    {name: "iPhone 15", price: "$ 1820"}
  ]

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h3>Phones Collection:</h3>
        <Counter></Counter>
        <Users></Users>
        <div>
          {
            phones.map(phones => <Products collection ={phones}></Products>) 
          }
         </div>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] =useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>

      {
        users.map(user => <li>{user.name} <br/> {user.phone} </li>)
      }
      </ul>
        
    </div>
  )
}

function Products(props){

  const {name, price} = props.collection;
  const div ={
    color:"blue",
    backgroundColor:'light-gray',
    padding:"30px",
    paddingBottom:"60px",
    margin:"20px",
    borderRadius:"20px",
    boxShadow: "5px 5px 40px white",
    width:"150px",
    height:"150px",
    float:"left"

  }

  return (
    <div className="" style={div}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
   </div>
   )
}

export default App;
