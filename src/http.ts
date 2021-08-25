async function postData(url = '', data = {}, headers = {'Content-Type': 'application/json'}) {
    const response = await fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers,
      body: JSON.stringify(data),
    })
    if(!response.ok) {
      throw Error(await response.json())
    }
    return response.json()
}

export const getData = async (url: string, headers = {'Content-Type': 'application/json', 'x-api-key': localStorage.getItem('apiKey') as string}) => {
  const response = await fetch(url, {
    headers,
  })
  if(!response.ok) {
    throw Error(await response.json())
  }
  return response.json()
}

export const login = async (username: string, password: string) => {
    return await postData(process.env.REACT_APP_API_BASE_URL + '/login', {username, password})
}

export const getRoundsForSeason = async (season: string) => {
  return await getData(`${process.env.REACT_APP_API_BASE_URL}/rounds-for-season?season=${season}`)
} 

export const getSeasons = async () => {
  return await getData(`${process.env.REACT_APP_API_BASE_URL}/seasons`)
} 
