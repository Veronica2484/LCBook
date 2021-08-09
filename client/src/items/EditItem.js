import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { DatePicker, Select } from 'antd'
import { read, updateItem } from '../actions/item'
import { useSelector } from 'react-redux'
import ItemEditForm from '../components/forms/ItemEditForm'

//distruct a Select
const { Option } = Select

const EditItem = ({ match }) => {
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
    from: '',
    to: '',
    quantity: '',
  })
  const [image, setImage] = useState('')

  const [preview, setPreview] = useState(
    'https://via.placeholder.com/100x100.png?text=PREVIEW'
  )

  //destructured variables from state
  const { itemTitle, author, city, status, price, from, to, quantity } = values

  useEffect(() => {
    //console.log(match.params.itemId)
    loadSellerItem()
  }, [])

  const loadSellerItem = async () => {
    //it will make a request using read fc
    let res = await read(match.params.itemId)
    //console.log(res)
    setValues({ ...values, ...res.data })
    setPreview(`${process.env.REACT_APP_API}/item/image/${res.data._id}`)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

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

    try {
      let res = await updateItem(token, itemData, match.params.itemId)
      console.log('Item update', res)
      toast.success(`${res.data.itemTitle} is updated`)
    } catch (err) {
      console.log(err)
      toast.error(err.response.data.err)
    }
  }

  const handleImageChange = (e) => {
    //console.log(e.target.files[0])
    //it will set the image in the state and will show the previous image
    setPreview(URL.createObjectURL(e.target.files[0]))
    setImage(e.target.files[0])
  }

  //pupulate the state
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="container-fluid services p-5 text-center">
        <h2>Edit Item</h2>
      </div>
      <div className="contaneier-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            <ItemEditForm
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

export default EditItem
