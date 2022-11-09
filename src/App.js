import React from 'react';
import background from "./25501.jpg";
import './App.css';
import Forecast from "./components/forecast";
function App() {
  const myStyle={
    backgroundImage: `url(${background})`,
    height:'100vh',backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',};
 return (
   <div className="App" style={myStyle}>
     <header className="App-header">
       <h1>Sweater Weather</h1>
     </header>
     <main>
       <Forecast />
       
     </main>
     <footer>
       React App by Ivan Siat <br></br>
       <a href="https://www.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_8562848.htm#query=weather%20background&position=2&from_view=keyword">Image by starline</a> on Freepik
     </footer>
   </div>
 );
}
export default App;