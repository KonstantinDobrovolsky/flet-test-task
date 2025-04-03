import Search from './../Components/Search';
import UserList from './../Components/UserList';
import { useState } from 'react';

const Users = () => {
    const [filter, setFilter] = useState()

    return (
        <div>
            <Search setFilter={setFilter}/>
            <hr/>
            <UserList filter={filter}/>
      </div>
    );
}

export default Users;