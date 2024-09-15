import React from 'react';

function Header() {
  return (
    <header
      className="d-flex align-items-center justify-content-center text-white"
      style={{
        height: '40vh',
        background: 'rgba(0, 0, 0, 0.5) url(https://cdn.pixabay.com/photo/2020/03/25/21/05/pizza-4968645_1280.jpg) center/cover',
      }}
    >
      <div className="text-center p-3">
        <h1 className="display-3">¡Pizzería Mamma Mia!</h1>
        <p className="lead">¡Tenemos las mejores pizzas que podrías encontrar!</p>
        <hr className="my-4" style={{ borderColor: 'white', width: '50%' }} />
      </div>
    </header>
  );
}

export default Header;
