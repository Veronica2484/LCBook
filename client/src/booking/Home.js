import { useSelector } from 'react-redux'

//create a arrow function
//useSelector takes a function and returns the state
const Home = () => {
  const { user } = useSelector((state) => ({ ...state }))
  return (
    <div className="container-fluid h1 p-5 text-center">
      Home{JSON.stringify(user)}
    </div>
  )
}

//exporting this we can import and use it in another component
export default Home
