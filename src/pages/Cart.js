import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCart } from '../features/slices/cartSlice'
import { fetchAll, selectProduct } from '../features/slices/productSlice'
import CartCard from '../components/CartCard'
import { toCurrency } from '../utils'

function Cart() {
  const dispatch = useDispatch()
  const contents = useSelector(selectCart).contents
  const items = useSelector(selectProduct).items
  const [formattedCart, setFormattedCart] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchAll())
    } else {
      setFormattedCart(() =>
        Object.keys(contents).map((productId) => {
          const purchase = contents[productId]

          return {
            id: purchase.productId,
            image: items[purchase.productId].image,
            title: items[purchase.productId].title,
            quantity: purchase.quantity,
            cost: purchase.quantity * items[purchase.productId].price,
          }
        })
      )

      setTotal(() =>
        Object.keys(contents).reduce((acc, id) => {
          return acc + items[id].price * contents[id].quantity
        }, 0)
      )
    }
  }, [items, contents, dispatch])

  if (items.length === 0) {
    return <h1> Loading </h1>
  }

  return (
    <div className='p-4 max-w-4xl mx-auto'>
      {formattedCart.length === 0 ? (
        <div>
          <h1 className='text-xl'>Cart is empty.</h1>
        </div>
      ) : (
        <div className='space-y-4'>
          {formattedCart.map((cartProduct, index) => (
            <CartCard key={index} cartProduct={cartProduct} />
          ))}
          <div className='text-right text-2xl md:text-4xl'>
            Total: {toCurrency(total)}
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
