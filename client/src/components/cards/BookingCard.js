import { useState } from 'react'
import { currencyFormatter } from '../../actions/stripe'
import { useHistory, Link } from 'react-router-dom'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import OrderModal from '../modals/OrderModal'

const BookingCard = ({ item, orderedBy }) => {
  //create a state to control de visibility of the modal
  const [showModal, setShowModal] = useState(false)

  const history = useHistory()
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{item.itemTitle} </h2>
              <p className="alert alert-info">Author: {item.author}</p>
              <p className="alert alert-info">City: {item.city}</p>

              <div className="d-flex justify-content-between">
                <p className="card-text">To: {item.status}</p>
                <p className="card-text"> Quantity: {item.quantity}</p>
                <p className="">
                  {' '}
                  Price:{' '}
                  {currencyFormatter({
                    amount: item.price,
                    currency: 'EUR',
                  })}
                </p>{' '}
              </div>

              <div className="col-md-4">
                {item.from && item.to ? (
                  <>
                    <p className="card-text">
                      From {new Date(item.from).toLocaleDateString()}
                    </p>
                    <p className="card-text">
                      To {new Date(item.to).toLocaleDateString()}
                    </p>
                  </>
                ) : (
                  <p className="card-text">{``}</p>
                )}
              </div>

              {showModal && (
                <OrderModal
                  item={item}
                  orderedBy={orderedBy} //items passed as props
                  showModal={showModal} //those are passed as props to control de visibility of the modal component
                  setShowModal={setShowModal}
                />
              )}

              <div className="d-flex justify-content-between h4">
                <button
                  onClick={() => setShowModal(!showModal)}
                  className="btn btn-primary"
                >
                  Show more info
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            {item.image && item.image.contentType ? (
              <img
                src={`${process.env.REACT_APP_API}/item/image/${item._id}`}
                alt="item"
                className="card-image img img-fluid"
              />
            ) : (
              <img
                src="https://via.placeholder.com/900x500.png?text=item"
                alt="item"
                className="card-image img img-fluid"
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default BookingCard
