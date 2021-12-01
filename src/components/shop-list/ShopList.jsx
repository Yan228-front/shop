import ShopListItem from "../shop-list-item/ShopListItem";

const ShopList = ({ products, addProductInCart }) => {
  return (
    <section className='shop-list'>
      <ul className='shop-list__list'>
        {products.map((product) => {
          const { id } = product;

          return (
            <li
              key={id.toString()}
              className='shop-list__item'
              onClick={() => addProductInCart(id)}
            >
              <ShopListItem product={product} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ShopList;
