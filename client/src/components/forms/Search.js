import react, { useState } from 'react'
import { DatePicker, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import moment from 'moment'
//hooks to access to the history
import { useHistory } from 'react-router-dom'

//destructure values from ant components
const { RangePicker } = DatePicker
const { Option } = Select

//create component
const Search = () => {
  //add states
  const [city, setCity] = useState('')
  //const [itemTitle, setItemTitle] = useState('')
  const [date, setDate] = useState('')

  //add useHistory to a variable
  const history = useHistory()

  const handleSubmit = () => {
    //history.push(`/search-result?location=${location}&date=${date}&itemTitle=${itemTitle}`)
    history.push(`/search-result?city=${city}&date=${date}`)
  }

  return (
    <div className="d-flex pb-4">
      <div className="w-100">
        <Select
          onChange={(value) => setCity(value)}
          className="w-100"
          size="large"
          placeholder="City"
        >
          <Option value="Dublin">Dublin</Option>
          <Option value="Cork">Cork</Option>
          <Option value="Galway">Galway</Option>
          <Option value="Waterford">Waterford</Option>
        </Select>
      </div>

      {/* <input
          type="text"
          name="ItemTitle"
          onChange={(itemTitle) => setItemTitle(itemTitle)}
          placeholder="ItemTitle"
          className="form-control m-2"
          value={itemTitle}
        ></input> */}

      <RangePicker
        onChange={(value, dateString) => setDate(dateString)}
        disabledDate={(current) =>
          current && current.valueOf() < moment().subtract(1, 'days')
        }
        className="w-100"
      />

      <SearchOutlined
        onClick={handleSubmit}
        className="btn btn-primary p-3 btn-square"
      />
    </div>
  )
}

export default Search
