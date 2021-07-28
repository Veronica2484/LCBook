//install hooks from react
import { useState } from 'react'
import { toast } from 'react-toastify'
import AlgoliaPlaces from 'algolia-places-react'

//create a arrow function
const NewItem = () => {
  //define state
  const [values, setValues] = useState({
    bookTitle: '',
    author: '',
    city: '',
    status: '',
    price: '',
    image: '',
    from: '',
    to: '',
    quantity: '',
  })
  //variables from state
  const { bookTitle, author, city, status, price, image, from, to, quantity } =
    values

  const handleSubmit = (e) => {
    //
  }

  const handleImageChange = (e) => {}

  const handleChange = () => {}

  const bookForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="btn btn-outline-secondary btn-block m-2 text-left"></label>
      </div>
    </form>
  )
  return <div className="container-fluid h1 p-5 text-center">New Items</div>
}

//exporting this we can import and use it in another component
export default NewItem
