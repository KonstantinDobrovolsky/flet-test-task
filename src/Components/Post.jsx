import { useState } from 'react';
import classes from './Post.module.css'
import Comment from './Comment';
import axios from 'axios';

const Post = ({post}) => {
    const [comments, setComments] = useState([])
    const [showComments, setShowComments] = useState("Показать комментарии")
    const [commentsVisibility, setCommentsVisibility] = useState(false)

    async function toggleComments(){
        if (showComments === "Показать комментарии")
        {
            // if (comments.length === 0)
                await loadComments()
            setShowComments("Скрыть комментарии")
            setCommentsVisibility(true)
        }
        else
        {
            setShowComments("Показать комментарии")
            setCommentsVisibility(false)
        }
    }

    async function loadComments(){
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
                params: {
                    postId: post.id
                }
            })
            setComments(response.data)
        }
        catch {
            console.log("Error: Failed to load comments")
        }
    }
    return (
        <div>
            <div className={`${classes.post}`}>
                <div className={`${classes.info}`}>
                    <div className={`${classes.title}`}>{post.title}</div>
                    <div className={`${classes.body}`}>Body: {post.body}</div>
                </div>
                <div className={`${classes.showComments}`} onClick={() => (toggleComments())}>
                    {showComments}
                </div>
            </div>
            {commentsVisibility
                ?
                comments.map((comment) => <Comment comment={comment} key={comment.id}/>)
                : ""
            }
        </div>
    );
}

export default Post;