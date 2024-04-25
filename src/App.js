import './App.css';
import BostonMap from './components/BostonMap';
import Results from './components/Results';
import TopBar from './components/TopBar';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <TopBar/>
        <BostonMap/>
        <Results/>
      </div>
    </DataProvider>
  );
}

export default App;
