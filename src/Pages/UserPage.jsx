import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import UserInfo from "../Components/UserInfo";
import Post from '../Components/Post'
import axios from "axios";
import classes from './UserPage.module.css'

const UserPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

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

        const getPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/', {
                    params: {
                        userId: params.id
                    }
                });
                setPosts(response.data)
            }
            catch {
                console.log("Error: Faild to load posts with userId = " + params.id)
            }
        }

        getPosts()
      }, [])
    
    return (
        <div className={`${classes.userPage}`}>
            <div className={`${classes.flex}`}>
                <UserInfo user={user}/>
                <div className={`${classes.back}`} onClick={() => (navigate('/users'))}>Back</div>
            </div>
            <div className={`${classes.posts}`}>Posts:</div>
            {posts.map((post) =><Post post={post} key={post.id}/>)}
        </div>
    );
}

export default UserPage;