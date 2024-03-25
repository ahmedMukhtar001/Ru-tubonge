import { collection, getDocs, onSnapshot, orderBy, Timestamp } from "firebase/firestore";
import { db } from "./firebase";
import React, { useState, useEffect } from "react";

function SuggestionList() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "suggestions"), orderBy("timestamp", 'asc'));
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // Sort newData based on timestamp before setting it in state
        const sortedData = newData.sort((a, b) => a.timestamp - b.timestamp);
        setSuggestions(sortedData);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    const unsubscribe = onSnapshot(collection(db, "suggestions"), orderBy("timestamp", 'asc'), (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // Sort newData based on timestamp before setting it in state
      const sortedData = newData.sort((a, b) => b.timestamp - a.timestamp);
      setSuggestions(sortedData);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h2 className="root">Suggestions:</h2>
      {suggestions.map((suggestion) => (
        <div className="suggestion-preview" key={suggestion.id}>
          <p>{suggestion.text}</p>
          <p>Created at: {suggestion.timestamp && suggestion.timestamp instanceof Timestamp ? suggestion.timestamp.toDate().toLocaleString() : 'Unknown'}</p>
        </div>
      ))}
    </div>
  );
}

export default SuggestionList;
