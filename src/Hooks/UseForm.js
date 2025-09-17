import { useContext, useState } from "react";
import { UsuarioContext } from "../Context/UsuarioContext";

export const UseForm = (initialForm) => {
   
  const [usuario, setUsuario] = useState(initialForm);
  

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setUsuario({
      ...usuario,
      [name]: value
    })
  };
 

  return {
    ...usuario,
    usuario,
    handleInput,
  }
}
