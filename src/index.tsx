import * as ReactDOMClient from 'react-dom/client'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

const publicUrl = process.env.PUBLIC_URL || ''
export const root = publicUrl.endsWith('/') ? publicUrl.slice(0, -1) : publicUrl

const reactRoot = ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement)

reactRoot.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
