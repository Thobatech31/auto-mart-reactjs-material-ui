import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Home from "./pages/Home";
import Register from "./pages/Register";

const App = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </Router>
    )
};

export default App;