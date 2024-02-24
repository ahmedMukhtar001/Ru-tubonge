// SuggestionList.jsx
import React from 'react';

const SuggestionList = ({ suggestions }) => {
  return (
    <ul>
      {suggestions.map((suggestion, index) => (
        <li key={index}>{suggestion}</li>
      ))}
    </ul>
  );
};

export default SuggestionList;
