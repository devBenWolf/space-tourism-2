import {Link} from "react-router-dom"
import Home from "../components/Home";
import { Main } from "../components/Home/styles/homeStyles";

const HomeContainer = () => {
    return ( 
        <>
            <Main data-grid-container data-grid-container--home style={{minHeight: "100vh"}}>
                <Home.Div style={{marginTop: "14rem"}}>
                    <Home.H1 
                        fontSize="var(--fs-500)"
                        data-text-accent
                        data-uppercase
                        data-font-family="sands-cond"
                        data-letter-space="1"
                    >So, you want to travel to  
                    <Home.Span
                        display="block"
                        margin="-2rem 0"
                        fontSize="var(--fs-900)"
                        data-font-family="serif"
                        data-text-white
                    >Space</Home.Span>
                    </Home.H1>
                    <Home.Para 
                        padding="0"
                        margin="0"
                        fontSize="var(--fs-400)"
                    >
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </Home.Para>
                </Home.Div>
                <Home.Div>
                    <Home.LargeButton 
                        padding="5rem"
                        data-bg-white
                    >
                        <Link 
                        to="#" 
                        data-text-dark
                        data-large-button-link
                        data-font-family="serif" 
                        data-uppercase>Explore</Link></Home.LargeButton>
                </Home.Div>
            </Main>
        </>
     );
}
 
export default HomeContainer;