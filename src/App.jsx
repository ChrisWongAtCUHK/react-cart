import { useState } from 'react'

function App() {
  const [cartCount, setCartCount] = useState(0)

  const products = [
    {
      id: 1,
      name: 'Bumblebee Headphone',
      price: 599,
      desc: '的高品質無線耳機，完美適配你的黃色主題。',
    },
    {
      id: 2,
      name: 'Tech Watch',
      price: 1299,
      desc: '智慧生活從手腕開始，支援多種運動模式。',
    },
    {
      id: 3,
      name: 'Retro Keyboard',
      price: 850,
      desc: '機械式手感，敲擊聲音清脆，辦公神器。',
    },
  ]

  return (
    <div className='min-h-screen bg-base-200'>
      {/* 導覽列 */}
      <div className='navbar bg-base-100 shadow-sm px-4 lg:px-20'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl font-bold text-primary'>
            React Cart 🛒
          </a>
        </div>
        <div className='flex-none'>
          <div className='dropdown dropdown-end'>
            <button className='btn btn-ghost btn-circle'>
              <div className='indicator'>
                <svg
                  xmlns='http://w3.org'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
                <span className='badge badge-sm badge-primary indicator-item'>
                  {cartCount}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 主內容區 */}
      <main className='p-10 max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold mb-8'>熱門商品</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {products.map((product) => (
            <div
              key={product.id}
              className='card bg-base-100 shadow-xl border border-base-300'
            >
              <figure className='px-10 pt-10'>
                <div className='w-full h-40 bg-primary/20 rounded-xl flex items-center justify-center text-4xl'>
                  🎁
                </div>
              </figure>
              <div className='card-body items-center text-center'>
                <h2 className='card-title text-secondary'>{product.name}</h2>
                <p className='text-sm opacity-70'>{product.desc}</p>
                <div className='text-2xl font-black my-2'>${product.price}</div>
                <div className='card-actions'>
                  <button
                    className='btn btn-primary'
                    onClick={() => setCartCount((prev) => prev + 1)}
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 重置按鈕 */}
        <div className='mt-10 text-center'>
          <button
            className='btn btn-outline btn-sm'
            onClick={() => setCartCount(0)}
          >
            清空購物車
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
