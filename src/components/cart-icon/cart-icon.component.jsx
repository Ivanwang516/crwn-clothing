import { ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.scss'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)
    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    const { cartCount } = useContext(CartContext)
    return (
        <div className='cart-icon-container' onClick={toogleIsCartOpen}>
        <ShoppingBag className='shopping-icon'/>
        <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon