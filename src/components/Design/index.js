import {Container,
        H1,
        H2,
        Span,
        Section,
        Div,
        SubSection,
        Para,
        LargeButton,
        Button,
        Nav,
        Link,
        List,
        ListItem,

        }  from "./styles/designStyles"

        // ****************** //
        //  Boxes             //
        // ****************** //

export default function Design({children, ...props}) {
    return (
        <Container {...props}>{children}</Container>)
}

Design.Section = function DesignSection({children, ...props}) {
    return (
        <Section {...props}>{children}</Section>
    )
}
Design.SubSection = function DesignSubSection({children, ...props}) {
    return (
        <SubSection {...props}>{children}</SubSection>
    )
}

Design.Div = function DesignDiv({children, ...props}) {
    return (
        <Div {...props}>{children}</Div>
    )
}

        // ****************** //
        //  Typography        //
        // ****************** //

Design.H1 = function DesignH1({children, ...props}) {
    return (
        <H1 {...props}>{children}</H1>
    )
}

Design.H2 = function DesignH2({children, ...props}) {
    return (
        <H2 {...props}>{children}</H2>
    )
}

Design.Span = function DesignSpan({children, ...props}) {
    return (
        <Span {...props}>{children}</Span>
    )
}

Design.Para = function DesignPara({children, ...props}) {
    return (
        <Para {...props}>{children}</Para>
    )
}

        // ****************** //
        //  Buttons           //
        // ****************** //

Design.LargeButton = function DesignLargeButton({children, ...props}) {
    return (
        <LargeButton {...props}>{children}</LargeButton>
    )
}
Design.Button = function DesignButton({children, ...props}) {
    return (
        <Button {...props}>{children}</Button>
    )
}


        // ****************** //
        //  Navigation        //
        // ****************** //

Design.Nav = function DesignNav({children, ...props}) {
    return (
        <Nav {...props}>{children}</Nav>
    )
}
Design.Link = function DesignLink({children, ...props}) {
    return (
        <Link {...props}>{children}</Link>
    )
}
Design.List = function DesignList({children, ...props}) {
    return (
        <List {...props}>{children}</List>
    )
}
Design.ListItem = function DesignListItem({children, ...props}) {
    return (
        <ListItem {...props}>{children}</ListItem>
    )
}



