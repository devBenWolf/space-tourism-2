import {Div, Button, Span} from "./styles/dotStyles"

export default function Dots({children, ...props}) {
    return (
        <Div {...props}>{children}</Div>
    )
}

Dots.Button = function DotsButton({children, ...props}) {
    return (
        <Button {...props}>{children}</Button>
    )
}

Dots.Span = function DotsSpan({children, ...props}) {
    return (
        <Span {...props}>{children}</Span>
    )
}