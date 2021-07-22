//import useState which is a hook to be able to use it
import { useState } from 'react'

//create a arrow function
const Register = () => {
  //create a state to starage the the username, email and password
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = () => {
    alert('send user info to backend')
  }

  const registrationForm = () => (
    <form onSubmit={submitForm} className="mt-3">
      <div className="form-group mb-3">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label className="form-label">Email address</label>
        <input
          className="form-control"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label className="form-label">Password</label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  )

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Register</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">{registrationForm()}</div>
        </div>
      </div>
    </>
  )
}

export default Register
