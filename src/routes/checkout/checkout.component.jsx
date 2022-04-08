import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './checkout.styles.scss'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext)
    
    return(
        <div>
            <h1>Checkout Page</h1>
            <div className='checkout-container'>
                <div className='checkout-header'>
                    <div className='header-blocker'>
                        <span>Product</span>
                    </div>
                    <div className='header-blocker'>
                        <span>Description</span>
                    </div>
                    <div className='header-blocker'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-blocker'>
                        <span>Price</span>
                    </div>
                    <div className='header-blocker'>
                        <span>Remove</span>
                    </div>
                </div>
                {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                <span className='total'>Total: {cartTotal}</span>
            </div>
        </div>
    )
}

export default Checkout