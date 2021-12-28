import styled from "styled-components"


// ****** Containers ******
export const Container = styled.div``
export const Section = styled.section`
    margin: ${(props) => props.margin};
`
export const SubSection = styled.div`
    
`
export const Div = styled.div`
    border: ${(props) => props.border};
    flex-grow: ${(props) => props.flexGrow};
    padding: ${(props) => props.padding};
    font-size: ${(props) => props.fontSize};
    flex-basis: ${(props) => props.flexBasis};
    margin: ${(props) => props.margin};
    flex-direction: ${(props) => props.flexDirection};
`

// ****** Typography ******
export const H1 = styled.h1``
export const H2 = styled.h2``
export const Span = styled.span`
    font-weight: ${(props) => props.fontWeight};
    margin: ${(props) => props.margin};
    color: ${(props) => props.textColor};
`
export const Para = styled.p`
    font-size: ${(props) => props.fontSize};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
`

// ****** Buttons ******
export const LargeButton = styled.a`
    padding: 2rem;
    font-size: ${(props) => props.fontSize};
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
export const Button = styled.button`

`

// ******Navigation ******
export const Nav = styled.nav``
export const Link = styled.a``
export const List = styled.ul``
export const ListItem = styled.li``