import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { Provider } from "react-redux"
import store from "./store/store"
import { BrowserRouter } from "react-router"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter basename="/Airbnb">
    <Provider store={store}>
    
      <App />
    
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)