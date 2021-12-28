import {
    Main,
    Div,
    H1,
    H2,
    Para,
    Image,
    Picture,
    Source,
    Button,
    Span,
    Article
} from "./styles/crewStyles"

export default function Crew ({children, ...props}) {
    return (
        <Main {...props}>{children}</Main>
    )
}

Crew.Div = function CrewDiv({children, ...props}) {
    return (
        <Div {...props}>{children}</Div>
    )
}
Crew.Article = function CrewArticle({children, ...props}) {
    return (
        <Article {...props}>{children}</Article>
    )
}
Crew.H1 = function CrewH1({children, ...props}) {
    return (
        <H1 {...props}>{children}</H1>
    )
}
Crew.H2 = function CrewH2({children, ...props}) {
    return (
        <H2 {...props}>{children}</H2>
    )
}
Crew.Span = function CrewSpan({children, ...props}) {
    return (
        <Span {...props}>{children}</Span>
    )
}
Crew.Para = function CrewPara({children, ...props}) {
    return (
        <Para {...props}>{children}</Para>
    )
}
Crew.Image = function CrewImage({children, ...props}) {
    return (
        <Image {...props}>{children}</Image>
    )
}
Crew.Picture = function CrewPicture({children, ...props}) {
    return (
        <Picture {...props}>{children}</Picture>
    )
}
Crew.Source = function CrewSource({children, ...props}) {
    return (
        <Source {...props}>{children}</Source>
    )
}
Crew.Button = function CrewButton({children, ...props}) {
    return (
        <Button {...props}>{children}</Button>
    )
}