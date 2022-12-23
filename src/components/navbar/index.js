import React from 'react'
import { Button as Btn } from '../Button';

class Navbar extends React.Component {
    render() {
        // console.log(this.props.logo, this.props.item, 'props')
        return (
            <>
                <h1 >{this.props.title}</h1>
                <Btn title="Login" />
                <Btn title="Register" />
                <Btn title="Signup" />
            </>

        )
    }
}

export default Navbar;