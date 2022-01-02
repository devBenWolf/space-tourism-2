import Destination from "../../components/Destination";
import { Main } from "../../components/Destination/styles/destinationStyles";
import TabNavContainer from "../TabNavContainer";


const DestinationContainer = () => {
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
                    margin="1rem 0 0" 
                    textColor="hsl(var(--clr-white) / 0.3)"
                >01 </Destination.Span>Choose your destination</Destination.H1>
                <Destination.Image src={`./assets/destination/image-moon.png`} alt="moon" data-destination-image />
                
                <TabNavContainer />
                <Destination.Article data-destination-content>
                    <Destination.H1 
                        fontSize="var(--fs-800)" 
                        data-font-family="serif" 
                        data-uppercase
                    >Moon</Destination.H1>
                    <Destination.Para                        
                        padding= "0 0 2rem 0"
                        margin="0"
                        fontSize="var(--fs-400)"
                        data-text-accent          
                    >                        
                        See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                        regain perspective and come back refreshed. While you’re there, take in some history 
                        by visiting the Luna 2 and Apollo 11 landing sites.
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
                                >384,400 km</Destination.Para>
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
                                >3 days</Destination.Para>
                            </Destination.Div>
                        </Destination.Div>
                </Destination.Article>
            </Main>
        </>
     );
}
 
export default DestinationContainer;