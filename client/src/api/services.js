export const addHome = async homeData => {
  const url = `http://localhost:8000/homes`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(homeData),
  })

  const data = await response.json()

  return data
}
