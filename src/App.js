import { lazy } from 'react';

// import './App.css';
const main = lazy(()=>import('./pages/main/main'))
function App() {
  return (
    <div className="App">
      <main/>
    </div>
  );
}

export default App;
