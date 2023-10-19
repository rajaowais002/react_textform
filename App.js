import logo from './logo.svg';
import './App.css';
import Navbar from './components/components/Navbar';
import TextForm from './components/components/TextForm';
import { useState } from "react";

function App() {
  const ali = "khan ali";
  // let counter = 15;

  let [counter, setCounter] = useState(0);
  let [remove,setRemove] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      console.log("You cannot update more values. Counter is already at 20.");
    }
  };

  
  const removeValue = () => {
    if (counter > 0 ) {
      setCounter(counter - 1);
      
    } else {
      console.log("You cannot update more values. Counter is already at 20.");
    }
  }

  
  return (
   

    <>
    <h1>{ali}</h1>
     
     <Navbar />
     <div className="container">
     <TextForm heading ="Enter Text"/>
     </div>

     <h2>counter = {counter}</h2>

     <button onClick={addValue}>Increase Value</button>
     <br/>
     <button onClick={removeValue}>Remove Value</button>
    
    </>

  );


}

export default App;
