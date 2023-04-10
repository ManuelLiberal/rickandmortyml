import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  //!Declaro el estado del id, que tiene que actualizarse cada vez que se modifique el input
  //!Declaro tambien la función que va a manejar y a estar atenta al cambio de valor en el imput

  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
};
export default SearchBar;
