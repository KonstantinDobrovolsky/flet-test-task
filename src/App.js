import Search from './Components/Search';
import UserList from './Components/UserList';
import classes from './App.module.css'
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState()

  return (
    <div>
      <Search setFilter={setFilter}/>
      <hr/>
      <UserList filter={filter}/>
    </div>
  );
}

export default App;
