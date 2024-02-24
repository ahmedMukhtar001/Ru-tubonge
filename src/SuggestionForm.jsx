// SuggestionForm.jsx
import React, { useState } from 'react';

const SuggestionForm = ({ onSuggestionSubmit }) => {
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!suggestion.trim()) return;
    onSuggestionSubmit(suggestion);
    setSuggestion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className='text-area'
        value={suggestion}
        onChange={(e) => setSuggestion(e.target.value)}
        placeholder="Enter your suggestion..."
      />
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default SuggestionForm;
