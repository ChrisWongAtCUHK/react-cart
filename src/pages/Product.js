import { useParams } from "react-router-dom"
function Product() {
  const {id} = useParams()
  return (
    <>
      This is product {id}
    </>
  )
}

export default Product