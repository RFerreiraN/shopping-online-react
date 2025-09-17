import { useContext } from 'react'
import { UsuarioContext } from '../Context/UsuarioContext'

export const Carrito = () => {

  const { user } = useContext(UsuarioContext)

  return (
    <>
      <ul>
        <li>{user.nombre}</li>
        <li>{user.tecnologia}</li>
        <li>{user.email}</li>
        <li>{user.redes}</li>
      </ul>
    </>
  )
}
