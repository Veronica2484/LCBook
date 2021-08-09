import React, { useState } from 'react'
//hooks to access to the history
//import { useHistory } from 'react-router-dom'

const SearchBox = ({ history }) => {
  //set the state
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    //check if the keyword if founds
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="keyword"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search book title..."
        className="search-box text-center"
      ></input>

      <button
        type="submit"
        variant="outline-success"
        className="btn search-button"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBox
