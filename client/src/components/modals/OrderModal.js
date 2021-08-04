import { Modal } from 'antd'

//ShowModal and setShowModal are BookingCard component state that with pass to thhis child as props to control de visibility
const OrderModal = ({ item, orderedBy, showModal, setShowModal }) => {
  return (
    <Modal
      visible={showModal}
      title="Order payment info"
      onCancel={() => setShowModal(!showModal)}
    >
      {/* <pre>Paid by: {JSON.stringify(orderedBy, null, 4)}</pre> */}

      <p> OrderedBy: {orderedBy.name}</p>
      <p> Id: {orderedBy._id}</p>
      <p> Payment status: Paid</p>
      <p> Amount: {item.price}€</p>
      {/* <p> Date: {order.date}</p> */}
    </Modal>
  )
}

export default OrderModal
