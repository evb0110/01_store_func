import React from 'react';
import PropTypes from 'prop-types';

function ShopItemFunc({
  item: { brand, title, description, descriptionFull, price, currency },
}) {
  return (
    <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="description">{descriptionFull}</div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay" />
      </div>
      <div className="divider" />
      <div className="purchase-info">
        <div className="price">
          {currency}
          {price.toFixed(2)}
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}

ShopItemFunc.propTypes = {
  item: PropTypes.exact({
    brand: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
  }).isRequired,
};

export default ShopItemFunc;
