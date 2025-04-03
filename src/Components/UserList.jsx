import { useEffect, useState } from 'react';
import User from './User';
import axios from 'axios';
import classes from './UserList.module.css'

const UserList = ({filter}) => {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
      const getUsers = async () => {
        try {
          const response = await axios.get("https://jsonplaceholder.typicode.com/users")
          setUsers(response.data)
          setFilteredUsers(response.data)
        }
        catch {
          console.log("Error: Failed to load users")
        }
      }

      getUsers()
    }, [])

    useEffect(() => {
      if (filter === '')
        setFilteredUsers(users)
      else 
        setFilteredUsers(users.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase())))
        
    }, [filter])

    return (
        <div className={`${classes.userList}`}>
            {filteredUsers.map((user) => <User user={user} key={user.id}/>)}
        </div>
    );
}

export default UserList;