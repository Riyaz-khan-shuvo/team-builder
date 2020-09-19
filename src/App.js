import React, { useEffect, useState } from 'react';
import './App.css';
import Social from './Components/Social/Social';

function App() {
  const [users , setUsers] = useState([]);
  const [team , setTeam] = useState([]);
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=45')
    .then(res =>res.json())
    .then(data =>setUsers(data.results))
  },[]);

  const addMember = (name) => {
    console.log('mamber added' , name);
    setTeam([...team , name]);
  }

  return (
    <div className="App">
      <h1 className='text-center'>Team Builder</h1>
      {
        team.map(te => <li> {te} </li>)
      }
      {
        users.map(info=><Social information={info} addMember={addMember}></Social>)
      }
    </div>
  );
}
export default App;