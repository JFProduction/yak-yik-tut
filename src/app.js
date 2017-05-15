import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Home from './components/layouts/Home'
import store from './stores/StoreFactory'

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>YakYik!</h1>
                <Home />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)