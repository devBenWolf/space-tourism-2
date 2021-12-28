import {
    Main,
    Div,
    TabsContainer,
    H1,
    H2,
    Para,
    Sub,
    Image,
    Article,
    Span
} from "./styles/technologyStyles"

export default function Tech({children, ...props}) {
    return (
        <Main {...props}>{children}</Main>
    )
}

Tech.Div = function TechDiv({children, ...props}) {
    return (
        <Div {...props}>{children}</Div>
    )
}

Tech.TabsContainer = function TechTabsContainer({children, ...props}) {
    return (
        <TabsContainer {...props}>{children}</TabsContainer>
    )
}

Tech.H1 = function TechH1({children, ...props}) {
    return (
        <H1 {...props}>{children}</H1>
    )
}
Tech.H2 = function TechH2({children, ...props}) {
    return (
        <H2 {...props}>{children}</H2>
    )
}
Tech.Para = function TechPara({children, ...props}) {
    return (
        <Para {...props}>{children}</Para>
    )
}
Tech.Sub = function TechSub({children, ...props}) {
    return (
        <Sub {...props}>{children}</Sub>
    )
}
Tech.Image = function TechImage({children, ...props}) {
    return (
        <Image {...props}>{children}</Image>
    )
}
Tech.Article = function TechArticle({children, ...props}) {
    return (
        <Article {...props}>{children}</Article>
    )
}
Tech.Span = function TechSpan({children, ...props}) {
    return (
        <Span {...props}>{children}</Span>
    )
}