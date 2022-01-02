import Destination from "../../components/Destination";
import { Main } from "../../components/Destination/styles/destinationStyles";
import TabNavContainer from "../TabNavContainer";


const MarsContainer = () => {
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
                <Destination.Image src={`./assets/destination/image-mars.png`} alt="mars" data-destination-image />
                <TabNavContainer />
                <Destination.Article data-destination-content>
                    <Destination.H1 
                        fontSize="var(--fs-800)" 
                        data-font-family="serif" 
                        data-uppercase
                    >Mars</Destination.H1>
                    <Destination.Para                        
                        padding= "0 0 2rem 0"
                        margin="0"
                        fontSize="var(--fs-400)"
                        data-text-accent          
                    >                        
                        Don’t forget to pack your hiking boots. You’ll need them to tackle 
                        Olympus Mons, the tallest planetary mountain in our solar 
                        system. It’s two and a half times the size of Everest!
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
                                >225 mil. km</Destination.Para>
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
                                >9 months</Destination.Para>
                            </Destination.Div>
                        </Destination.Div>
                </Destination.Article>
            </Main>
        </>
     );
}
 
export default MarsContainer;