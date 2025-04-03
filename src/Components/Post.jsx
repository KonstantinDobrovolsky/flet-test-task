import classes from './Post.module.css'

const Post = ({post}) => {
    return (
        <div className={`${classes.post}`}>
            <div className={`${classes.title}`}>{post.title}</div>
            <div className={`${classes.body}`}>Body: {post.body}</div>
        </div>
    );
}

export default Post;