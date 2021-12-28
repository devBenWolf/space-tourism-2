import {Main, Button} from "./styles/tabnavStyles"

export default function TabNav({children, ...props}) {
    return (
        <Main {...props}>{children}</Main>
    )
}

TabNav.Button = function TabNavButton({children, ...props}) {
    return (
        <Button {...props}>{children}</Button>
    )
}