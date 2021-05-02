import { Component } from 'react';
import logoImg from '../../assets/ReactJS.svg'
import { Container, Content } from "./styles";

export class Header extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <h1>Example 2</h1>
                    <img src={logoImg} alt="ReactJS" />
                </Content>
            </Container >
        );
    }
}