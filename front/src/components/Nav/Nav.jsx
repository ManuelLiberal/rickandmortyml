import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Nav = ({ onSearch, logout }) => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const idRandom = getRandomInt(826);
  return (
    <div>
      <button onClick={() => onSearch(idRandom)}>RANDOM</button>
      <SearchBar onSearch={onSearch} />
      <Link to={"/about"}>
        <h3>About</h3>
      </Link>
      <Link to={"/home"}>
        <h3>Home</h3>
      </Link>
      <Link to={"/favorites"}>
        <h3>Favorites</h3>
      </Link>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default Nav;
