import styled from 'styled-components';

export const Container = styled.main`
    max-width: 70rem;
    margin: 0 auto;
    margin-top: -10rem;
    padding: 2rem;
    height: 75vh;
    border-radius: 0.25rem;
    background-color: var(--lighter);
    
    button {
        background-color: var(--background);
        height: 3rem;
        padding: 1rem 2rem;

        font-weight: bolder;
        font-size: 1rem;
        color: var(--dark);
        
        border: none;
        border-radius: 0.25rem;
        transition: filter 0.25s;
        
        &:hover {
            filter: brightness(0.9);
        }

        &:active {
            filter: brightness(1.1);
        }
    }

    hr {
        border: none;
	    margin: 1rem 0;
        width: 80%;
        background: var(--background);
        height: 0.063rem;
    }
`;

export const Content = styled.ul`
    max-width: 80%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;

    li {
        font-family: monospace;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fdfdcd;
        height: 1rem;
        padding: 1rem;
        border-radius: 0.25rem;
    }
`;