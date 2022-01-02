import { Div } from "../components/Dots/styles/dotStyles";
import Dots from "../components/Dots"
import {Link, Outlet, useLocation} from "react-router-dom"


const DotContainer = () => {
    const {pathname} = useLocation()

    return ( 
        <Div data-dot-indicators data-flex data-crew-tabs>
            <Link to="/crew/commander" className={pathname === "/crew/commander" ? "active-dot": ""}><Dots.Button style={{display: "none"}}><Dots.Span data-sr-only>commander</Dots.Span></Dots.Button></Link>
            <Link to="/crew/specialist" className={pathname === "/crew/specialist" ? "active-dot": ""}><Dots.Button style={{display: "none"}}><Dots.Span data-sr-only>/specialist</Dots.Span></Dots.Button></Link>
            <Link to="/crew/pilot" className={pathname === "/crew/pilot" ? "active-dot": ""}><Dots.Button style={{display: "none"}}><Dots.Span data-sr-only>pilot</Dots.Span></Dots.Button></Link>
            <Link to="/crew/engineer" className={pathname === "/crew/engineer" ? "active-dot": ""}><Dots.Button style={{display: "none"}}><Dots.Span data-sr-only>engineer</Dots.Span></Dots.Button></Link>

            <Outlet />
        </Div>
     );
}

 
export default DotContainer;