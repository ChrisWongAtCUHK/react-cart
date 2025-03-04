import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAll, selectProduct } from '../features/slices/productSlice'
import ProductCard from '../components/ProductCard'
import ProductCardSkeleton from '../components/ProductCardSkeleton'

function Home() {
  const product = useSelector(selectProduct)
  const dispatch = useDispatch()

  useEffect(() => {
    if (product.ids.length === 0) {
      dispatch(fetchAll())
    }
  }, [dispatch, product.ids])

  if(product.items.length === 0) {
    return <ProductCardSkeleton />
  }
  return (
    <div className='p-4 max-w-7xl mx-auto'>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {product.items.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

export default Home
