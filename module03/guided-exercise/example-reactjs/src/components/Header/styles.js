import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--dark);
`;

export const Content = styled.div`
    max-width: 70rem;
    padding: 2rem 1rem 12rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    img {
        height: 75px;
        width: 75px;
    }
    
    h1 {
        color: var(--light);
        letter-spacing: 0.125rem;
        text-shadow: 0.25rem 0.25rem var(--shadow);
    }
`;