import { LoginWith } from './component/styled-components'

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    if(!response.ok) {
      throw Error(await response.json())
    }
    return response.json() // parses JSON response into native JavaScript objects
}

export const login = async (username: string, password: string) => {
    return await postData('https://mkoryrorqb.execute-api.eu-west-1.amazonaws.com/dev/login', {username, password})
}

export const getRoundsForSeason = async (season: string) => {
    // Default options are marked with *
    const response = await fetch(`https://mkoryrorqb.execute-api.eu-west-1.amazonaws.com/dev/rounds-for-season?season=${season}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': localStorage.getItem('apiKey') as string,
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
    if(!response.ok) {
      throw Error(await response.json())
    }
    return response.json() // parses JSON response into native JavaScript objects
}