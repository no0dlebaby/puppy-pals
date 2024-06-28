import { puppyList } from "./data.js";
import { useState } from 'react';
import './App.css';


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPup, setFeatPupId] = useState(null)

  return (
    <div className="App">
       <h1>Puppy List</h1>

       {featPup && (
        <div className="card">
          <h2 className="name">{featPup.name}</h2>
          <ul>
            <li>Age: {featPup.age}</li>
            <li>Email: {featPup.email}</li>
          </ul>
        </div>
      )}

      { 
      puppies.map((puppy) => {
      return <p className="names" onClick={()=>{setFeatPupId(puppy)}} key={puppy.id}>{puppy.name}</p>
      })
}
    </div>
  );
}

export default App
