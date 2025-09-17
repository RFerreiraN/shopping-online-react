import { useContext } from 'react'
import { UsuarioContext } from '../Context/UsuarioContext'

export const Home = () => {

  const { user } = useContext(UsuarioContext)
  return (
    <>
      <table className="table table-warning">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Tecnología</th>
            <th scope="col">Email</th>
            <th scope="col">Redes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{user.nombre}</th>
            <td>{user.tecnologia}</td>
            <td>{user.email}</td>
            <td>{user.redes}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
