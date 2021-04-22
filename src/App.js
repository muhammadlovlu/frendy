// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import User from './Components/User/User';


function App() {
  const [users, setUsers] = useState([]);
  const [updateFriend, setupdateFriend] = useState([]);
  const addFriend = (addUser) => {
    const newFriend = [...updateFriend, addUser];
    setupdateFriend(newFriend)
  }
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=78")
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }, [])
  return (
    <div className="App">
      <Header updateFriend={updateFriend}></Header>
      {
        users.map(user => <User user={user} key={user.login.uuid} addFriend={addFriend} ></User>)
      }
    </div>
  );
}

export default App;
