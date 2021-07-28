import { useState } from 'react'
import { toast } from 'react-toastify'
import { login } from '../actions/auth'
import LoginForm from '../components/LoginForm'
//to update the state we import useDispatch
import { useDispatch } from 'react-redux'
//create a arrow function
const Login = ({ history }) => {
  const [email, setEmail] = useState('veronicacondori24@gmail.com')
  const [password, setPassword] = useState('123456789')

  //put the useDisoatch function in a variable
  const dispatch = useDispatch()

  const submitForm = async (e) => {
    e.preventDefault()
    console.log('Send Login Information', { email, password })
    try {
      //sending email and password to login
      let res = await login({ email, password })
      if (res.data) {
        console.log(
          'Save user res in redux and local storage then redirect ===>'
        )
        // console.log(res.data)
        //save user and token to local storage
        window.localStorage.setItem('auth', JSON.stringify(res.data))
        //save user and token to redux
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: res.data,
        })
        history.push('/services')
      }
    } catch (err) {
      console.log(err)
      if (err.response.status === 400) toast.error(err.response.data)
      //if (err.response.status === 400) toast(err.response.data)
    }
  }

  return (
    <>
      <div className="container-fluid p-5 text-center banner">
        <h1>Login</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <LoginForm
              submitForm={submitForm}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
