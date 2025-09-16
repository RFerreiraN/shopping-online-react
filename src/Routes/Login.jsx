import { useState } from 'react'
import { UseForm } from '../Hooks/UseForm'

export const Login = () => {

  const initalForm = {
    nombre: '',
    tecnologia: '',
    email: '',
    redes: ''
  }

  const { usuario, handleInput, onsubmitForm } = UseForm(initalForm)
  const { nombre, tecnologia, email, redes } = usuario

  return (
    <form className='container' onSubmit={onsubmitForm}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={nombre}
          onChange={handleInput}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tecnologia" className="form-label">Tecnología</label>
        <input
          type="text"
          className="form-control"
          name="tecnologia"
          value={tecnologia}
          onChange={handleInput}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="text"
          className="form-control"
          name="email"
          value={email}
          onChange={handleInput}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="redes" className="form-label">Redes</label>
        <input
          type="text"
          className="form-control"
          name="redes"
          value={redes}
          onChange={handleInput}
        />
      </div>


      <button type="submit" className="btn btn-warning">Registrar Usuario</button>
    </form>
  )
}
