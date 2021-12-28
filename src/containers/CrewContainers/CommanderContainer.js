import { Main } from "../../components/Crew/styles/crewStyles";
import Crew from "../../components/Crew"
import DotContainer from "../DotContainer";

const CommanderContainer = () => {
    return ( 
        <Main data-grid-container data-grid-container--crew data-flow="3" style={{minHeight: "100vh"}}>
            <Crew.H1
                fontSize="var(--fs-500)"
                data-text-accent
                data-uppercase
                data-font-family="sands-cond"
                data-letter-space="1"
                data-crew-title
                style={{marginTop: "10rem"}}
            >
                <Crew.Span
                    fontWeight="700" 
                    margin="0 1rem 0 0" 
                    textColor="hsl(var(--clr-white) / 0.3)"
                >02 </Crew.Span>Meet your crew
            </Crew.H1>
        
            <Crew.Image src={`/assets/crew/image-douglas-hurley.png`} alt="Douglas Hurley" data-crew-image />
            <DotContainer />
            <Crew.Article data-crew-content data-font-family="serif">
                <Crew.H2 fontSize="var(--fs-600)" data-uppercase>Commander</Crew.H2>
                <Crew.H1 fontSize="var(--fs-700)" data-text-white data-uppercase>Douglas Hurley</Crew.H1>
                <Crew.Para fontSize="var(--fs-400)" data-text-accent>
                Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former 
                NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
                </Crew.Para>
            </Crew.Article>

        </Main>
     );
}
 
export default CommanderContainer