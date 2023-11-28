import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import { GlobalProvider } from './context/GlobalProvider.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/holitas",
    element: <div>Holitas</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router}/>
    </GlobalProvider>
  </React.StrictMode>,
)
