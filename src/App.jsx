import Car from "./pages/Car";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateCarPost from "./pages/CreateCar/CreateCarPost";
import {useSelector} from "react-redux";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const App = () => {
    const user = useSelector(state=>state.user.currentUser)
    return(
        <Router>
            <Routes>
                <Route path="/login" element={user ? <Navigate to={'/'} />  : <Login/>} />
                <Route path="/register" element={user ? <Navigate to={'/'} />  :  <Register/>} />
                <Route exact path="/" element={<Home/>} />
                <Route path="/car/:id" element={<Car/>} />
                <Route path="/create" element={<CreateCarPost/>} />
            </Routes>
        </Router>
    )
};

export default App;