import styled from "styled-components"

export const Main = styled.main`
    background-image: url(/assets/home/background-home-mobile.jpg);
    background-size: cover;

    @media (min-width: 35rem) and (max-width: 50rem) {
        background-image: url(/assets/home/background-home-tablet.jpg);
        background-size: cover;

    }

    @media (min-width: 50rem) {
        background-image: url(/assets/home/background-home-desktop.jpg);
        background-size: cover;
    }
`
export const Div = styled.div``
export const Span = styled.span`
    font-size: ${(props) => props.fontSize};  
    display: ${(props) => props.display}; 
    margin: ${(props) => props.margin};
`
export const H1 = styled.h1`
    font-size: ${(props) => props.fontSize};
    white-space: ${(props) => props.whiteSpace};
`
export const Para = styled.p`
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    font-size: ${(props) => props.fontSize};
`
export const LargeButton = styled.button`
    padding: 2rem;
    text-decoration: none;
    position: relative;
    display: inline-grid;
    border-radius: 50%;
    padding: ${(props) => props.padding};
    aspect-ratio: 1;
    place-items: center;
    z-index: 1;

    // *************************
    // Setting opacity on pseudoelement allows transition property
    // to make element fade out as it contracts.
    // *************************

    ::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: hsl(var(--clr-white) / 0.15);
        border-radius: inherit;
        z-index: -1;
        box-shadow: 0 1px 2px rgba(0 0 0 0.15);
        transition: all 0.5s ease-in-out;

    }

    :hover::after,
    :focus::after {
        background-color: #fff;
        box-shadow:
            0 0 60px 30px white, /*inner white*/
            0 0 100px 60px hsl(300 100% 50%), /*middle magenta*/
            0 0 140px 90px hsl(180 100% 50%); /* outer cyan */
            transition: 0.5s ease-in-out;
`