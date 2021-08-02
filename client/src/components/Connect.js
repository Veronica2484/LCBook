import { useSelector } from 'react-redux'
import { Card, Avatar } from 'antd'
import moment from 'moment'

const { Meta } = Card

const Connect = () => {
  const { auth } = useSelector((state) => ({ ...state }))
  const { user } = auth

  return (
    <div className="d-flex justify-content-around">
      <Card className="">
        <Meta avatar={<Avatar>{user.name[0]}</Avatar>} title={user.name} />
      </Card>
    </div>
  )
}

export default Connect
