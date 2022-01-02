import {useNavigate, Outlet, useLocation} from "react-router-dom"
import CircleTabs from "../components/CircleTabs/index.js";


const CircleTabsContainer = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()

    return ( 
        <>
            <CircleTabs.Button  className={pathname === "/technology/vehicle" ? "active-circle": ""} onClick={() => navigate("/technology/vehicle")}>1</CircleTabs.Button>
            <CircleTabs.Button className={pathname === "/technology/spaceport" ? "active-circle": ""} onClick={() => navigate("/technology/spaceport")}>2</CircleTabs.Button>
            <CircleTabs.Button className={pathname === "/technology/capsule" ? "active-circle": ""} onClick={() => navigate("/technology/capsule")}>3</CircleTabs.Button>
            <Outlet />
        </>
     );
}
 
export default CircleTabsContainer;