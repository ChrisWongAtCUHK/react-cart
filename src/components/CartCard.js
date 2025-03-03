import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCart, removeCart } from '../features/slices/cartSlice'
import { toCurrency } from '../utils'

function CartCard({ cartProduct }) {
  const dispatch = useDispatch()

  return (
    <div className='card md:card-side bordered'>
      <figure className='p-8'>
        <img
          src={cartProduct.image}
          alt='Cart'
          className='object-contain w-full h-48'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          <Link className='link link-hover' to={`/product/${cartProduct.id}`}>
            {cartProduct.title}
          </Link>
        </h2>
        <p>{toCurrency(cartProduct.cost)}</p>
        <div className='card-actions'>
          <div className='btn-group'>
            <button
              className='btn btn-primary'
              onClick={() =>
                dispatch(removeCart({ productId: cartProduct.id }))
              }
            >
              -
            </button>
            <button className='btn btn-ghost no-animation'>
              {cartProduct.quantity}
            </button>
            <button
              className='btn btn-primary'
              onClick={() => dispatch(addCart({ productId: cartProduct.id }))}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCard
