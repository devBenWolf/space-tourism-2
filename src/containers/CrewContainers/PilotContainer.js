import { Main } from "../../components/Crew/styles/crewStyles";
import Crew from "../../components/Crew"
import DotContainer from "../DotContainer";

const PilotContainer = () => {
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

            <Crew.Image src={`/assets/crew/image-victor-glover.png`} alt="Victor Glover" data-crew-image />
            <DotContainer />
            <Crew.Article data-crew-content data-font-family="serif">
                <Crew.H2 fontSize="var(--fs-600)" data-uppercase>Pilot</Crew.H2>
                <Crew.H1 fontSize="var(--fs-700)" data-text-white data-uppercase>Victor Glover</Crew.H1>
                <Crew.Para fontSize="var(--fs-400)" data-text-accent>
                Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. 
                Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member
                 of Expedition 64, and served as a station systems flight engineer.
                </Crew.Para>
            </Crew.Article>

        </Main>
     );
}
 
export default PilotContainer