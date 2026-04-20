import './App.css'
import ReportsCard from './Components/ReportsCard/ReportsCard'
import MilestonesCard from './Components/MilestonesCard/MilestonesCard'
import EnrichmentCard from './Components/EnrichmentCard/EnrichmentCard'
import CRMCard from './Components/CRMCard/CRMCard'

function App() {
  return (
    <div className="app">
      <div className="column columnLeft">
        <ReportsCard />
        <MilestonesCard />
      </div>
      <div className="column columnRight">
        <EnrichmentCard />
        <CRMCard />
      </div>
    </div>
  )
}

export default App
