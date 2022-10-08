import { useState } from "react";
import { data } from './data';
import './App.css';

function App() {
  const [products, setProducts] = useState(data);

  const removeProduct = (id) => {
    let newProducts = products.filter(product => product.id !== id);
    setProducts(newProducts)
  }
  return(
    <div>
      <div className="intro">
        <h1>Your Basket</h1>
      </div>

      {products.map((element => {
        const { id, product, image, price} = element;

        return (
          <div className="container row" key={id}>
            <div className="col">
              <img src={ image } width="300px" alt="Jewellery"/>
            </div>

            <div className="col">
              <h2>{ product }</h2>
              <p>Product number : { id }</p>
              <p className="price">{ price }</p>
              <div className="buttons">
                <button>View</button>
                <button onClick={() => removeProduct(id)}>Remove</button>
              </div>
            </div>
          </div>
        )
      }))}

      <div className="intro">
        <button onClick={() => setProducts([])}>Delete All</button>
      </div>
    </div>
  )
}

export default App;
