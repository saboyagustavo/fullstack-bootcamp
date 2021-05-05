import { Container } from "./styles";

export function Counter() {
    return (
        <Container>
            <button className="minus">-</button>
            <span>0</span>
            <button className="plus">+</button>
        </Container>
    );
}

