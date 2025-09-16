
export const UseForm = () => {
  
  const initalForm = {
    nombre: '',
    tecnologia: '',
    email: '',
    redes: ''
  }

  const [usuario, setUsuario] = useState(initalForm)
  const { nombre, tecnologia, email, redes } = usuario
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
  }

  return {

  }
}
