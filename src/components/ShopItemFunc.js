import React from 'react';
import PropTypes from 'prop-types';

function shopItemFunc({
  item: { brand, title, description, descriptionFull, price, currency },
}) {
  return (
    <div class="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div class="description">{descriptionFull}</div>
      <div class="highlight-window mobile">
        <div class="highlight-overlay" />
      </div>
      <div class="divider" />
      <div class="purchase-info">
        <div class="price">
          {currency}
          {price.toFixed(2)}
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}

shopItemFunc.propTypes = {
  item: PropTypes.string.isRequired,
}

export default shopItemFunc;
