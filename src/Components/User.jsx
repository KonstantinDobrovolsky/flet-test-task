import classes from './User.module.css'

const User = ({name}) => {
    return (
        <div className={`${classes.user}`}>
            {name}
        </div>
    );
}

export default User;