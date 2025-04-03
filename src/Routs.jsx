import { Route, Routes, Navigate } from "react-router-dom";
import Users from "./Pages/Users";
import UserPage from "./Pages/UserPage";

const Routs = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to='/users' />} />

                <Route path='/users' element={<Users/>} key={"userList"}/>
                <Route path='/users/:id' element={<UserPage />} key={"userPage"}/>
                <Route path='*' element={<Users/>} key={"userList"}/>
            </Routes>
        </div>
    );
}

export default Routs;