const LoginForm = ({
  //we pass those as props from the parent component (Register)
  submitForm,
  email,
  setEmail,
  password,
  setPassword,
}) => (
  <form onSubmit={submitForm} className="mt-3">
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
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>
    <button disabled={!email || !password} className="btn btn-primary">
      Submit
    </button>
  </form>
)

export default LoginForm
