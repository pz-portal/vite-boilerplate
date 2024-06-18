import { useState } from 'react'
import reactLogo from './assets/react.svg'
import twaLogo from './assets/tapps.png'
import viteLogo from '/vite.svg'
import './App.css'

import {  request  } from '@tma.js/sdk-react'

function App() {
  const [count, setCount] = useState(0)

  function sendInvoice() {
  
    request({
      method: 'web_app_open_invoice',
      event: 'invoice_closed',
      params: {
        slug: 'Invoice'
      },
    });
  }

  return (
    <>
      <div>
        <a href="https://ton.org/dev" target="_blank">
          <img src={twaLogo} className="logo" alt="TWA logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>TMA + Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <button onClick={() => sendInvoice()}>
          send invoice
        </button>
      </div>
      <div className="card">
        test111
      </div>

    </>
  )
}

export default App
