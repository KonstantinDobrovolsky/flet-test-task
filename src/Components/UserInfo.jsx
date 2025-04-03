import classes from './UserInfo.module.css'

const UserInfo = ({user}) => {
    return (
        <div className={`${classes.userInfo}`}>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <div>Website: {user.website}</div>
        </div>
    );
}

export default UserInfo;