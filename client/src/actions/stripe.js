import axios from 'axios'

//fc to make a request in the back end to create an account sending the token

// export const getAccountStatus = async (token) =>
//   axios.post(
//     `${process.env.REACT_APP_API}/get-account-status`,
//     {},
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   )

// export const getAccountBalance = async (token) =>
//   axios.post(
//     `${process.env.REACT_APP_API}/get-account-balance`,
//     {},
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   )

export const currencyFormatter = (data) => {
  return data.amount.toLocaleString(data.currency, {
    style: 'currency',
    currency: data.currency,
  })
}

// export const payoutSetting = async (token) =>
//   await axios.post(
//     `${process.env.REACT_APP_API}/payout-setting`,
//     {},
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   )

//function to get session id
export const getSessionId = async (token, itemId) =>
  await axios.post(
    `${process.env.REACT_APP_API}/session-id`,
    { itemId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

//fc to make a request to the back end to create a order
export const CheckOutRequest = async (token, itemId) =>
  await axios.post(
    `${process.env.REACT_APP_API}/checkout`,
    { itemId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
