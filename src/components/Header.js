import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';

const showOrders = (props) => {
  let sum = 0
  props.orders.forEach(el => (sum += Number.parseFloat(el.price)))
  return (
    <div>
      {
        props.orders.map(el => (
          <Order key={el.id} item={el} onDelete={props.onDelete}/>
        ))
      }
      <p className='sum'>Сумма: {sum.toFixed(2)}$</p>
    </div>
  )
}
const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Корзина пуста</h2>
    </div>
  )
}

export default function Header(props) {
  let [openCart, setOpenCart] = useState(false);
  return (
    <header>
      <div>

        <span className='logo'>House staff</span>

        <ul className='nav'>
          <li>О нас</li>
          <li>Кабинет</li>
          <li>Контакты</li>
        </ul>

        <FaShoppingCart onClick={() => setOpenCart(openCart = !openCart)}
          className={`shop-cart-button ${openCart && 'active'}`} />

        {openCart && (
          <div className='shop-cart'>
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>

      <div className='presentation'></div>
    </header>
  )
}
