import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadCart, selectCart } from '../features/slices/cartSlice'
import Search from './Search'

function Nav() {
  const cart = useSelector(selectCart)
  const dispatch = useDispatch()
  const count = Object.keys(cart.contents).reduce((acc, id) => {
    return acc + cart.contents[id].quantity
  }, 0)

  useEffect(() => {
    dispatch(loadCart())
  }, [dispatch])

  return (
    <nav className='navbar mb-2 shadow-lg bg-neutral text-neutral-content fixed w-full top-0 left-0'>
      <div className='flex-none lg:hidden'>
        <label htmlFor='drawer-input' className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-6 h-6 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </label>
      </div>
      <div className='flex-none px-2 mx-2'>
        <span className='text-lg font-bold'>Shopping Cart</span>
      </div>
      <div className='flex-1 px-2 mx-2'>
        <div className='items-stretch hidden lg:flex'>
          <Link className='btn btn-ghost btn-sm rounded-btn' to='/'>
            Home
          </Link>
          <Link className='btn btn-ghost btn-sm rounded-btn' to='/cart'>
            Cart
            <div className='badge ml-2 badge-outline'>{count}</div>
          </Link>
        </div>
      </div>
      <div className='flex-1 lg:flex-none'>
        <Search />
      </div>
    </nav>
  )
}

export default Nav
