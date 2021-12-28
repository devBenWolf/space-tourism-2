import {
    Main,
    Div,
    H1,
    Span,
    Para,
    Image,
    List,
    ListItem,
    Button,
    Article
} from "./styles/destinationStyles"

export default function Destination({children, ...props}) {
    return (
        <Main {...props}>{children}</Main>    
    )
}

Destination.Div = function DestinationDiv({children, ...props}) {
    return (
        <Div {...props}>{children}</Div>    
    )
}
Destination.H1 = function DestinationH1({children, ...props}) {
    return (
        <H1 {...props}>{children}</H1>    
    )
}
Destination.Span = function DestinationSpan({children, ...props}) {
    return (
        <Span {...props}>{children}</Span>    
    )
}
Destination.Para = function DestinationPara({children, ...props}) {
    return (
        <Para {...props}>{children}</Para>
    )
}
Destination.Image = function DestinationImage({children, ...props}) {
    return (
        <Image {...props}>{children}</Image>
    )
}

Destination.List = function DestinationList({children, ...props}) {
    return (
        <List {...props}>{children}</List>
    )
}
Destination.ListItem = function DestinationListItem({children, ...props}) {
    return (
        <ListItem {...props}>{children}</ListItem>
    )
}
Destination.Button = function DestinationButton({children, ...props}) {
    return (
        <Button {...props}>{children}</Button>
    )
}
Destination.Article = function DestinationArticle({children, ...props}) {
    return (
        <Article {...props}>{children}</Article>
    )
}