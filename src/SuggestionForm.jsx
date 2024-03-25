// SuggestionForm.js
import React from 'react';
import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import SuggestionList from './SuggestionList';

function SuggestionForm({ addSuggestion, user }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      // If user is not logged in, handle accordingly (e.g., display a message or redirect to sign-in page)
      console.log('User is not logged in');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'suggestions'), {
        text: text,
        timestamp: serverTimestamp(),
      });
      console.log('Document written with ID: ', docRef.id);
      // Call the addSuggestion function if needed
      addSuggestion(text);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    setText('');
  };

  return (
    <section className="suggestions">
      {user ? (
        <form className="suggestion-form">
          <input
            type="text"
            placeholder="Enter your suggestion"
            className="text-area"
            value={text}
            onChange={handleChange}
          />
          <button className="add-suggestion" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      ) : (
        <p className='sign-in-command'>Please sign in to add a suggestion.</p>
      )}
      <SuggestionList />
    </section>
  );
}

export default SuggestionForm;
