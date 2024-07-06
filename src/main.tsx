import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <header className="p-4">
        <div className="container mx-auto grid grid-cols-12 flex items-center gap-4">

          <div className="col-span-3 flex items-center">
            <img src="./src/images/logo.png" alt="Logo" className="h-15" />
          </div>

          <div className="col-span-7">
            <div className="search">
              <input type="text" placeholder="Search..." className="searchBar rounded-full" />
            </div>
          </div>

          <div className="col-span-1"></div>

          <div className="col-span-1 flex justify-end">
            <button className="button rounded-md">
              <img src="./src/images/marketCarIcon.svg" alt="marketIcon" className="h-10" />
            </button>
          </div>
        </div>
      </header>
      <App />
      <footer className="p-4">
        <div className="container mx-auto grid grid-cols-12 flex items-center gap-4 footer">
          <img src="./src/images/logo.png" alt="Logo" className="h-15" />
          <p className="w-80">© Copyright Erik Machado Lopes</p>
          <img src="./src/images/gitHubIcon.svg" alt="" />
        </div>
      </footer>
    </QueryClientProvider>
  </React.StrictMode>,
)
