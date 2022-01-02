import Destination from "../../components/Destination";
import { Main } from "../../components/Destination/styles/destinationStyles";
import TabNavContainer from "../TabNavContainer";


const EuropaContainer = () => {
    return ( 
        <>
            <Main data-grid-container data-grid-container--destination data-flow="3" style={{minHeight: "100vh"}}>
                <Destination.H1
                    fontSize="var(--fs-500)"
                    data-text-accent
                    data-uppercase
                    data-font-family="sands-cond"
                    data-letter-space="1"
                    data-destination-title
                    style={{marginTop: "10rem"}}
                >
                <Destination.Span
                    fontWeight="700" 
                    margin="0 1rem 0 0" 
                    textColor="hsl(var(--clr-white) / 0.3)"
                >01 </Destination.Span>Choose your destination</Destination.H1>
                <Destination.Image src={`./assets/destination/image-europa.png`} alt="europa" data-destination-image />
                
                <TabNavContainer />
                <Destination.Article data-destination-content>
                    <Destination.H1 
                        fontSize="var(--fs-800)" 
                        data-font-family="serif" 
                        data-uppercase
                    >Europa</Destination.H1>
                    <Destination.Para                        
                        padding= "0 0 2rem 0"
                        margin="0"
                        fontSize="var(--fs-400)"
                        data-text-accent          
                    >                        
                        The smallest of the four Galilean moons orbiting Jupiter, Europa 
                        is a winter lover’s dream. With an icy surface, it’s perfect for a bit 
                        of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                    </Destination.Para>
                    <hr style={{borderColor: "hsl(var(--clr-white) / .25)"}} />
                        <Destination.Div data-flex flexDirection="column" padding= "2rem 0 0 0">
                            <Destination.Div data-destination-travel>
                                <Destination.H1 
                                    fontSize="var(--fs-200)"
                                    data-text-accent
                                    data-font-family="sans-cond"
                                    data-uppercase
                                    padding="0"
                                    margin="0"
                                >Avg. Distance</Destination.H1>
                                <Destination.Para 
                                    fontSize="var(--fs-perm)"
                                    data-font-family="serif"
                                    data-uppercase
                                    padding="0"
                                    margin="0"
                                >628 mil. km</Destination.Para>
                            </Destination.Div>
                            <Destination.Div>
                                <Destination.H1 
                                    fontSize="var(--fs-200)"
                                    data-text-accent
                                    data-font-family="sands cond"
                                    data-uppercase
                                    padding="0"
                                    margin="0"
                                >Est. travel time</Destination.H1>
                                <Destination.Para 
                                    fontSize="var(--fs-perm)"
                                    data-font-family="serif"
                                    data-uppercase
                                    padding="0"
                                    margin="0"
                                >3 years</Destination.Para>
                            </Destination.Div>
                        </Destination.Div>
                </Destination.Article>
            </Main>
        </>
     );
}
 
export default EuropaContainer;