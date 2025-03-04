import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAll, selectProduct } from '../features/slices/productSlice'
import { addCart } from '../features/slices/cartSlice'
import ProductCardSkeleton from '../components/ProductCardSkeleton'
import { toCurrency } from '../utils'

function Product() {
  const { id } = useParams()
  const items = useSelector(selectProduct).items
  const dispatch = useDispatch()

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchAll())
    }
  }, [items, dispatch])

  if (items.length === 0) {
    return <ProductCardSkeleton />
  }

  return (
    <div className='p-4 max-w-4xl mx-auto'>
      <div className='card lg:card-side bordered'>
        <figure className='px-10 pt-10'>
          <img
            src={items[id].image}
            alt='Product'
            className='object-contain w-full h-64'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{items[id].title}</h2>
          <p>{items[id].description}</p>
          <p className='mt-4 text-lg'>{toCurrency(items[id].price)}</p>
          <div className='card-actions'>
            <button className='btn btn-primary' onClick={() => dispatch(addCart({productId: id}))}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
