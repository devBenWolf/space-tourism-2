import {
    Header,
    Navbar,
    List,
    ListItem,
    Span,
    Div,
    Img,
    MenuButton,
    Link
} from "./styles/navigationStyles"

export default function Navigation({children, ...props}) {
    return (
        <Header {...props}>{children}</Header>
    )
}

Navigation.Navbar = function NavigationNavbar({children, ...props}) {
    return (
        <Navbar {...props}>{children}</Navbar>
    )
}
Navigation.List = function NavigationList({children, ...props}) {
    return (
        <List {...props}>{children}</List>
    )
}
Navigation.ListItem = function NavigationListItem({children, ...props}) {
    return (
        <ListItem {...props}>{children}</ListItem>
    )
}
Navigation.Span = function NavigationSpan({children, ...props}) {
    return (
        <Span {...props}>{children}</Span>
    )
}
Navigation.Div = function NavigationDiv({children, ...props}) {
    return (
        <Div {...props}>{children}</Div>
    )
}
Navigation.Img = function NavigationImg({children, ...props}) {
    return (
        <Img {...props}>{children}</Img>
    )
}

Navigation.MenuButton = function NavigationMenuButton({children, ...props}) {
    return (
        <MenuButton {...props}>{children}</MenuButton>
    )
}
Navigation.Link = function NavigationLink({children, ...props}) {
    return (
        <Link {...props}>{children}</Link>
    )
}
