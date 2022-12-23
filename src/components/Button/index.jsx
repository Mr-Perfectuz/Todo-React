import React, { Component } from 'react'
import "./style.css"

class Button extends Component {
    render() {
        console.log(this);
        return (
            <button className='btn'>{this.props.title || "This is button "}</button>
        )
    }
}

export { Button }