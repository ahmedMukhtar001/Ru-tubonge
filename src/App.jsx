import { useState } from 'react';
import './App.css'
import Navbar from './Navbar';
import SuggestionForm from './SuggestionForm';
import SuggestionList from './SuggestionList';
function Header() {
  return (
    <header>
      <h1>Ru Tubonge</h1>
      <p>Your digital sanctuary for sharing anonymous suggestions! Our platform provides a secure space for voicing your thoughts, ideas and concerns.</p>
    </header>
  );
}


function App() {

  const [suggestions, setSuggestions] = useState([]);

  const addSuggestion = (text) => {
    setSuggestions([...suggestions, { id: suggestions.length + 1, text }]);
  };

  return ( 
    <div>
      <Navbar/>
      <Header/>  
      <main>
        <div className="app-container">
            {/* <h1>Suggestion Box</h1> */}
            <SuggestionForm addSuggestion={addSuggestion} />
            <SuggestionList suggestions={suggestions} />
        </div>
      
      </main>
    </div>    
  )
}

export default App
