import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import DestinationContainer from "./containers/DestinationContainers/DestinationContainer";
import HomeContainer from "./containers/HomeContainer";
import MarsContainer from "./containers/DestinationContainers/MarsContainer";
import EuropaContainer from "./containers/DestinationContainers/EuropaContainer";
import { GlobalStyles } from "./globalStyles";
import TitanContainer from "./containers/DestinationContainers/TitanContainer";
import CrewContainer from "./containers/CrewContainers/CommanderContainer";
import SpecialistContainer from "./containers/CrewContainers/SpecialistContainer";
import PilotContainer from "./containers/CrewContainers/PilotContainer";
import EngineerContainer from "./containers/CrewContainers/EngineerContainer";
import VehicleContainer from "./containers/TechContainers/VehicleContainer";
import SpacePortContainer from "./containers/TechContainers/SpacePortContainer";
import CapsuleContainer from "./containers/TechContainers/CapsuleContainer";


function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="moon" element={<DestinationContainer />} />
            <Route path="mars" element={<MarsContainer />} />
            <Route path="europa" element={<EuropaContainer />} />
            <Route path="mars" element={<MarsContainer />} />
            <Route path="titan" element={<TitanContainer />} />
            <Route path="commander" element={<CrewContainer />} />
            <Route path="specialist" element={<SpecialistContainer />} />
            <Route path="pilot" element={<PilotContainer />} />
            <Route path="engineer" element={<EngineerContainer />} />
            <Route path="vehicle" element={<VehicleContainer />} />
            <Route path="spaceport" element={<SpacePortContainer />} />
            <Route path="capsule" element={<CapsuleContainer />} />
          </Routes>
        </Layout>
      </Router>     
    </>
  );
}

export default App;
