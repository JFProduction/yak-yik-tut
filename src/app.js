import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Zones from './components/Zones'

class App extends Component {
    
    render() {
        return (
            <div>
                <h1>Hello React!</h1>
                <Zones />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))