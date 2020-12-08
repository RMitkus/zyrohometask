import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './screens/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/Header'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
ReactDOM.render(
  <Provider store={store}>
    <ScopedCssBaseline>
      <Router>
        <Header />
        <Route path='/:pageNumber' component={App} />
        <Route path='/' component={App} exact />
      </Router>
    </ScopedCssBaseline>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
