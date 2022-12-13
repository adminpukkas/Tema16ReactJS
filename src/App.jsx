import { React } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./views/Home.view";
import Login from "./views/Login.view";
import Mensajes from "./views/Mensajes.view";
import Store from "./views/Store.view";
import Nav from "./components/Nav/Nav.component";
import Product from "./views/Product.view";
import ProtectedRoute from "./components/ProtectedRoute.component";
import { useSelector } from 'react-redux';

import "./App.scss";

function App() {
  //const [isLogged, setLogged] = useState(false);
  const sesion = useSelector(state => state);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} >test</Route>
          <Route path="/login" element={<Login />} />          
          <Route exact path="/" element={<ProtectedRoute />}>
          <Route path="/product/:id" element={<Product />} />
            <Route path="/mensajes" element={sesion.loggedIn ? <Mensajes /> : <Navigate to="/login" />} />
            <Route path="/store"element={sesion.loggedIn ? <Store /> : <Navigate to="/login" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
