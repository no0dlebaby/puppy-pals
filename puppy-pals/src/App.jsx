import { puppyList } from "./data.js";
import { useState } from 'react'


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  return (
    <div className="App">
       <h1>Puppy List</h1>
      { 
      puppies.map((puppy) => {
      return <p key={puppy.id}>{puppy.name}</p>
      })
}
    </div>
  );
}

export default App
