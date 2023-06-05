
import './App.css';
import { useState } from 'react';


function App() {
  const [inp,setInp]=useState("");
  
  
  return (
    <div className="App">
      <h1>this is a react page</h1>
      <form>
        <input type='input'
        value={inp}
        name='name'
        onChange={(e)=>setInp(e.target.value)}
        ></input>
        <h1> <button type='submit'>Next</button></h1>
       
       

      </form>
      <h1>{inp}</h1>
    </div>
  );
}

export default App;
