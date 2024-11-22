import React, { useState } from 'react'
import UserTable from './UserTable'
import { getUsers, deleteUser } from '../../Service/apiMethods'
import DeleteButton from './DeleteButton'

const UserContainer = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchUsers = async () => {
    setLoading(true)
    setError('')
    try {
      const fetchedUsers = await getUsers()
      console.log('Fetched users:', fetchedUsers)
      setUsers(fetchedUsers.data)
    } catch (err) {
      setError('Failed to fetch users. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  const handleDelete = async (id) => {
    setLoading(true)
    setError('')
    try {
      await deleteUser(id)
      setUsers(users.filter((user) => user.id !== id))
    } catch (err) {
      setError('Failed to delete user. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Users'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      <UserTable userList={users} loading={loading} onDelete={handleDelete} />
    </div>
  )
}

export default UserContainer
