import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import UserInfo from "../Components/UserInfo";
import axios from "axios";

const UserPage = () => {
    const params = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        const getResponse = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + params.id);
                setUser(response.data)
            }
            catch {
                console.log("Error: Faild to load user with id = " + params.id)
            }
        }

        getResponse()
      }, [])
    
    return (
        <div>
            <UserInfo user={user}/>
        </div>
    );
}

export default UserPage;