import { Div } from "../components/Dots/styles/dotStyles";
import Dots from "../components/Dots"
import {Link, Outlet} from "react-router-dom"


const DotContainer = () => {
    return ( 
        <Div data-dot-indicators data-flex data-crew-tabs>
            <Link to="/commander" aria-selected="true"><Dots.Button style={{display: "none"}}><Dots.Span data-sr-only>commander</Dots.Span></Dots.Button></Link>
            <Link to="/specialist" aria-selected="false"><Dots.Button style={{display: "none"}}><Dots.Span data-sr-only>/specialist</Dots.Span></Dots.Button></Link>
            <Link to="/pilot" aria-selected="false"><Dots.Button style={{display: "none"}}><Dots.Span data-sr-only>pilot</Dots.Span></Dots.Button></Link>
            <Link to="/engineer" aria-selected="false"><Dots.Button style={{display: "none"}}><Dots.Span data-sr-only>engineer</Dots.Span></Dots.Button></Link>

            <Outlet />
        </Div>
     );
}

 
export default DotContainer;