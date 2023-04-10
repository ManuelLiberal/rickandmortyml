import Card from "../Card/Card";
const Cards = ({ characters, onClose }) => {
  return (
    //?Para cada character retornar la importarcion de cada tarjeta
    <div>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};

export default Cards;
