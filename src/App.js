// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import User from './Components/User/User';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=24")
      .then(res => res.json())
      .then(data =>setUsers(data.results))  
  }, [])
  return (
    <div className="App">
         <Header></Header>
{
  users.map(user=> <User user={user} key={user.login.uuid}></User>)
}
 

 

   
    </div>
  );
}

export default App;
