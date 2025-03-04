import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectProduct } from '../features/slices/productSlice'

function Search() {
  const items = useSelector(selectProduct).items
  const inputRef = useRef(null)
  const [searchResults, setSearchResults] = useState([])

  function handleChange(e) {
    const value = e.target.value
    if (!value || value.length < 2) {
      setSearchResults(() => [])
    } else {
      setSearchResults(() =>
        items.filter((item) =>
          item.title.toLowerCase().includes(value.toLowerCase())
        )
      )
    }
  }

  function clearSearchResults() {
    setSearchResults(() => [])
    inputRef.current.value = ''
  }

  return (
    <div className='dropdown dropdown-end'>
      <div className='form-control'>
        <input
          type='text'
          placeholder='Search...'
          className='input input-ghost'
          onChange={handleChange}
          ref={inputRef}
        />
      </div>
      {searchResults.length === 0 ? null : (
        <ul
          className='shadow menu dropdown-content bg-base-100 rounded-box w-64 text-base-content overflow-y-scroll z-10'
          style={{ maxHeight: '50vh' }}
        >
          {searchResults.map((product) => {
            return (
              <li key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  onClick={clearSearchResults}
                >
                  {product.title}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Search
