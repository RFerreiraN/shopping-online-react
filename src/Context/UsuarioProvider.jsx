import { UsuarioContext } from './UsuarioContext'

 const usuario = {
    nombre: 'Ricardo Ferreira',
    tecnologia: 'React',
    email: 'ricardo@ferreira.pt',
    redes: '@RFerreiran'
  }

export const UsuarioProvider = ({ children }) => {

  return (
    <UsuarioContext.Provider value={{ usuario  }}>
      {children}
    </UsuarioContext.Provider>
  )
}
