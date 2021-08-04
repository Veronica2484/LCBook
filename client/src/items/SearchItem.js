import { useState, useEffect } from 'react'
import queryString from 'query-string'
import { Link } from 'react-router-dom'
import Search from '../components/forms/Search'
import { searchListings } from '../actions/item'

const SearchItem = () => {
  //as an user could change its parameters to search the state can change
  const [searchCity, setSearchCity] = useState('')
  const [searchDate, setSearchDate] = useState('')
  //const [searchItemTitle, setSearchItemTitle] = useState('')

  //the search query will retrieve all the items that match with the parameters
  const [items, setItems] = useState([])

  //use the search parameters from URL to send search query to endpoint
  useEffect(() => {
    const { city, date } = queryString.parse(window.location.search)
    //console.table({ location, date })

    searchListings({ city, date }).then((res) => {
      console.log('Items found', res.data)
      setItems(res.data)
    })
  }, [window.location.search])

  return (
    <div className="container">
      <div className="row">{JSON.stringify(items, null, 4)}</div>
    </div>
  )
}

export default SearchItem
