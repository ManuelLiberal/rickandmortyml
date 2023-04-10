import { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";

//!--------------------------COMIENZA FORM----------------------------------------//

const Form = ({ login }) => {
  //?ESTADO DE FORMULARIO
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  //?ESTADO DE ERRORES DEl formulario
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  //?FUNCIÓN ONCHANGE: ENCARGADA DE ALMACENAR LO ESCRITO EN EL ESTADO
  const handleInputChange = (event) => {
    //preguntar de donde viene el evento, eso va a depender en cual propiedad del estado va a almacenar
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value }); //*cambio el estado ... esto demora
    // validate(form, errors, setErrors); //*des esta manera se maneja un estado viejo
    setErrors(validation({ ...userData, [property]: value }));
  };

  //?FUNCIÓN SUBMITHANDLER: maneja el submit del form
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  return (
    <form onSubmit={handleSubmit} className={style.mainContainer}>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          className={errors.email ? style.bordeRed : style.bordeGreen}
        />
        <span>{errors.email}</span>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          className={errors.password ? style.bordeRed : style.bordeGreen}
        />
        <span>{errors.password}</span>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
export default Form;
