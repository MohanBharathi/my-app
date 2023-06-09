import logo from './logo.svg';
import './App.css';
import MultiSelect from './MultiSelect/MultiSelect';

function App() {
  return (
    <div className="App">
      <MultiSelect value={
        [1,2,3,4,5]
      }/>
    </div>
  );
}

export default App;
