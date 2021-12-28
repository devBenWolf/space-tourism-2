import styled from "styled-components"

export const Main = styled.main`
    background-image: url(/assets/crew/background-crew-mobile.jpg);
    background-size: cover;

    @media (min-width: 35rem) and (max-width: 50rem) {
        background-image: url(/assets/crew/background-crew-tablet.jpg);
        background-size: cover;

    }

    @media (min-width: 50rem) {
        background-image: url(/assets/crew/background-crew-desktop.jpg);
        background-size: cover;
    }
`
export const  Div = styled.div``
export const H1 = styled.h1`
    font-size: ${(props) => props.fontSize};
`
export const H2 = styled.h2`
    color: hsl(var(--clr-white) / 0.3);
    font-size: ${(props) => props.fontSize};
`
export const Para = styled.p`
    font-size: ${(props) => props.fontSize};
    max-width: 70ch;
`
export const Image = styled.img``
export const Picture = styled.picture``
export const Source = styled.source``
export const Button = styled.button``
export const Span = styled.span`
    font-weight: ${(props) => props.fontWeight};
    color: ${(props) => props.textColor};
`
export const Article = styled.article``