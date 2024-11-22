import React from 'react'

const DeleteButton = ({ userId, onDelete, loading }) => {
  return (
    <button
      onClick={() => onDelete(userId)}
      disabled={loading}
      style={{ color: 'red' }}
    >
      Delete
    </button>
  )
}

export default DeleteButton
