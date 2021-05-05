import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--dark);
`;

export const Content = styled.div`
    padding: 2rem 1rem 12rem;
    max-width: 70rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: var(--light);
        letter-spacing: 0.125rem;
        text-shadow: 0.25rem 0.25rem var(--shadow);
        text-transform: uppercase;
    }

    img {
        width: 4rem;
        height: 4rem;
    }
`;


