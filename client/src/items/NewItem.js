//install hooks from react
import { useState } from 'react'
import { toast } from 'react-toastify'
import { DatePicker, Select } from 'antd'
import { createItem } from '../actions/item'
import { useSelector } from 'react-redux'
import ItemCreateForm from '../components/forms/ItemCreateForm'

//distruct a Select
const { Option } = Select

//create a arrow function
const NewItem = () => {
  //add redux
  const { auth } = useSelector((state) => ({ ...state }))
  const { token } = auth
  //define state
  const [values, setValues] = useState({
    itemTitle: '',
    author: '',
    city: '',
    status: '',
    price: '',
    image: '',
    from: '',
    to: '',
    quantity: '',
  })
  const [preview, setPreview] = useState(
    'https://via.placeholder.com/100x100.png?text=PREVIEW'
  )
  //variables from state
  const { itemTitle, author, city, status, price, image, from, to, quantity } =
    values

  //do a request to the backend
  const handleSubmit = async (e) => {
    e.preventDefault()
    //console.log(values)
    //validation for form fields
    validate(values)

    //instance Form Data
    let itemData = new FormData()
    //add the data
    itemData.append('itemTitle', itemTitle)
    itemData.append('author', author)
    itemData.append('city', city)
    itemData.append('status', status)
    itemData.append('price', price)
    //send the image as binary data
    image && itemData.append('image', image)
    itemData.append('from', from)
    itemData.append('to', to)
    itemData.append('quantity', quantity)

    console.log([...itemData])
    try {
      //put the createItem fc in a variable
      let res = await createItem(token, itemData)
      console.log('Created item res', res)
      toast.success('New item has been added')
      //empty the fields after 2 sec, reload
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (err) {
      //print out in the console and send a toast message if there was an error saving the data in the cloud storage(create fc in the controller)
      console.log(err)
      // toast.error(err.response.data)
    }
  }

  //Validation of the Item register fields

  const validate = (values) => {
    let errors = {}
    if (!values.itemTitle) {
      toast('Please fill the item title.')
    } else if (!values.author) {
      toast('Please fill author')
    } else if (!values.city) {
      toast('Please fill city')
    } else if (!values.status) {
      toast('Please fill status')
    } else if (!values.price) {
      toast('Please fill price')
    } else if (!values.quantity) {
      toast('Please fill quantity')
    } else if (!values.from) {
      toast('Please fill from date')
    } else if (!values.to) {
      toast('Please fill to date')
    }
    return errors
  }

  const handleImageChange = (e) => {
    //console.log(e.target.files[0])
    //it will set the image in the state and will show the preview image
    setPreview(URL.createObjectURL(e.target.files[0]))
    setValues({ ...values, image: e.target.files[0] })
  }

  //pupulate all the user input in the state
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="container-fluid services p-5 text-center">
        <h2>Add New Item</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            <ItemCreateForm
              values={values}
              setValues={setValues}
              handleChange={handleChange}
              handleImageChange={handleImageChange}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="col-md-2">
            <img
              src={preview}
              alt="preview_image"
              className="img img-fluid-preview m-2"
            />
            {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
          </div>
        </div>
      </div>
    </>
  )
}

//exporting this we can import and use it in another component
export default NewItem
