import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background:#d4d4d4;
    --dark:#333;
    --light:#f5f5f5;
    --lighter:#fff;
    --shadow:#222;
    --red:#EB5757;
    --green:#219653;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

html {
    @media(max-width:1080) {
        font-size: 93.75%;
    }
    @media(max-width:720) {
        font-size: 87.50%;
    }
    @media(max-width:480) {
        font-size: 83.25%;
    }
}

body {
    background-color: var(--background);
    min-height: 100%;
    padding-bottom: 2rem;
    -webkit-font-smothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

button {
    cursor: pointer;
}
`;