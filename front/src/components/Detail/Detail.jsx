//!IMPORTACIONES

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetail, getCharacterDetail } from "../../redux/actions";

//!INICIA COMPONENTE

const Detail = () => {
  //!HOOKS

  const character = useSelector((state) => state.characterDetail); //Guardo en la variable character la propiedad del estado global

  const { detailId } = useParams(); //Hago deconstructing de la propiedad del useParams

  const dispatch = useDispatch(); //Llamo al dispatch

  useEffect(() => {
    dispatch(getCharacterDetail(detailId)); //cuando se monte el componente que se haga esto

    return () => {
      dispatch(cleanDetail()); //cuando se desmonte que haga esto
    };
  }, [detailId]); //y que se vuelva a montar cuando esto se modifique

  return (
    //?Me pregunto si character.name tiene algun valor, si esto es asi, quiere decir que tengo las otras propiedades, por ende muestro todo. En el caso contrario muestro un texto Loading...

    //?Esto se usa para que no se vea como se demora en cargar la página
    <div>
      {character.name ? (
        <>
          <h2>Name: {character.name}</h2>
          <p>Status: {character.status}</p>
          <p>SpecieS:{character.species}</p>
          <p>Gender:{character.gender}</p>
          {/* acá a react le cuesta procesar la propiedad de otra propiedad, por eso es que se pregunta por esta solo cuando ya la tenga*/}
          <p>Origin:{character.origin?.name}</p>
          <img src={character.image} alt="img" />
        </>
      ) : (
        <>
          <h3>Loading...</h3>
        </>
      )}
    </div>
  );
};
export default Detail;
