const RegistrationForm = ({
  //we pass those as props from the parent component (Register)
  submitForm,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) => (
  <form onSubmit={submitForm} className="mt-3">
    <div className="form-group mb-3">
      <label className="form-label">Name</label>
      <input
        className="form-control"
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
      />
    </div>

    <div className="form-group mb-3">
      <label className="form-label">Password</label>
      <input
        className="form-control"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    {/* <button disabled={!name || !email || !password} className="btn btn-primary"> */}
    <button className="btn btn-primary">Submit</button>
  </form>
)

export default RegistrationForm
