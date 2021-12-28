import {
    Main,
    H1,
    Div,
    Span,
    Para,
    LargeButton
} from "./styles/homeStyles"

export default function Home({children, ...props}) {
    return (
        <Main {...props}>{children}</Main>
    )
}

Home.H1 = function HomeH1({children, ...props}) {
    return (
        <H1 {...props}>{children}</H1>
    )
}
Home.Div = function HomeDiv({children, ...props}) {
    return (
        <Div {...props}>{children}</Div>
    )
}
Home.Span = function HomeSpan({children, ...props}) {
    return (
        <Span {...props}>{children}</Span>
    )
}
Home.Para = function HomePara({children, ...props}) {
    return (
        <Para {...props}>{children}</Para>
    )
}
Home.LargeButton = function HomeLargeButton({children, ...props}) {
    return (
        <LargeButton {...props}>{children}</LargeButton>
    )
}