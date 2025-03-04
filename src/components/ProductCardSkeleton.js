function ProductCardSkeleton() {
  return (
    <div className='card bordered animate-pulse'>
      <div className='px-8 pt-10'>
        <div className='h-64 bg-gray-500 rounded' />
      </div>
      <div className='card-body'>
        <div className='space-y-2'>
          <div className='h-4 bg-gray-500 rounded' />
          <div className='h-4 bg-gray-500 rounded w-5/6' />
          <div className='h-4 bg-gray-500 rounded w-1/4' />
        </div>
      </div>
    </div>
  )
}

export default ProductCardSkeleton
