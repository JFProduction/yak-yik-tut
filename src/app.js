import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Home from './components/layouts/Home'
import store from './stores/Store'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        )
    }
}

const About = () => (
  <div className="container">
    <h2>This is just a fun app, using React and Redux...</h2>
  </div>
)

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <div>
                <Nav />
                <Route exact path="/" component={ Home } />
                <Route path="/about" component={ About } />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)