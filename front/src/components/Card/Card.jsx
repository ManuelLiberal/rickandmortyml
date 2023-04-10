//!IMPORTACIONES

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useEffect, useState } from "react";

//!INICIA EL COMPONENTE

const Card = ({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  removeFavorite,
  addFavorite,
  myFavorites,
}) => {
  //!HOOKS

  const [isFav, setIsFav] = useState(false); //Seteo el estado local
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        species,
        gender,
        image,
        onClose,
        removeFavorite,
        addFavorite,
      });
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [{ myFavorites }]);
  return (
    <div>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h3>{species}</h3>
      <h3>{gender}</h3>
      <img src={image} alt="" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
