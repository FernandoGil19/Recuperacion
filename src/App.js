import Navbar from "./Componentes/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Usuarios from "./Pages/Usuarios";

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/usuarios" element={<Usuarios/>}/>
            </Routes>
            </BrowserRouter>
        </div>
        
    )
}
export default App