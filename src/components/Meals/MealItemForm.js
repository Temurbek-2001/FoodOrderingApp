import React,{useRef, useState} from 'react'
import Input from '../UI/Input'
import classes from './MealItemForm.module.css'
function MealItemForm(props) {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid]=useState(true)
  const submitHandler=(e)=>{
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;//it always returns a string 
    //thats why down here I am ading + in front of it to make it a number
    const enteredAmountNumber = +enteredAmount
    if (enteredAmount.trim()===0 || enteredAmount < 0 || enteredAmount > 5){
      setAmountIsValid(false)
      return;
    }
    props.onAddToCart(enteredAmountNumber); 
    //Above I am using onporps function to forwad the number using the 
    //onAddToCart function which is created and named by me.
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input  ref={amountInputRef} label="Amount" input={{
           
            id:'amount_'+ props.id,
            type:'number',
            min:'1',
            max:'5',
            defaultValue:'1',
            step:'1'
        }}/>
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid number (1-5)</p>}
    </form>
  )
}

export default MealItemForm