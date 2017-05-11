import React, { Component } from 'react'

class Zones extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li>
                        <div>
                            <h2><a href="#">Zone 1</a></h2>
                            <span>75039</span><br />
                            <span>10 Comments</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2><a href="#">Zone 2</a></h2>
                            <span>75038</span><br />
                            <span>11 Comments</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2><a href="#">Zone 3</a></h2>
                            <span>33569</span><br />
                            <span>No Comments</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h2><a href="#">Zone 4</a></h2>
                            <span>75039</span><br />
                            <span>3 Comments</span>
                        </div>
                    </li>
                </ol>
            </div>
        )
    }
}

export default Zones