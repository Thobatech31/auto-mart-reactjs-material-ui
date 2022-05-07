import Car from "./pages/Car";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route exact path="/" element={<Home/>} />
                <Route path="/car/:id" element={<Car/>} />
            </Routes>
        </Router>
    )
};

export default App;