import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAll, selectProduct } from '../features/slices/productSlice'
function Home() {
  const product = useSelector(selectProduct)
  const dispatch = useDispatch()

  useEffect(() => {
    if (product.ids.length === 0) {
      dispatch(fetchAll())
    }
  }, [dispatch, product.ids])

  console.log('product', product)

  return <>This is home</>
}

export default Home
