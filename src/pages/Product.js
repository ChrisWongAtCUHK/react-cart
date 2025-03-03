import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectProduct } from "../features/slices/productSlice"
import { toCurrency } from "../utils"

function Product() {
  const {id} = useParams()
  const items = useSelector(selectProduct).items
  const product = items[id]
  
  return (
    <div className="p-4 max-w-4xl mx-auto">
    <div className="card lg:card-side bordered">
      <figure className="px-10 pt-10">
        <img
          src={product.image}
          alt="Product"
          className="object-contain w-full h-64"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <p className="mt-4 text-lg">
          { toCurrency(product.price) }
        </p>
        <div className="card-actions">
          <button className="btn btn-primary" >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Product