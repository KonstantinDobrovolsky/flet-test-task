import { useEffect, useState } from 'react';
import User from './User';
import axios from 'axios';
import classes from './UserList.module.css'

const UserList = ({filter}) => {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          setUsers(response.data)
          setFilteredUsers(response.data)
        })
        .catch(error => {
          console.error("Error: ", error)
        })
    }, [])

    useEffect(() => {
      if (filter === '')
        setFilteredUsers(users)
      else 
        setFilteredUsers(users.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase())))
        
    }, [filter])

    return (
        <div className={`${classes.userList}`}>
            {filteredUsers.map((user) => <User name={user.name} key={user.id}/>)}
        </div>
    );
}

export default UserList;