import { useContext } from 'react'
import { UsuarioContext } from '../Context/UsuarioContext'

export const Carrito = () => {

  const { usuario } = useContext(UsuarioContext)

  return (
    <>
      <ul>
        <li>{usuario.nombre}</li>
        <li>{usuario.tecnologia}</li>
        <li>{usuario.email}</li>
        <li>{usuario.redes}</li>
      </ul>
    </>
  )
}
