import logoImg from '../../assets/ReactJS.svg'
import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <h1>Example 2</h1>
                <img src={logoImg} alt="ReactJS" />
            </Content>
        </Container >
    );
}