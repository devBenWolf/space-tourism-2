import styled from "styled-components"

export const Header = styled.header`  
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;

    @media (max-width: 55rem) {
        margin-top: 0;
    }

    @media (min-width: 50rem) {
        ::after {
        position: relative;
        display: block;
        content: "";
        width: 50%;
        background-color: hsl(var(--clr-white) / 0.5);
        height: 1px;
        order: 1;
        left: 1%;
        }
    }
`
export const Div = styled.div`
    right: ${(props) => props.right};
    position: ${(props) => props.position};
    background-color: ${(props) => props.background};

    @media (max-width: 35rem) {
        right: 40%;
    }
`
export const Navbar = styled.nav`
    order: 2;
`

export const Link = styled.a`
font-size: ${(props) => props.fontSize};  
    transform: translateY(-100%);
    transition: 250ms ease-in-out;
    margin-inline: auto;
    

    &:focus {
        transform: translateY(0);
    }
`
export const List = styled.ul`
    @media (min-width: 50rem) {
        order: 3;
    }
`
export const Img = styled.img`
    margin: 1.5rem clamp(1rem, 2vw, 2rem);
`
export const ListItem = styled.li`
    white-space: nowrap;
`
export const Span = styled.span``
export const MenuButton = styled.button``