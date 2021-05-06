import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr 10%);
    gap: 1rem;
    align-items: center;
    justify-items: center;
    max-width: 40%;
    margin-bottom:1.25rem;
    &:last-child {
        margin: 0;
    }
    
    span { 
        padding: 0 2rem;
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