import React from 'react'
import DeleteButton from './DeleteButton'

const UserTable = ({ userList, loading, onDelete }) => {
  return (
    <div className="Table">
      <h2>Users from API:</h2>
      {userList.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Avatar</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {user.first_name} {user.last_name}
                </td>
                <td>{user.email}</td>
                <td>{user.avatar}</td>
                <td>
                  {' '}
                  <DeleteButton
                    userId={user.id}
                    onDelete={onDelete}
                    loading={loading}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p>No users available. Fetch data to see results.</p>
      )}
    </div>
  )
}

export default UserTable
