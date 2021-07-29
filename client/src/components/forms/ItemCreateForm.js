//install hooks from react

//import AlgoliaPlaces from 'algolia-places-react'
import { DatePicker, Select } from 'antd'
import moment from 'moment'

//distruct a Select
const { Option } = Select

//create a arrow function
const ItemCreateForm = (props) => {
  const { values, setValues, handleChange, handleImageChange, handleSubmit } =
    props

  const { itemTitle, author, price } = values

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="btn btn-outline-secondary btn-block m-2 text-left">
          Image
          <input
            type="file"
            name="itemImage"
            onChange={handleImageChange}
            accept="*/"
            hidden
          ></input>
        </label>

        <input
          type="text"
          name="itemTitle"
          onChange={handleChange}
          placeholder="Item Title"
          className="form-control m-2"
          value={itemTitle}
        ></input>

        <input
          type="text"
          name="author"
          onChange={handleChange}
          placeholder="Author"
          className="form-control m-2"
          value={author}
        ></input>

        <Select
          //defaultValue="Dublin"
          style={{ width: 120 }}
          onChange={(value) => setValues({ ...values, city: value })}
          className="w-100 m-2"
          size="large"
          placeholder="City"
        >
          <Option value="Dublin">Dublin</Option>
          <Option value="Cork">Cork</Option>
          <Option value="Galway">Galway</Option>
          <Option value="Waterford">Waterford</Option>
        </Select>

        <Select
          style={{ width: 120 }}
          onChange={(value) => setValues({ ...values, status: value })}
          className="w-100 m-2"
          size="large"
          placeholder="Status"
        >
          <Option value="Sell">Sell</Option>
          <Option value="Exchange">Exchange</Option>
        </Select>

        <input
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="Price"
          className="form-control m-2"
          value={price}
        ></input>

        <Select
          onChange={(value) => setValues({ ...values, quantity: value })}
          className="w-100 m-2"
          size="middle"
          placeholder="Quantity"
        >
          <Option key={1}>{1}</Option>
          <Option key={2}>{2}</Option>
          <Option key={3}>{3}</Option>
          <Option key={4}>{4}</Option>
        </Select>
      </div>

      <DatePicker
        placeholder="From date"
        className="form-control m-2"
        onChange={(date, dateString) =>
          setValues({ ...values, from: dateString })
        }
        disabledDate={(current) =>
          current && current.valueOf() < moment().subtract(1, 'days')
        }
      />

      <DatePicker
        placeholder="To date"
        className="form-control m-2"
        onChange={(date, dateString) =>
          setValues({ ...values, to: dateString })
        }
        disabledDate={(current) =>
          current && current.valueOf() < moment().subtract(1, 'days')
        }
      />

      <button className="btn btn-outline-primary m-2">Add</button>
    </form>
  )
}

//exporting this we can import and use it in another component
export default ItemCreateForm
