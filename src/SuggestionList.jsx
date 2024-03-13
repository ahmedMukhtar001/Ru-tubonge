// SuggestionList.js
import React from 'react';

function SuggestionList({ suggestions }) {
  return (
    <div>
      <h2 className='root'>Suggestions:</h2>
      {/* <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.id}>{suggestion.text}</li>
        ))}
      </ul> */}

      {suggestions.map(suggestion => (
        <div className="suggestion-preview" key={suggestion.id} >
          {/* <h2>{suggestion.title }</h2> */}
          <p> {suggestion.text }</p>
        </div>
      ))}
    </div>
  );
}

export default SuggestionList;
