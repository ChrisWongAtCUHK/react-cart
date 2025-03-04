function CartCardSkeleton() {
  return (
    <div className='card md:card-side bordered animate-pulse'>
      <div className='p-8 md:w-64'>
        <div className='bg-gray-500 rounded h-48' />
      </div>
      <div className='card-body'>
        <div className='space-y-2'>
          <div className='h-4 bg-gray-500 rounded' />
          <div className='h-4 bg-gray-500 rounded' />
          <div className='h-4 bg-gray-500 rounded w-5/6' />
          <div className='h-4 bg-gray-500 rounded w-1/4' />
        </div>
      </div>
    </div>
  )
}

export default CartCardSkeleton
