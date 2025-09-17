import { UsuarioContext } from './UsuarioContext';
import { useState } from 'react';

export const UsuarioProvider = ({ children }) => {
  const [user, setUser] = useState({})
  return (
    <UsuarioContext.Provider value={{ user, setUser }}>
      {children}
    </UsuarioContext.Provider>
  )
}
