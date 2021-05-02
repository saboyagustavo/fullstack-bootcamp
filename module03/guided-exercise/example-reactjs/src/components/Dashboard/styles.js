import styled from 'styled-components';

export const Container = styled.main`
    max-width: 70rem;
    margin: 0 auto;
    margin-top: -10rem;
    padding: 2rem;
    min-height: 75vh;
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
    max-width: 100%;
    display: grid;
    
    @media(min-width: 769px) { 
        grid-template-columns: repeat(6, 1fr);
        gap: 1rem;
    }
    
    @media(max-width: 768px) { 
        grid-template-columns: repeat(4, 1fr);
        gap: 0.75rem;
    }

    @media(max-width: 667px) { 
        grid-template-columns: repeat(2, 1fr);
        gap: 0.55rem;
    }

    @media(max-width: 414px) { 
        grid-template-columns: 1fr;
        gap: 0.55rem;
    }
        

    li {
        text-align: center;
        font-family: monospace;
        background: #fdfdcd;
        padding: 1rem;
        border-radius: 0.25rem;
    }
`;