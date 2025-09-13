import { useEffect, useState } from 'react'

export const FetchProductos = () => {

  const url = 'https://fakestoreapi.com/products';
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const fetchProductos = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json()
      setProductos(data)
      console.log(data)
    } catch (error) {
      console.log('Error: ', error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchProductos()
  }, [])


  return (
    <>
      {isLoading
        ? <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        : <div className="container mt-4">
          <div className="row">
            {productos.map(item => (
              <div key={item.id} className="col-md-3 mb-4">
                <div className="card h-100" style={{ width: "18rem" }}>
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    style={{ width: "100px", margin: "0 auto", paddingTop: "10px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-warning mt-auto">Go somewhere</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  )


}
