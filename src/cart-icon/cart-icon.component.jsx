import { ReactComponent as CartIcon} from '../assets/shopping-bag.svg'

import { useContext } from 'react'
import { CartContext } from '../contexts/cart.context'

import './cart-icon.styles.scss'

const ShoppingIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)
    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return (
        <div className='cart-icon-container' onClick={toogleIsCartOpen}>
        <CartIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
        </div>
    )
}

export default ShoppingIcon