import React from 'react';
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
        
        {
          phones.map(phones => <Products collection ={phones}></Products>) 
        }
          {/* <Products collection ={phones[0]}></Products>
          <Products collection ={phones[1]}></Products>
          <Products collection ={phones[2]}></Products>
          <Products collection ={phones[3]}></Products>
          <Products collection ={phones[4]}></Products>
          <Products collection ={phones[5]}></Products> */}

        


      </header>
    </div>
  );
}

function Products(props){

  const {name, price} = props.collection;
  const div ={
    color:"blue",
    backgroundColor:'beige',
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
