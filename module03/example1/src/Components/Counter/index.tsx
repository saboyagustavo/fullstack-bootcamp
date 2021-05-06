import { useEffect, useState } from "react";
import { Container } from "./styles";

export function Counter() {
    const [count, setCount] = useState<number>(0);
    const [step, setStep] = useState<number>(0);

    const handleDecreaseClick = (): void => {
        const updatedCount = count - 1;
        setCount(updatedCount);
        setStep(step + 1);
    }

    const handleIncreaseClick = (): void => {
        const updatedCount = count + 1;
        setCount(updatedCount);
        setStep(step + 1);
    }

    return (
        <Container>
            <button onClick={handleDecreaseClick} className="minus">-</button>
            <span>{count}</span>
            <button onClick={handleIncreaseClick} className="plus">+</button>
            <p>({step})</p>
        </Container>
    );
}

