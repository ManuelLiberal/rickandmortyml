//?FUNCION VALIDADORA: SE VA A FIJAR SI EL EMAIL ESTA BIEN
//1- El email tiene algo?
const validation = (userData) => {
  const errors = {};
  //?Valida si el email esta vacio, si cumple el formato y si no pasa de los 35 caracteres

  const email = userData.email;
  const emailLg = userData.email.length;

  if (!email) {
    errors.email = "Por favor, ingresa un email";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(email))
    errors.email = "El email es inválido";
  else if (emailLg > 35)
    errors.email = "El email superó la cantidad de caracteres máxima";
  else errors.email = "";

  //? Valida el formato de contraseña

  const password = userData.password;
  const passwordLg = userData.password.length;
  if (!(passwordLg <= 10 && passwordLg >= 6))
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  else if (!/[0-9]/.test(password))
    errors.password = "La contraseña debe tener al menos un número";
  else errors.password = "";

  return errors; //1-la contraseña tiene que tener entre 6 y 10 caracteres
};

export default validation;
