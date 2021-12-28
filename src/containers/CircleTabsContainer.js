import {Link, useNavigate, Outlet} from "react-router-dom"
import CircleTabs from "../components/CircleTabs/index.js";


const CircleTabsContainer = () => {
    const navigate = useNavigate()
    return ( 
        <>
            <CircleTabs.Button aria-selected="true" onClick={() => navigate("/vehicle")}>1</CircleTabs.Button>
            <CircleTabs.Button aria-selected="false" onClick={() => navigate("/spaceport")}>2</CircleTabs.Button>
            <CircleTabs.Button aria-selected="false" onClick={() => navigate("/capsule")}>3</CircleTabs.Button>
            <Outlet />
        </>
     );
}
 
export default CircleTabsContainer;