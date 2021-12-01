const ShopListItem = ({ product }) => {
  const { name, price, url } = product;
  return (
    <div className='shop-list-item'>
      <div className='shop-list-item__header'>
        <div className='shop-list-item__image'>
          <img
            src={url}
            alt='Картинка продукта'
            className='shop-list-item__name'
          />
        </div>
        <h3 className='shop-list-item__content'>{name}</h3>
      </div>
      <div className='shop-list-item__description'>
        <span className='shop-list-item__price'>Цена: {`${price}$`}</span>
      </div>
      <button className='button'>Купить</button>
    </div>
  );
};

export default ShopListItem;
