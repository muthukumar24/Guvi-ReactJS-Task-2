import React, { useState } from 'react';

// Product Datas
const ShoppingCart = () => {
  const [products, setProducts] = useState([
    { id: 1, 
      image:'./images/adidascoralsneaker.jpg',
      name: 'Adidas Training Shoes', 
      price: "$380.00", 
      inCart: false 
    },

    {
      id: 2,
      image: "./images/niketrainingsoe.jpg",
      name: "Nike Training Shoes",
      price:"$300.00",
      inCart: false
  },

  {
      id: 3,
      image: "./images/pumatrainingshoe.jpg",
      name: "Puma Training Shoes",
      price:"$250.00",
      inCart: false
  },

  {
      id: 4,
      image: "./images/nikeairwhitejordan1.jpg",
      name: "Nike White Air Jordan 1",
      price:"$340.00",
      inCart: false
  },

  {
      id: 5,
      image: "./images/nikeairsneaker.jpg",
      name: "Nike Air Sneakers",
      price:"$250.00",
      inCart: false
  },

  {
      id: 6,
      image: "./images/pumawhitesneaker.jpg",
      name: "Puma White Sneakers",
      price:"$280.00",
      inCart: false
  },

  {
      id: 7,
      image: "./images/adidassneaker.jpg",
      name: "Adidas White Sneakers",
      price:"$180.00",
      inCart: false
  },

  {
      id: 8,
      image: "./images/nikeairjordan1.jpg",
      name: "Nike Air Jordan 1",
      price:"$400.00",
      inCart: false
  }
  ]);

  // To update cart quantity
  const [cart, setCart] = useState([]);
  
  // Add to Cart Function
  const addToCart = (product) => {
    const updatedProducts = products.map(p => {
      if (p.id === product.id) {
        return { ...p, inCart: true };
      }
      return p;
    });
    setProducts(updatedProducts);
    setCart([...cart, product]);
  };

  // Remove from Cart Function
  const removeFromCart = (product) => {
    const updatedProducts = products.map(p => {
      if (p.id === product.id) {
        return { ...p, inCart: false };
      }
      return p;
    });
    setProducts(updatedProducts);
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navigation-bar">
            <div className="container">
                <a className="navbar-brand" href="#" id="company-name">JustShop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="nav-list-items">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Shop
                            </a>
                            <ul className="dropdown-menu" id="dropdown-list-items">
                                <li><a className="dropdown-item" href="#">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <button className="btn btn-outline d-flex justify-content-between align-items-center" id="cart-button"><i className="bi bi-cart-fill"></i> Cart <div id="cart-counter">{cart.length}</div></button>
                </div>
            </div>
        </nav>

      {/* Home Page */}
            <header className="bg-dark py-4" >
                <div className="container" id="homepage-area">
                    <h1 className="text-center text-white" id="header-text-one">👟Shop in Style👟</h1>
                    <p className="text-center text-white-50" id="header-text-two">Make Your Choice</p>
                </div>
            </header>


      {/* Card Area */}
            <div className="container px-4 mt-5 mb-5">
                <div className="row">
                    {/* Used Map Method to generate product card */}
                    {products.map(product => (
                        <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3" key={product.id}>
                            <div className="card mb-3" id="card-area">
                                {/* Product Image */}
                                <img className="card-img-top" src={product.image} />
                                    <div className="card-body">
                                          {/* Product Name */}
                                          <h4 className="text-center" id="headertext-two">{product.name}</h4>
                                          {/* Product Rattings */}
                                          <div className="d-flex justify-content-center mb-2">
                                              <i className="bi bi-star-fill"></i>
                                              <i className="bi bi-star-fill"></i>
                                              <i className="bi bi-star-fill"></i>
                                              <i className="bi bi-star-fill"></i>
                                              <i className="bi bi-star-half"></i>
                                          </div>
                                          {/* Product Price */}
                                          <h5 className="text-center">{product.price}</h5>
                                          <div className="d-grid d-flex justify-content-center">
                                          {/* Cart Buttons */}
                                          {/* Add to Cart button or Remove from Cart button will be enabled Depends on the "inCart" status */}
                                          {/* If inCart status is in true status then Remove from Cart button will be enabled */}
                                          {/* If inCart status is in false status then Add to Cart button will be enabled */}
                                          {product.inCart ? (
                                            <button className="btn btn-outline-dark mt-4 text-center" onClick={() => removeFromCart(product)}>Remove from Cart</button>
                                            ) : (
                                            <button className="btn btn-outline-dark mt-4 text-center" onClick={() => addToCart(product)}>Add to Cart</button>
                                          )}
                                          </div>
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

      {/* Footer */}
            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright © Your Website</p>
                </div>
            </footer>
    </div>
  );
};

export default ShoppingCart;
