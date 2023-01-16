import React from 'react';
import Home from '../components/Home';
import { Container } from '../components/Home/style';

export default class Index extends React.Component {
    render() {
        return (
            <Container>
                <Home />
            </Container>
        )
    }
}
