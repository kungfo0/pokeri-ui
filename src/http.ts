import { AutoComplateValuesRoundsForSeasonResponse, PromiseWithCancel, RoundDetails, RoundsForSeasonResponse } from './types'

async function postData(url = '', data = {}, headers = { 'Content-Type': 'application/json' }) {
  const response = await fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers,
    body: JSON.stringify(data),
  })
  if (!response.ok) {
    throw Error(await response.json())
  }
  return response.json()
}

async function putData(url = '', data = {}, headers = { 'Content-Type': 'application/json', 'x-api-key': localStorage.getItem('apiKey') as string }) {
  const response = await fetch(url, {
    method: 'PUT',
    cache: 'no-cache',
    headers,
    body: JSON.stringify(data),
  })
  if (!response.ok) {
    throw Error(await response.json())
  }
  return response.json()
}

function isAbortError(error: any): error is DOMException {
  if (error && error.name === 'AbortError') {
    return true
  }
  return false
}

export const getData = (url: string, headers = { 'Content-Type': 'application/json', 'x-api-key': localStorage.getItem('apiKey') as string }) => {
  const controller = new AbortController()
  const signal = controller.signal

  const promise = new Promise(async (resolve) => {
    try {
      const response = await fetch(url, {
        headers,
        signal,
      })
      const data = await response.json()
      resolve(data)
    } catch (ex: unknown) {
      if (isAbortError(ex)) {
        console.log(ex.message)
      }
    }
  })
  ;(promise as PromiseWithCancel<any>).cancel = () => controller.abort()
  return promise as PromiseWithCancel<any>
}

export const login = async (username: string, password: string) => {
  return await postData(process.env.REACT_APP_API_BASE_URL + '/login', { username, password })
}

export const getRoundsForSeason = (season: string) => {
  return getData(`${process.env.REACT_APP_API_BASE_URL}/rounds-for-season?season=${season}`) as PromiseWithCancel<RoundsForSeasonResponse>
}

export const getAutoComplateValues = () => {
  return getData(`${process.env.REACT_APP_API_BASE_URL}/autocomplete-values`) as PromiseWithCancel<AutoComplateValuesRoundsForSeasonResponse>
}

export const getSeasons = async () => {
  return await getData(`${process.env.REACT_APP_API_BASE_URL}/seasons`)
}

export const putRoundData = async (data: Record<string, unknown>) => {
  return await putData(process.env.REACT_APP_API_BASE_URL + '/round', data)
}

export const getRound = (id: string) => {
  return getData(`${process.env.REACT_APP_API_BASE_URL}/round/${id}`) as PromiseWithCancel<RoundDetails>
}