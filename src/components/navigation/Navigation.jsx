import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className='navigation'>
        <li className='navigation__item'>
          <NavLink to='/'>Главная</NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink to='cart-list'>Корзина</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
