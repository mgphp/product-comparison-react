import React from 'react';

const ProductItem = ({ product }) => {
  console.log(product);
  return (
    <li className="product" key={product.id}>
      <div className="product__header">
        <img className="product__image" src={`/img/${product.img}`} alt={product.name}/>
        <span className="product__name">{product.name}</span>
      </div>
      <div className="info">
        <ul className="info__list">
          <li className="info__item">
            <span className="info__title">Balance Transfer Rates</span>
            <div className="info__details">
              <span className="info__details-rates">{product.rates.balance.rate}% for up to {product.rates.balance.period} months</span>
              <span className="info__details-fee">({product.rates.balance.fee}% handling fee)</span>
            </div>
          </li>
          <li className="info__item">
            <span className="info__title">Money Transfer Rates</span>
            <div className="info__details">
              <span className="info__details-rates">{product.rates.money.rate}% for up to {product.rates.money.period} months</span>
              <span className="info__details-fee">({product.rates.money.fee}% handling fee)</span>
            </div>
          </li>
          <li className="info__item">
            <span className="info__title">Purchase Rates</span>
            <div className="info__details">
              <span className="info__details-rates">{product.rates.purchases.rate}% for up to {product.rates.purchases.period} months</span>
              <span className="info__details-fee">{product.rates.purchases.variable ? '(from account opening)' : ''}</span>
            </div>
          </li>
          <li className="info__item">
            <span className="info__title">Additional Info</span>
            <div className="info__details">
              <span className="info__details-rates">{product.info}</span>
            </div>
          </li>
        </ul>
        <div className="categories">
          <span className="categories__header">Categories</span>
          <ul>
            {product.categories.map((category, i) => <li key={i} className="categories__item">{category}</li>)}
          </ul>
          <a className="info__more-info" href={`/${product.slug}`}>More info</a>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;