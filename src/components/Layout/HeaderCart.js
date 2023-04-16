import React,{useContext, useEffect, useState} from 'react'
import CartContex from '../../store/cart-context';
import CartIcon from './CartButton';
import classes from './HeaderCart.module.css'


function HeaderCart(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContex);

  const { items } = cartCtx;

  const numberOfCartItems = cartCtx.items.reduce((acc, item) =>{
    return acc + item.amount;
  },0)
  const handleClick =()=>{
    props.setClosed(false)
  }
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={handleClick}>
        <span className={classes.icon}>
            <CartIcon/>
            
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCart