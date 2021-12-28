import TabNav from "../components/TabNav";
import { Main } from "../components/TabNav/styles/tabnavStyles";
import {Link, Outlet} from "react-router-dom"

const TabNavContainer = () => {
    return ( 
        <Main
        data-flex                             
        data-tab-list 
        data-underline-indicators 
        data-destination-tabs
        >
            <TabNav.Button 
                aria-selected="true"
                data-uppercase 
                data-font-family="sans-cond" 
                data-bg-dark
                data-letter-space="2"
                ><Link data-no-underline data-text-accent to="/moon">Moon</Link></TabNav.Button>
            <TabNav.Button 
                aria-selected="false"
                data-uppercase 
                data-font-family="sans-cond" 
                data-text-accent
                data-bg-dark
                data-letter-space="2"
                ><Link data-no-underline data-text-accent to="/mars">Mars</Link></TabNav.Button>
            <TabNav.Button 
                aria-selected="false"
                data-uppercase 
                data-font-family="sans-cond"
                data-text-accent
                data-bg-dark
                data-letter-space="2"
                ><Link data-no-underline data-text-accent to="/europa">Europa</Link>
            </TabNav.Button>
            <TabNav.Button 
                aria-selected="false"
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