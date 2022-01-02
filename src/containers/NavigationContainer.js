import {useState} from "react"
import { Link, useLocation } from "react-router-dom"
import Navigation from "../components/Navigation";
import { Header } from "../components/Navigation/styles/navigationStyles";



const NavigationContainer = () => {
    const [isVisible, setIsVisible] = useState(false)
    console.log(isVisible)

    const {pathname} = useLocation()


    return (
        <>
        <Navigation.Div data-flex position="absolute" right="50%">
            <Navigation.Link href="#" fontSize="2rem" data-text-dark data-bg-white>Skip to content</Navigation.Link>
        </Navigation.Div>
        <Header data-flex data-primary-header>
            <Navigation.Div>
                <Navigation.Img src="./assets/shared/logo.svg" alt="space tourism logo" data-logo />
            </Navigation.Div>
            <Navigation.MenuButton
                className={`mobile-nav-toggle ${isVisible ? "close-nav-icon" : "hamburger-icon"}`}
                aria-controls="navigation"
                onClick={() => setIsVisible(!isVisible)} 
                style={{ height: "1.5rem"}}             
            >
                <Navigation.Span
                    data-sr-only
                    aria-expanded="false"
                >Menu</Navigation.Span>
            </Navigation.MenuButton>

            <Navigation.Navbar>
                <Navigation.List data-flex data-primary-navigation data-underline-indicators className={`${isVisible ? "visible-nav": "invisible-nav"}`}>
                    <Navigation.ListItem className={pathname === "/" ? "active" : ""}>
                        <Link to="/" data-font-family="sans-cond" data-uppercase data-text-white data-letter-space="2">
                            <Navigation.Span aria-hidden="true">00 </Navigation.Span>
                            Home
                        </Link>
                    </Navigation.ListItem>
                    <Navigation.ListItem className={["/moon", "/mars", "/europa", "/titan"].includes(pathname) ? "active" : ""}>
                        <Link to="/moon" data-font-family="sans-cond" data-uppercase data-text-white data-letter-space="2">
                            <Navigation.Span aria-hidden="true">01 </Navigation.Span>
                            Destination
                        </Link>
                    </Navigation.ListItem>
                    <Navigation.ListItem className={["/commander", "/specialist", "/pilot", "/engineer"].includes(pathname) ? "active" : ""}>
                        <Link to="/commander" data-font-family="sans-cond" data-uppercase data-text-white data-letter-space="2">
                            <Navigation.Span aria-hidden="true">02 </Navigation.Span>
                            Crew
                        </Link>
                    </Navigation.ListItem>
                    <Navigation.ListItem className={["/vehicle", "/spaceport", "/capsule"].includes(pathname) ? "active" : ""}>
                        <Link to="/vehicle" data-font-family="sans-cond" data-uppercase data-text-white data-letter-space="2">
                            <Navigation.Span aria-hidden="true">03 </Navigation.Span>
                            Technology
                        </Link>
                    </Navigation.ListItem>
                </Navigation.List>
            </Navigation.Navbar>
        </Header>
        </> 
     );
}
 
export default NavigationContainer