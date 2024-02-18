import './App.css'
import Navbar from './Navbar';
function Header() {
  return (
    <header>
      <h1>Ru Tubonge</h1>
      <p>Your digital sanctuary for sharing anonymous suggestions! Our platform provides a secure space for voicing your thoughts, ideas and concerns.</p>
    </header>
  );
}


function App() {
  return ( 
    <div>
      <Navbar/>
      <Header/>  
      <main>
        
      </main>
    </div>    
  )
}

export default App
