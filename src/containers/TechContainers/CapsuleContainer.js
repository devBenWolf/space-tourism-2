import Tech from "../../components/Technology";
import { Main } from "../../components/Technology/styles/technologyStyles";
import CircleTabsContainer from "../CircleTabsContainer";



const CapsuleContainer = () => {
    return ( 
        <Main data-flow="3" style={{minHeight: "100vh"}}>
             <Tech.H1
                fontSize="var(--fs-500)"
                data-text-accent
                data-uppercase
                data-font-family="sands-cond"
                data-letter-space="1"
            >
                <Tech.Span
                    fontWeight="700" 
                    margin="0 1rem 0 0" 
                    textColor="hsl(var(--clr-white) / 0.3)"
                >03 </Tech.Span>Space Launch 101
            </Tech.H1>
            <Tech.Image data-tech-vehicle image="image-space-capsule" />
            <Tech.Div>
            <Tech.TabsContainer data-flex data-circle-indicators>
                <CircleTabsContainer />
            </Tech.TabsContainer>
            </Tech.Div>
            <Tech.Article data-flex flexDirection="column">
                <Tech.H2 fontSize="var(--fs-400)" data-font-family="sans-cond" data-uppercase data-text-accent>The terminology...</Tech.H2>
                <Tech.Sub fontSize="var(--fs-700)" data-font-family="serif" data-uppercase>space capsule</Tech.Sub>
                <Tech.Para fontSize="var(--fs-400)" data-text-accent>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. 
                It includes a space gym, cinema, and plenty of other activities to keep you entertained.</Tech.Para>
            </Tech.Article>
        </Main>
     );
}
 
export default CapsuleContainer;