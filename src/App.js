
import './App.css';
import data from './data';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
              Bachalor
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign in</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {
              data.Products.map(product =>(
                <div key={product.id} className="card">
                <a href={`/product/${product.id}` }> 
                  <img className="medium" src={product.image} alt={product.name}></img>
                </a>
                <div className="card-body">
                  <a href="product.html">
                    <h2>{product.name}</h2>
                  </a>
                  <div className="rating">
                    <span><i className="fa fa-star "></i> </span>
                    <span><i className="fa fa-star "></i> </span>
                    <span><i className="fa fa-star "></i> </span> 
                    <span><i className="fa fa-star "></i> </span>
                    <span><i className="fa fa-star "></i> </span>
                  </div>
                  <div className="price">${product.price}</div>
                </div>
              </div> 
              ))
            }
          </div>
        </div>
      </main>
      <footer className="row center">
            All right reserved
      </footer>
    </div>
  );
}

export default App;
