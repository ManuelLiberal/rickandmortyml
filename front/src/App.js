import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import { useState, useEffect } from "react";
// import characters from "./data.js";
import Nav from "./components/Nav/Nav";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About";
import Detail from "./components/Detail/Detail";
import Error from "./views/Error";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  //!HOOKS
  const [characters, setCharacters] = useState([]);
  let location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "manu@gmail.com";
  const password = "manu12";
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //!FUNCIONES LOGIN-LOGOUT
  const login = (userData) => {
    if ((userData.email === username) & (userData.password === password)) {
      setAccess(true);
      navigate("/home");
    }
  };
  const logout = () => {
    setAccess(false);
    navigate("/");
  };
  //!FUNCION FILTRO
  const onSearch = (id) => {
    //!Se declara la url y la key necesaria para acceder a la api(en este caso server)
    const URL_BASE = "http://localhost:3001";
    // const URL_BASE = "https://be-a-rym.up.railway.app/api";
    // const KEY = "3e8cca96246b.21c19451ba2b8a27ed20";
    //!Se pregunta si el personaje a agregar esta repetido
    if (characters.find((char) => char.id === id)) {
      return alert("Personaje Repetido");
    }
    // fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldsChars) => [...oldsChars, data]);
        } else {
          alert("Algo salio mal");
        }
      });
  };
  //!Aca no estamos modificando el array original sino que me devuelve un array nuevo
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };
  //?RENDER
  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
