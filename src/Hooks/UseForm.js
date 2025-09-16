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
    if(usuario.nombre.trim() === '' || usuario.tecnologia.trim() === '' || usuario.email.trim() === '' || usuario.redes.trim() === '' ) return
    console.log(usuario)
    resetForm()
  }

  const resetForm = () => {
    setUsuario(initialForm)
  }

  return {
    usuario,
    handleInput,
    onsubmitForm
  }
}
