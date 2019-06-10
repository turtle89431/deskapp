import React, { Component } from 'react'
import ReactDom from 'react-dom'
export default class App extends Component {
    render() {
        return (
            <div>
               test deskgp 
            </div>
        )
    }
}
let mp = document.querySelector("#app")
ReactDom.render(<App />,mp)