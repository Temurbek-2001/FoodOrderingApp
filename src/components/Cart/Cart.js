import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import React,{useContext} from 'react';
import CartContex from '../../store/cart-context';
import CartItem from '../Meals/CartItem';

const Cart = (props) => {
const cartCtx = useContext(CartContex)
const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
const hasItems = cartCtx.items.length > 0;
const onRemoveHandler=(id)=>{
cartCtx.removeItem(id);
}

const onAddHandler= (item) => {
  cartCtx.addItem({...item, amount: 1});
};
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={onRemoveHandler.bind(null, item.id)}
          onAdd={onAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
const onCloseHandler=()=>{
  props.setClosed(true);
}
  return (
    
    <Modal>
        
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onCloseHandler}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;