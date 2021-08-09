import { currencyFormatter } from '../../actions/stripe'
import { useHistory, Link } from 'react-router-dom'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

const SmallCard = ({
  h,
  handleItemDelete = (f) => f,
  owner = false,
  showViewMoreButton = true,
}) => {
  const history = useHistory()
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{h.itemTitle} </h2>
              <p className="alert alert-info">Author: {h.author}</p>
              <p className="alert alert-info">City: {h.city}</p>

              <div className="d-flex justify-content-between">
                <p className="card-text">To: {h.status}</p>
                <p className="card-text"> Quantity: {h.quantity}</p>
                <p className="">
                  {' '}
                  Price:{' '}
                  {currencyFormatter({
                    amount: h.price,
                    currency: 'EUR',
                  })}
                </p>{' '}
              </div>

              {/* <p className="card-text">
                Available from {new Date(h.from).toLocaleDateString()}
              </p> */}

              <div className="col-md-4">
                {h.from && h.to ? (
                  <>
                    <p className="card-text">
                      Available from {new Date(h.from).toLocaleDateString()}
                    </p>
                    <p className="card-text">
                      Available to {new Date(h.to).toLocaleDateString()}
                    </p>
                  </>
                ) : (
                  <p className="card-text">{``}</p>
                )}
              </div>

              <div className="d-flex justify-content-between h4">
                {showViewMoreButton && (
                  <button
                    onClick={() => history.push(`/item/${h._id}`)}
                    className="btn btn-primary"
                  >
                    Show more
                  </button>
                )}

                {owner && (
                  <>
                    <Link to={`/item/edit/${h._id}`}>
                      <EditOutlined className="text-warning" />
                    </Link>
                    <DeleteOutlined
                      onClick={() => handleItemDelete(h._id)}
                      className="text-danger"
                    />
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-4">
            {h.image && h.image.contentType ? (
              <img
                src={`${process.env.REACT_APP_API}/item/image/${h._id}`}
                alt="item"
                className="card-image img img-fluid"
              />
            ) : (
              <img
                src="https://via.placeholder.com/900x500.png?text=item"
                alt="item"
                className="card-image img img-fluid-preview"
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SmallCard
