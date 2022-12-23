import React from 'react';
import State from '../components/State';

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from Root</h1>
                <div><State /></div>
            </div>
        )
    }
}
