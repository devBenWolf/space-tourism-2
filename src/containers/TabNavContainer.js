import {useState, useEffect} from "react"
import TabNav from "../components/TabNav";
import { Main } from "../components/TabNav/styles/tabnavStyles";
import {Link, Outlet, useLocation} from "react-router-dom"

const TabNavContainer = () => {
    const [moonHighlight, setMoonHighlight] = useState(null)
    const [marsHighlight, setMarsHighlight] = useState(false)
    const [europaHighlight, setEuropaHighlight] = useState(false)
    const [titanHighlight, setTitanHighlight] = useState(false)

    let {pathname} = useLocation() 


    const handleMoon = () => {
        setMoonHighlight(true)
        setMarsHighlight(false)
        setEuropaHighlight(false)
        setTitanHighlight(false)
        console.log(moonHighlight)
    }
    const handleMars = () => {
        setMoonHighlight(false)
        setMarsHighlight(true)
        setEuropaHighlight(false)
        setTitanHighlight(false)
    }
    const handleEuropa = () => {
        setMoonHighlight(false)
        setMarsHighlight(false)
        setEuropaHighlight(true)
        setTitanHighlight(false)
    }
    const handleTitan = () => {
        setMoonHighlight(false)
        setMarsHighlight(false)
        setEuropaHighlight(false)
        setTitanHighlight(true)
    }

    useEffect(() => {
        console.log(moonHighlight, marsHighlight, europaHighlight, titanHighlight)

    }, [moonHighlight, marsHighlight, europaHighlight, titanHighlight])

    return ( 
        <Main
        data-flex                             
        data-tab-list 
        data-underline-indicators 
        data-destination-tabs
        >
            <TabNav.Button 
                className ={pathname === "/moon" ? "active" : ""}
                data-uppercase 
                data-font-family="sans-cond" 
                data-bg-dark
                data-letter-space="2"
                ><Link data-no-underline data-text-accent to="/moon">Moon</Link></TabNav.Button>
            <TabNav.Button
                className = {pathname === "/mars" ? "active": ""}
                data-uppercase 
                data-font-family="sans-cond" 
                data-text-accent
                data-bg-dark
                data-letter-space="2"
                ><Link data-no-underline data-text-accent to="/mars">Mars</Link></TabNav.Button>
            <TabNav.Button
                className = {pathname === "/europa" ? "active": ""}
                data-uppercase 
                data-font-family="sans-cond"
                data-text-accent
                data-bg-dark
                data-letter-space="2"
                ><Link data-no-underline data-text-accent to="/europa">Europa</Link>
            </TabNav.Button>
            <TabNav.Button
                className = {pathname === "/titan" ? "active": ""}
                data-uppercase 
                data-font-family="sans-cond"
                data-text-accent
                data-bg-dark
                data-letter-space="2"
                ><Link data-no-underline data-text-accent to="/titan">Titan</Link>
            </TabNav.Button>
            <Outlet />
    </Main>
     );
}
 
export default TabNavContainer;