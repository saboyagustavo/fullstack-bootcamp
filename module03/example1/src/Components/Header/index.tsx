import logoImg from '../../assets/ReactJS.svg'
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <h1>Counting app</h1>
                <img src={logoImg} alt="ReactJS" />
            </Content>
        </Container>
    );
}