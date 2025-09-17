import { useState } from "react";

export const UseForm = (initialForm) => {
   
  const [usuario, setUsuario] = useState(initialForm)
  
  const handleInput = ({ target }) => {
    const { name, value } = target;
    setUsuario({
      ...usuario,
      [name]: value
    })
  };
  const onsubmitForm = (evento) => {
    evento.preventDefault();
    console.log(usuario)
    resetForm()
  }

  const resetForm = () => {
    setUsuario(initialForm)
  }

  return {
    ...usuario,
    usuario,
    handleInput,
    onsubmitForm
  }
}
