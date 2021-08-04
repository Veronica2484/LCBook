import { useState, useEffect } from 'react'
import { listOfItems } from '../actions/item'
import SmallCard from '../components/cards/SmallCard'
import Search from '../components/forms/Search'

//create a arrow function
//useSelector takes a function and returns the state
const Home = ({ match }) => {
  //check the keyword entered in the ser¡arch box
  const keyword = match.params.keyword
  //create the item state
  const [items, setItems] = useState([])

  useEffect(() => {
    loadAllitems(keyword)
  }, [keyword])

  const loadAllitems = async () => {
    let res = await listOfItems(keyword)
    setItems(res.data)
  }

  return (
    <>
      <div className="container-fluid banner p-5 text-center">
        <h1> List of items </h1>
      </div>

      {/* <div className="col">
        <br />
        <Search />
      </div> */}

      <div className="container-fluid">
        <br />
        {/* <pre>{JSON.stringify(hotels, null, 4)}</pre> */}
        {items.map((h) => (
          <SmallCard key={h._id} h={h} />
        ))}
      </div>
    </>
  )
}

//exporting this we can import and use it in another component
export default Home
