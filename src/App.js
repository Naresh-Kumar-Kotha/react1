import logo from './logo.svg';
import React from 'react';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  const cond1=false
  return (
  
    <div>
      {
        cond1?
        (<p> Hi this is true </p>) :
        (<p> Hi This is false </p>)
      }
      <HomePage name={"Naresh"} std={10}/>
      <HomePage name={"Suresh"} std={12}/> 
      <header className="App-header">
        
        <p>
          New app
        </p>
        
      </header>
    </div> 

  );
}

export default App;
