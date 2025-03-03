import { Link } from 'react-router-dom'
import { toCurrency } from '../utils'

function ProductCard(props) {
  return (
    <div className='card bordered '>
      <figure className='px-8 pt-10'>
        <img
          src={props.product.image}
          alt='Product'
          className='object-contain w-full h-64'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          <Link className='link link-hover' to='/product'>
            {props.product.title}
          </Link>
        </h2>
        <p>{toCurrency(props.product.price)}</p>
        <div className='justify-end card-actions'>
          <button className='btn btn-primary'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
