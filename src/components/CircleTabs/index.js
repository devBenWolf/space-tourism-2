import {Div, Button, Para} from "./styles/circleTabStyles"

export default function CircleTabs({children, ...props}) {
    return (
        <Div {...props}>{children}</Div>
    )
}

CircleTabs.Button = function CircleTabsButton({children, ...props}) {
    return (
        <Button {...props}>{children}</Button>
    )
}
CircleTabs.Para = function CircleTabsPara({children, ...props}) {
    return (
        <Para {...props}>{children}</Para>
    )
}