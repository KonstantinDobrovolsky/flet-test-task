import classes from './User.module.css'
import { useNavigate } from "react-router-dom";

const User = ({user}) => {
    const navigate = useNavigate();

    return (
        <div className={`${classes.user}`} onClick={() => navigate(`/users/${user.id}`)}>
            {user.name}
        </div>
    );
}

export default User;