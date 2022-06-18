import logo from './logo.svg';
import './App.css';
import MyComponent from './component/MyComponent';
import CarComponent from './component/CarComponent';
import CalculateBalance from './component/ReactAssignment';

function App() {
  return (
    <div className="App">
      
        <MyComponent />
        <CarComponent origin="US" />
        <CalculateBalance />
       
       
          </div>
  );
}

export default App;
