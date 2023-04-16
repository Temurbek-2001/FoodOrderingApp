import React,{Fragment} from 'react'
import styles from './Header.module.css';
import header from '../../assets/header.jpeg'
import HeaderCart from './HeaderCart';
function Header(props) {
  return (
    <Fragment>
        <header className={styles.header}>
            <h1>Tim's Meals</h1>
            <HeaderCart setClosed={props.setClosed}/>
        </header>
        <div className={styles["main-image"]}>
            <img src={header}/>
        </div>
    </Fragment>
    
  )
}

export default Header