import Design from "../components/Design";
import { Container } from "../components/Design/styles/designStyles";

const DesignContainer = () => {
    return ( 
        <Container data-container>
            <Design.H1>Design System</Design.H1>     
            <Design.Section 
                id="colors" 
                margin="4rem 0">
                <Design.H2>
                    <Design.Span 
                        fontWeight="700" 
                        margin="0 1rem 0 0" 
                        textColor="hsl(var(--clr-white) / 0.3)"
                    >01 </Design.Span>colors</Design.H2>
                <Design.Div data-flex>
                    <Design.Div flexGrow="1">
                        <Design.Div 
                            data-bg-dark 
                            data-text-white
                            padding="3rem 1rem 1rem"
                            border="1px solid white"
                            fontSize="var(--fs-400)"
                            data-font-family="serif"
                        >#0B0D17</Design.Div>
                        <Design.Para><Design.Span data-text-accent>RGB </Design.Span>11, 13 23</Design.Para>
                        <Design.Para><Design.Span data-text-accent>HSL </Design.Span>230, 35%, 7%</Design.Para>
                    </Design.Div>
                    <Design.Div
                        flexGrow="1"
                    >
                        <Design.Div 
                            data-bg-accent 
                            data-text-dark
                            padding="3rem 1rem 1rem"
                            border="1px solid white"
                            fontSize="var(--fs-400)"
                            data-font-family="serif"
                        >#D0D6F9</Design.Div>
                        <Design.Para><Design.Span data-text-accent>RGB </Design.Span>208, 214, 249</Design.Para>
                        <Design.Para><Design.Span data-text-accent>HSL </Design.Span>231, 77%, 90%</Design.Para>
                    </Design.Div>
                    <Design.Div
                        flexGrow="1"
                    >
                        <Design.Div 
                            data-bg-white 
                            data-text-dark
                            padding="3rem 1rem 1rem"
                            border="1px solid white"
                            fontSize="var(--fs-400)"
                            data-font-family="serif"
                        >#FFFFFF</Design.Div>
                        <Design.Para><Design.Span data-text-accent>RGB </Design.Span>255, 255, 255</Design.Para>
                        <Design.Para><Design.Span data-text-accent>HSL </Design.Span>0, 0%, 100%</Design.Para>
                    </Design.Div>
                </Design.Div>
            </Design.Section>


            <Design.Section 
                id="typography" 
                margin="4rem 0"
                >
                <Design.H2>
                    <Design.Span
                        margin="0 1rem 0 0"
                        fontWeight="700"
                        textColor="hsl(var(--clr-white) / 0.3)"
                    >02 </Design.Span>Typography</Design.H2>
                    <Design.Div data-flex>
                        <Design.SubSection flexBasis="100%" data-flow="small">
                            <Design.Div>
                                <Design.Para data-text-accent>Heading 1 - Bellefair Regular - 150px</Design.Para>
                                <Design.Para
                                    fontSize="var(--fs-800)"
                                    data-font-family="serif"
                                    margin="0"
                                    padding="0"
                                    data-uppercase
                                >Earth</Design.Para>
                            </Design.Div>
                            <Design.Div>
                                <Design.Para data-text-accent>Heading 2 - Bellefair Regular - 100px</Design.Para>
                                <Design.Para
                                    fontSize="var(--fs-700)"
                                    data-font-family="serif"
                                    margin="0"
                                    padding="0"
                                    data-uppercase
                                >Venus</Design.Para>
                            </Design.Div>
                            <Design.Div>
                                <Design.Para data-text-accent>Heading 3 - Bellefair Regular - 56px</Design.Para>
                                <Design.Para
                                    fontSize="var(--fs-600)"
                                    data-font-family="serif"
                                    margin="0"
                                    padding="0"
                                    data-uppercase
                                >Jupiter & Saturn</Design.Para>
                            </Design.Div>
                            <Design.Div>
                                <Design.Para data-text-accent>Heading 4 - Bellefair Regular - 32px</Design.Para>
                                <Design.Para
                                    fontSize="var(--fs-500)"
                                    data-font-family="serif"
                                    data-uppercase
                                >Uranus, Neptune & Venus</Design.Para>
                            </Design.Div>
                            <Design.Div>
                                <Design.Para data-text-accent>Heading 5 - Barlow Condensed Regular - 28px - 4.75px Character Space</Design.Para>
                                <Design.Para
                                    fontSize="var(--fs-400)"
                                    data-text-accent
                                    data-font-family="serif"
                                    data-uppercase
                                    data-letter-space="1"
                                >So you want to travel to space...</Design.Para>
                            </Design.Div>
                            <Design.Div>
                            </Design.Div>
                        </Design.SubSection>

                        <Design.SubSection flexBasis="100%" data-flow="large">
                            <Design.Div>
                                <Design.Para data-text-accent>Subheading 1 - Bellefair Regular - 28px</Design.Para>
                                <Design.Para 
                                    fontSize="var(--fs-500)"
                                    margin="0"
                                    padding="0" 
                                    data-font-family="serif" 
                                    data-uppercase>384,400 km</Design.Para>
                            </Design.Div>
                            <Design.Div>
                                <Design.Para data-text-accent>Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</Design.Para>
                                <Design.Para 
                                    fontSize="var(--fs-200)"
                                    margin="0"
                                    padding="0"
                                    data-font-family="sans-cond" 
                                    data-uppercase data-letter-space="3">Avg. Distance</Design.Para>
                            </Design.Div>
                            <Design.Div>
                                <Design.Para data-text-accent>Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</Design.Para>
                                <Design.Para 
                                    fontSize="var(--fs-300)"
                                    margin="0"
                                    padding="0"
                                    data-font-family="sans-cond" 
                                    data-uppercase data-letter-space="2">Europa</Design.Para>
                            </Design.Div>
                            <Design.Div>
                                <Design.Para data-text-accent>Body Text</Design.Para>
                                <Design.Para
                                    margin="0"
                                    padding="0"
                                >
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. 
                                    In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, 
                                    eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                                    Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. 
                                    Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. 
                                    Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                                </Design.Para>
                            </Design.Div>
                        </Design.SubSection>
                    </Design.Div>
            </Design.Section>

            <Design.Section id="interactive" data-flow="">
                <Design.H2>
                    <Design.Span
                    margin="0 1rem 0 0"
                    fontWeight="700"
                    textColor="hsl(var(--clr-white) / 0.3)"
                    >03 </Design.Span>Interactive elements</Design.H2>

                    {/* Navigation */}
                    <Design.Div>
                        <Design.Nav>
                            <Design.List 
                                data-flex 
                                data-primary-navigation 
                                data-underline-indicators>
                                <Design.ListItem data-active>
                                    <Design.Link 
                                        href="#" 
                                        data-uppercase 
                                        data-text-white 
                                        data-letter-space="2"
                                    >
                                        <Design.Span>01 </Design.Span>
                                        Active
                                    </Design.Link>
                                </Design.ListItem>
                                <Design.ListItem>
                                    <Design.Link 
                                        href="#" 
                                        data-uppercase 
                                        data-text-white 
                                        data-letter-space="2"
                                    >
                                        <Design.Span>02 </Design.Span>
                                        Hovered
                                    </Design.Link>
                                </Design.ListItem>
                                <Design.ListItem>
                                    <Design.Link 
                                        href="#" 
                                        data-uppercase 
                                        data-text-white 
                                        data-letter-space="2"
                                    ><Design.Span>03 </Design.Span>
                                        Idle
                                    </Design.Link>
                                </Design.ListItem>
                            </Design.List>
                        </Design.Nav>
                    </Design.Div>

                {/* Button */}
                <Design.Div data-flex>
                    <Design.Div margin="5rem 0 0 0">
                        <Design.LargeButton 
                            href="#"
                            fontSize="var(--fs-500)"
                            data-font-family="serif"
                            data-bg-white
                            data-text-dark
                            data-uppercase
                        >Explore</Design.LargeButton>
                    </Design.Div>                
                    <Design.Div margin=" 0 0 50vh 0" data-flow="large">

                        {/* Tabs */}
                        <Design.Div 
                            data-tab-list 
                            data-underline-indicators 
                            data-flex
                        >
                            <Design.Button 
                                aria-selected="true"
                                data-uppercase 
                                data-font-family="sans-cond" 
                                data-text-accent
                                data-bg-dark
                                data-letter-space="2"
                                >Moon</Design.Button>
                            <Design.Button 
                                aria-selected="false"
                                data-uppercase 
                                data-font-family="sans-cond" 
                                data-text-accent
                                data-bg-dark
                                data-letter-space="2"
                                >Mars</Design.Button>
                            <Design.Button 
                                aria-selected="false"
                                data-uppercase 
                                data-font-family="sans-cond"
                                data-text-accent
                                data-bg-dark
                                data-letter-space="2"
                                >Europa
                            </Design.Button>
                        </Design.Div>


                    {/* Dots */}
                    <Design.Div data-dot-indicators data-flex>
                        <Design.Button aria-selected="true"><Design.Span data-sr-only>Slide title</Design.Span></Design.Button>
                        <Design.Button aria-selected="false"><Design.Span data-sr-only>Slide title</Design.Span></Design.Button>
                        <Design.Button aria-selected="false"><Design.Span data-sr-only>Slide title</Design.Span></Design.Button>
                    </Design.Div>
                    </Design.Div>

                    {/* Circles */}
                    <Design.Div>
                        <Design.Button aria-selected="true"></Design.Button>
                        <Design.Button aria-selected="false"></Design.Button>
                        <Design.Button aria-selected="false"></Design.Button>
                    </Design.Div>
                </Design.Div>
            </Design.Section>
        </Container>
     );
}
 
export default DesignContainer;