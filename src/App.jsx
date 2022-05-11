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
                <Route exact path="/" element={user ? <Home/>  :  <Login/>}/>
                <Route path="/car/:id" element={user ? <Car/>  :  <Login/>} />
                <Route path="/create" element={user ? <CreateCarPost/>  :  <Login/>} />
            </Routes>
        </Router>
    )
};

export default App;