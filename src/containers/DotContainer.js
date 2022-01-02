import { Div } from "../components/Dots/styles/dotStyles";
import Dots from "../components/Dots"
import {Link, Outlet, useLocation} from "react-router-dom"


const DotContainer = () => {
    const {pathname} = useLocation()

    return ( 
        <Div data-dot-indicators data-flex data-crew-tabs>
            <Link to="/commander" className={pathname === "/commander" ? "active-dot": ""}><Dots.Button style={{display: "none"}}><Dots.Span data-sr-only>commander</Dots.Span></Dots.Button></Link>
            <Link to="/specialist" className={pathname === "/specialist" ? "active-dot": ""}><Dots.Button style={{display: "none"}}><Dots.Span data-sr-only>/specialist</Dots.Span></Dots.Button></Link>
            <Link to="/pilot" className={pathname === "/pilot" ? "active-dot": ""}><Dots.Button style={{display: "none"}}><Dots.Span data-sr-only>pilot</Dots.Span></Dots.Button></Link>
            <Link to="/engineer" className={pathname === "/engineer" ? "active-dot": ""}><Dots.Button style={{display: "none"}}><Dots.Span data-sr-only>engineer</Dots.Span></Dots.Button></Link>

            <Outlet />
        </Div>
     );
}

 
export default DotContainer;