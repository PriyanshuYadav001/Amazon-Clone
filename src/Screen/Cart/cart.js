import React, { useEffect, useState } from 'react'
import './cart.css';
import { useDispatch, useSelector } from 'react-redux';
import image from '../../Images/fulfil.png';
import {removeFromCart} from './../../Components/Redux/Actions/actions';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=> state.cart.items);
  useEffect(()=>{
    setCartItem(cartItems);
  },[cartItems])

  let a=0 ;
  let cost = cartItem.map((item)=> {return a=a+item.price})

  const handleRemoveFromCart=(id)=>{
    toast.error("Item Removed From Cart",{
      position:"bottom-right"
    })
    dispatch(removeFromCart(id));
  }

  return (
    <div className="cart">
      <div className="topLeftCart">
        <div className="topLeftCartTitle">Shopping Cart</div>
        <div className="deselectAllCart">Deselect All Items</div>
        <div className="cartPriceTextDivider">Price</div>

        <div className="cartItemsDiv">
          {
            cartItems.map((item,idx)=>{
              return(
                <div className="cartItemBlock">
            <div className="cartItemLeftBlock">
              <div className="cartItemLeftBlockImage">
                <img src={item.imageUrl} className="cartItemLeftBlockImg" />
              </div>
              <div className="cartItemLeftBlockDetails">
                <div className="cartItemProductName">{item.name}</div>
                <div className="inStockCart">In Stock</div>
                <div className="elgFreeShp">Elligible for FREE Shipping</div>
                <div className="amazonFullFilledImage"><img src={image} className="fullfillImg" /></div>
                <div className="removeFromCart" onClick={()=>{handleRemoveFromCart(item.id)}}>Remove From Cart</div>
              </div>
            </div>

            <div className="cartItemRightBlock"> Rs {item.price}</div>
          </div>
              );
            })
          }
        </div>
      </div>
      <div className="topRightCart">
        <div className="subTotalTitle">Subtotal ({cartItem.length} items) : <span className='subTotalTitleSpan'>Rs {a}</span></div>
        <div className="giftAddto">
          <input type='checkbox'/>
          <div>This Order Contains a gift</div>
        </div>
        <div className="proceedToBuy">Proceed To Buy</div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Cart
