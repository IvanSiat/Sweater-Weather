import React from 'react';
import './App.css';
import Forecast from "./components/forecast";
function App() {
 return (
   <div className="App">
     <header className="App-header">
       <h1>Sweater Weather</h1>
     </header>
     <main>
       <Forecast />
     </main>
     <footer>
       React App by Ivan Siat
     </footer>
   </div>
 );
}
export default App;