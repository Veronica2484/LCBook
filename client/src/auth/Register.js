import React from 'react'
//import useState which is a hook to be able to use it
import { useState } from 'react'
import RegistrationForm from '../components/RegistrationForm'
//import axios to send a request to the back end
import axios from 'axios'
//import those to handle notification
import { toast } from 'react-toastify'
//import the register funtion from auth action
import { register } from '../actions/auth'

//create a arrow function
const Register = ({ history }) => {
  //create a state to starage the the username, email and password
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //console.log("history", history);

  const submitForm = async (e) => {
    //we add async keyword to the event to be able to await for a request to handle it
    //alert('send user info to backend')
    e.preventDefault()
    //console.table({ name, email, password })
    try {
      //axios makes a post request to the end point which takes two argument the url and the data
      //replace the code for a register function which has the action on the auth action file
      const res = await register({
        name,
        email,
        password,
      })
      //we see this message in the console
      console.log('REGISTER USER ===>', res)
      //add the toast function to see the toast message
      toast('Registered successfully. Please Login.')
      //once the registration has been succesfull it is redirect to Login page
      history.push('/login')
    } catch (err) {
      console.log(err)
      if (err.response.status === 400) toast(err.response.data)
    }
  }

  //only to check if the client has access to this port
  //console.log(process.env.REACT_APP_API);

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Register</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <RegistrationForm
              submitForm={submitForm}
              name={name}
              setName={setName}
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

export default Register
