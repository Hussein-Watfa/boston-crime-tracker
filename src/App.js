import './App.css';
import BostonMap from './components/BostonMap';
import Results from './components/Results';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <BostonMap/>
      <Results/>
    </div>
  );
}

export default App;
