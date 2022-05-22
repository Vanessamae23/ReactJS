
import Edit from './components/Edit';
import Create from './components/Create';
import './App.css';
import Table from './components/Table';
import { useState } from 'react';
import Search from './components/Search';

function App() {
  const DUMMY = [{player: "Vanessa", email: "sa@gmail.com", experience:"Beginner", level: "Amateur"}]
  const [profile, setProfile] = useState(DUMMY);
  const [search, setSearch] = useState([])
  const addPlayer = (data) => {
    setProfile([...profile, data])
  }

  const editPlayer = (data) => {
    const newPlayer = [...profile];
    const index = profile.findIndex((players) => players.player === data.player);
    newPlayer[index] = data;
    setProfile(newPlayer);

  }

  const searchPlayer = (data) => {
    profile.map((item) => {
      if(item.player === data.player) {
        setSearch(item)
        return alert(search.player + " is found. " + search.email + " is the email. " + search.experience + " is the experience. " + search.level + " is the level. " )
      } 
    })
  }

  

  return (
    <div className="App">
      <Create onAddPlayer={addPlayer} />
      <Edit onEditPlayer={editPlayer}  />
      <Search onSearchPlayer={searchPlayer} />
      <Table players={profile} />
    </div>
  );
}

export default App;
