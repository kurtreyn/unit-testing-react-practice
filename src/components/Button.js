import React, { useState } from 'react';

export default function Button() {
  const [showAnotherButton, setShowAnotherButton] = useState(false);
  return (
    <div>
      <button
        data-testid="button"
        onClick={() => setShowAnotherButton(!showAnotherButton)}
      >
        Click Here
      </button>
      {showAnotherButton && <button data-testid="button">Click Here</button>}
    </div>
  );
}
