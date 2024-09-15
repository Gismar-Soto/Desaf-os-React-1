import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faShoppingCart, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

function CardPizza({ name, price, ingridients, imagen }) {
  return (
    <div className="card shadow-sm rounded" style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #e0e0e0' }}>
      <img
        src={imagen}
        className="card-img-top"
        alt={name}
        style={{ height: '220px', objectFit: 'cover', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
      />
      <div className="card-body text-center" style={{ padding: '20px' }}>
        <h5 className="card-title" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{name}</h5>
        <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '5px' }}>
          <FontAwesomeIcon icon={faPizzaSlice} className="me-2" style={{ color: 'orange', fontSize: '1.2rem' }} />
          <strong>Ingredientes:</strong>
        </p>
        <ul className="list-unstyled text-muted d-flex justify-content-center" style={{ fontSize: '0.85rem', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
          {ingridients.map((e, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
              {e}
            </li>
          ))}
        </ul>
        <p className="card-text text-dark font-weight-bold" style={{ fontSize: '1.1rem' }}>Precio: ${price.toLocaleString("es")}</p>
        <div className="d-flex justify-content-around mt-3">
          <a href="#" className="btn btn-outline-secondary" style={{ borderRadius: '30px' }}>
            Ver Más <FontAwesomeIcon icon={faEye} />
          </a>
          <a href="#" className="btn btn-dark" style={{ borderRadius: '30px' }}>
            Añadir <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
