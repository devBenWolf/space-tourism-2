import styled from "styled-components"

export const Main = styled.main`
    display: grid;
    grid-template-areas: 
        "title"
        "image"
        "tabs"
        "content";
        text-align: center;
        place-items: center;
        padding-inline: 1rem;
        background-image: url(/assets/technology/background-technology-mobile.jpg);
        background-size: cover;

        @media(min-width: 35rem) and (max-width: 55rem) {
            background-image: url(/assets/technology/background-technology-tablet.jpg);
        }

        @media (min-width: 55rem) {
            background-image: url(/assets/technology/background-technology-desktop.jpg);
            grid-template-areas:
                "title title image image"
                "tabs content image image"
                ". . image image";
                text-align: left;           
                grid-template-columns: minmax(20rem, 1fr) repeat(2, minmax(0, 50rem)) minmax(20rem, 1fr);
                align-items: end;
            }

            > * {
                margin-bottom: 10rem;
            }

        }
`
export const Div = styled.div``
export const TabsContainer = styled.div`
    grid-area: tabs;
    margin: -2rem 0;

    @media (min-width: 35rem) {
        margin: min(2rem, 4rem);
    }

    @media (min-width: 55rem) {
        flex-direction: column;
        margin-left: 5rem;

        > * {
            margin-bottom: 2.5rem;
        }
    }
`
export const H1 = styled.h1`
    font-size: ${(props) => props.fontSize};
    grid-area: title;
    margin-top: 14rem;

    @media (min-width: 35rem) {
        justify-self: left;
        margin-left: 2rem;
    }

    @media (min-width: 55rem) {
        margin-left: clamp(10rem, 8vw, 40rem);
    }
`
export const H2 = styled.h2`
    font-size: ${(props) => props.fontSize};


    @media (min-width: 35rem) {
        margin-top: (min(2rem, 4rem));
    }
`
export const Sub = styled.p`
    font-size: ${(props) => props.fontSize};
    margin: 0;
`
export const Para = styled.p`
    font-size: ${(props) => props.fontSize};
    max-width: 50ch;
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    
`
export const Image = styled.img`
    grid-area: image;
    content: url(/assets/technology/${(props) => props.image}-landscape.jpg);
    justify-self: end;

    @media (max-width: 55rem) {
        width: 100vw;
    }

    @media (min-width: 55rem) {
        content: url(/assets/technology/${(props) => props.image}-portrait.jpg);


    }
`
export const Article = styled.article`
    flex-direction: ${(props) => props.flexDirection};
    grid-area: content;
    margin-top: 0;
    align-items: center;
    padding-bottom: 4rem;

    @media(max-width: 55rem) {
        width: 100vw;
    }

    @media (min-width: 55rem) {
        align-items: start;
    }
    
`
export const Span = styled.span`
    font-weight: ${(props) => props.fontWeight};
    color: ${(props) => props.textColor};
`