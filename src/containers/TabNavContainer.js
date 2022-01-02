import TabNav from "../components/TabNav";
import { Main } from "../components/TabNav/styles/tabnavStyles";
import {Link, Outlet, useLocation} from "react-router-dom"

const TabNavContainer = () => {

    let {pathname} = useLocation()

    return ( 
        <Main
        data-flex                             
        data-tab-list 
        data-underline-indicators 
        data-destination-tabs
        >
            <TabNav.Button 
                className ={pathname === "/destination/moon" ? "active" : ""}
                data-uppercase 
                data-font-family="sans-cond" 
                data-bg-dark
                data-letter-space="2"
                ><Link data-no-underline data-text-accent to="/destination/moon">Moon</Link></TabNav.Button>
            <TabNav.Button
                className = {pathname === "/destination/mars" ? "active": ""}
                data-uppercase 
                data-font-family="sans-cond" 
                data-text-accent
                data-bg-dark
                data-letter-space="2"
                ><Link data-no-underline data-text-accent to="/destination/mars">Mars</Link></TabNav.Button>
            <TabNav.Button
                className = {pathname === "/destination/europa" ? "active": ""}
                data-uppercase 
                data-font-family="sans-cond"
                data-text-accent
                data-bg-dark
                data-letter-space="2"
                ><Link data-no-underline data-text-accent to="/destination/europa">Europa</Link>
            </TabNav.Button>
            <TabNav.Button
                className = {pathname === "/destination/titan" ? "active": ""}
                data-uppercase 
                data-font-family="sans-cond"
                data-text-accent
                data-bg-dark
                data-letter-space="2"
                ><Link data-no-underline data-text-accent to="/destination/titan">Titan</Link>
            </TabNav.Button>
            <Outlet />
    </Main>
     );
}
 
export default TabNavContainer;