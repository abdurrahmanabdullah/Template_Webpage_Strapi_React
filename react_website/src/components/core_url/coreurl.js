import React from 'react';

function App() {
  const coreUrl = 'http://localhost:1339/api'; // Replace with your actual core URL

  return (
    <div>
      {/* Your React components that use the core URL */}
      <p>Core URL: {coreUrl}</p>
    </div>
  );
}

export default App;
