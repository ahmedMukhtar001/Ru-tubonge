import React, { useState } from 'react';

function SuggestionForm({ addSuggestion }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addSuggestion(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your suggestion"
        className='text-area'
        value={text}
        onChange={handleChange}
      />
      {/* <button type="submit">Submit</button> */}
    </form>
  );
}

export default SuggestionForm;