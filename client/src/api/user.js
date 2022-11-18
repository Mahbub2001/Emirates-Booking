export const hostRequest = async hostData => {
  const url = `http://localhost:8000/user/${hostData?.email}`

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(hostData),
  })

  const data = await response.json()

  return data
}

// Get user role
export const getRole = async email => {
  const url = `http://localhost:8000/user/${email}`

  const response = await fetch(url)

  const user = await response.json()

  return user?.role
}

// Get All Users
export const getAllUsers = async () => {
  const response = await fetch(`http://localhost:8000/users`)

  const users = await response.json()

  return users
}

export const makeHost = async user => {
  delete user._id
  const response = await fetch(
    `http://localhost:8000/user/${user?.email}`,
    {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ ...user, role: 'host' }),
    }
  )
  const users = await response.json()

  return users
}
