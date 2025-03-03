import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='navbar mb-2 shadow-lg bg-neutral text-neutral-content'>
      <div className='flex-none lg:hidden'>
        <label for='drawer-input' className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-6 h-6 stroke-current'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
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
            <div className='badge ml-2 badge-outline' v-text='count' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
