import './App.css'
import ReportsCard from './Components/ReportsCard/ReportsCard'
import MilestonesCard from './Components/MilestonesCard/MilestonesCard'
import EnrichmentCard from './Components/EnrichmentCard/EnrichmentCard'
import CRMCard from './Components/CRMCard/CRMCard'

function App() {
  return (
    <div className="app">
      <ReportsCard />
      <div className="row">
        <MilestonesCard />
        <div className="stack">
          <EnrichmentCard />
          <CRMCard />
        </div>
      </div>
    </div>
  )
}

export default App
