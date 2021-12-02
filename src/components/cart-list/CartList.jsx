import CartListItem from "../cart-list-item/CartListItem";

const CartList = ({
  cartList,
  addProductInCart,
  removeProductFromCart,
  deletePurchasedProduct,
}) => {
  let sum = 0;
  let discount = 0;

  return (
    <div>
      <ul className='cart-list'>
        {cartList.map((cart) => {
          const { id } = cart;
          sum += cart.totalPrice;

          if (cart.name === "papaya" && cart.count > 2) {
            if (cart.count % 3 === 0) {
              discount = (cart.count / 3) * 5;
            } else if (cart.count % 3 === 1) {
              discount = ((cart.count - 1) / 3) * 5;
            } else if (cart.count % 3 === 2) {
              discount = ((cart.count - 2) / 3) * 5;
            }
          }
          if (cart.count < 3) {
            discount = 0;
          }

          return (
            <div>
              <li key={id}>
                <CartListItem
                  cart={cart}
                  addProductInCart={addProductInCart}
                  removeProductFromCart={removeProductFromCart}
                  deletePurchasedProduct={deletePurchasedProduct}
                  discount={discount}
                />
              </li>
            </div>
          );
        })}
      </ul>

      <div>
        <p className='cart-list-item-sum'>{`Сумма покупки: ${
          sum - discount
        }$ `}</p>
      </div>
    </div>
  );
};

export default CartList;
