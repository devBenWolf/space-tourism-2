import styled from "styled-components"

export const Main = styled.main`

    background-image: url(/assets/destination/background-destination-mobile.jpg);
    background-size: cover;

    @media (min-width: 35rem) and (max-width: 50rem) {
        background-image: url(/assets/destination/background-destination-tablet.jpg);
        background-size: cover;

    }

    @media (min-width: 50rem) {
        background-image: url(/assets/destination/background-destination-desktop.jpg);
        background-size: cover;
    }
`
export const Div = styled.div`
    flex-direction: ${(props) => props.flexDirection};
    justify-content: ${(props) => props.justifyContent};
    padding: ${(props) => props.padding};
    
`
export const H1 = styled.h1`
    font-size: ${(props) => props.fontSize};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
`
export const Para = styled.p`
    font-size: ${(props) => props.fontSize};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    max-width: 60ch;
`
export const Image = styled.img``
export const Span = styled.span`
    font-weight: ${(props) => props.fontWeight};
    margin: ${(props) => props.margin};
    color: ${(props) => props.textColor};
`
export const Source = styled.source``
export const List = styled.ul``
export const ListItem = styled.li``
export const Button = styled.button``
export const Article = styled.article``