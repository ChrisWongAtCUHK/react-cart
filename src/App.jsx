import { useState } from 'react'
import { PRODUCTS } from './data/products'

function App() {
  // 這是核心：購物清單狀態
  const [cart, setCart] = useState([])

  // 加入購物車邏輯
  const addToCart = (product) => {
    setCart((currCart) => {
      const isItemsInCart = currCart.find((item) => item.id === product.id)
      if (isItemsInCart) {
        return currCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...currCart, { ...product, quantity: 1 }]
    })
  }

  // 修改數量邏輯 (+1 或 -1)
  const updateQuantity = (id, delta) => {
    setCart((currCart) =>
      currCart.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta
          return { ...item, quantity: newQty > 0 ? newQty : 1 }
        }
        return item
      }),
    )
  }

  // 移除商品
  const removeItem = (id) => {
    setCart((currCart) => currCart.filter((item) => item.id !== id))
  }

  // 計算總價
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  return (
    <div className='min-h-screen bg-base-200 p-4 lg:p-10'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* 左側：商品列表 */}
        <div className='lg:col-span-2'>
          <h2 className='text-2xl font-bold mb-6'>選購商品</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                className='card card-side bg-base-100 shadow-sm border border-base-300'
              >
                <figure className='bg-primary/10 w-24 flex items-center justify-center text-3xl'>
                  {p.icon}
                </figure>
                <div className='card-body p-4'>
                  <h3 className='card-title text-sm'>{p.name}</h3>
                  <p className='font-bold text-primary'>${p.price}</p>
                  <button
                    className='btn btn-primary btn-sm mt-2'
                    onClick={() => addToCart(p)}
                  >
                    加入
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右側：詳細購物清單 */}
        <div className='card bg-base-100 shadow-xl h-fit border-t-4 border-primary'>
          <div className='card-body p-6'>
            <h2 className='card-title flex justify-between'>
              購物清單
              <div className='badge badge-secondary'>{cart.length} 項</div>
            </h2>

            <div className='divider my-2'></div>

            {cart.length === 0 ? (
              <p className='text-center opacity-50 py-10'>清單是空的 🥺</p>
            ) : (
              <div className='space-y-4'>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className='flex justify-between items-center bg-base-200 p-2 rounded-lg'
                  >
                    <div>
                      <p className='font-bold text-sm'>{item.name}</p>
                      <p className='text-xs opacity-60'>
                        ${item.price} x {item.quantity}
                      </p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='join'>
                        <button
                          className='join-item btn btn-xs btn-square'
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <button className='join-item btn btn-xs px-2 no-animation'>
                          {item.quantity}
                        </button>
                        <button
                          className='join-item btn btn-xs btn-square'
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className='btn btn-ghost btn-xs text-error'
                        onClick={() => removeItem(item.id)}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}

                <div className='divider'></div>

                <div className='flex justify-between font-black text-xl px-2'>
                  <span>總計</span>
                  <span className='text-primary'>${totalPrice}</span>
                </div>

                <button className='btn btn-primary btn-block mt-4 shadow-lg shadow-primary/30'>
                  前往結帳
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
