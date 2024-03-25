// App.js
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import SuggestionForm from "./SuggestionForm";
import SuggestionList from "./SuggestionList";
import { Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

function Header() {
  return (
    <header>
      <h1>Ru Tubonge</h1>
      <p>
        Your digital sanctuary for sharing anonymous suggestions! Our platform
        provides a secure space for voicing your thoughts, ideas and concerns.
      </p>
    </header>
  );
}

function App() {
  const [suggestions, setSuggestions] = useState([]);
  const [user, setUser] = useState(null);

  const addSuggestion = (text) => {
    setSuggestions([...suggestions, { id: suggestions.length + 1, text }]);
  };

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("User has successfully logged out")
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      <Header />
      <div className="home">
        <Routes>
          <Route path="/" element={<SuggestionForm user={user} addSuggestion={addSuggestion} />} />
          <Route path="/sign_in" element={<SignIn />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
