import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faShoppingCart, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

function CardPizza({ name, price, ingridients, imagen }) {
  return (
    <div className="card pizza-card shadow-sm rounded">
      <img
        src={imagen}
        className="card-img-top pizza-img"
        alt={name}
      />
      <div className="card-body text-center pizza-body">
        <h5 className="card-title pizza-title">{name}</h5>
        <p className="text-muted pizza-ingredients-label">
          <FontAwesomeIcon icon={faPizzaSlice} className="me-2 pizza-icon" />
          <strong>Ingredientes:</strong>
        </p>
        <ul className="list-unstyled text-muted pizza-ingredients-list">
          {ingridients.map((e, index) => (
            <li key={index} className="pizza-ingredient-item">
              {e}
            </li>
          ))}
        </ul>
        <p className="card-text pizza-price">Precio: ${price.toLocaleString("es")}</p>
        <div className="d-flex justify-content-around mt-3">
          <a href="#" className="btn btn-outline-secondary pizza-btn-outline">
            Ver Más <FontAwesomeIcon icon={faEye} />
          </a>
          <a href="#" className="btn btn-dark pizza-btn-dark">
            Añadir <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
