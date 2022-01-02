import {useNavigate, Outlet, useLocation} from "react-router-dom"
import CircleTabs from "../components/CircleTabs/index.js";


const CircleTabsContainer = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()

    return ( 
        <>
            <CircleTabs.Button  className={pathname === "/vehicle" ? "active-circle": ""} onClick={() => navigate("/vehicle")}>1</CircleTabs.Button>
            <CircleTabs.Button className={pathname === "/spaceport" ? "active-circle": ""} onClick={() => navigate("/spaceport")}>2</CircleTabs.Button>
            <CircleTabs.Button className={pathname === "/capsule" ? "active-circle": ""} onClick={() => navigate("/capsule")}>3</CircleTabs.Button>
            <Outlet />
        </>
     );
}
 
export default CircleTabsContainer;