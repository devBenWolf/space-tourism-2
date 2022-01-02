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
            <Route path="/"                     element={<HomeContainer />} />
            <Route path="/destination/moon"     element={<DestinationContainer />} />
            <Route path="/destination/mars"     element={<MarsContainer />} />
            <Route path="/destination/europa"   element={<EuropaContainer />} />
            <Route path="/destination/titan"    element={<TitanContainer />} />
            <Route path="/crew/commander"       element={<CrewContainer />} />
            <Route path="/crew/specialist"      element={<SpecialistContainer />} />
            <Route path="/crew/pilot"           element={<PilotContainer />} />
            <Route path="/crew/engineer"        element={<EngineerContainer />} />
            <Route path="/technology/vehicle"   element={<VehicleContainer />} />
            <Route path="/technology/spaceport" element={<SpacePortContainer />} />
            <Route path="/technology/capsule"   element={<CapsuleContainer />} />
          </Routes>
        </Layout>
      </Router>     
    </>
  );
}

export default App;
