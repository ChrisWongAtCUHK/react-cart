import { Link } from 'react-router-dom'
import { toCurrency } from '../utils'
import { useDispatch } from 'react-redux'
import { addCart } from '../features/slices/cartSlice'

function ProductCard(props) {
  const dispatch = useDispatch()

  return (
    <div className='card border static'>
      <figure className='px-8 pt-10'>
        <img
          src={props.product.image}
          alt='Product'
          className='object-contain w-full h-64'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          <Link className='link link-hover' to={`/product/${props.product.id}`}>
            {props.product.title}
          </Link>
        </h2>
        <p>{toCurrency(props.product.price)}</p>
        <div className='justify-end card-actions'>
          <button className='btn btn-primary' onClick={() => dispatch(addCart({ productId: props.product.id}))}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
