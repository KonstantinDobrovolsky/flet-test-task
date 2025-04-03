import classes from './Comment.module.css'

const Comment = ({comment}) => {
    return (
        <div className={`${classes.comment}`}>
            Id: {comment.id}, Comment: {comment.body}
        </div>
    );
}

export default Comment;