import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    align-items: center;
    justify-items: center;
    max-width: 30%;

    span { 
        max-width: 2rem;
        font-weight: bolder;
        font-family: monospace;
        font-size: 2rem;
    }

    button {
        background-color: var(--background);
        height: 3rem;
        padding: 1rem 2rem;

        font-weight: bolder;
        font-size: 1rem;
        color: var(--light);
        text-align: center;
        line-height: 0;

        border: none;
        border-radius: 0.25rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(1.2);
        }

        &:active {
            filter: brightness(0.8);
        }

        &.minus {
            background: var(--red);
        }

        &.plus {
            background: var(--green);
        }
    }
`