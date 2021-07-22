export const showMessage = (req, res) => {
  //express is like a request response handler
  //We can embedded variables ('Here is your message: ${req.params.message}')
  res.status(200).send(`Here is your message:  ${req.params.message}`) //it statement should have single `` no ""
}
