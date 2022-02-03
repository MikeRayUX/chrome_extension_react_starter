// import logo from './logo.svg';
import React, { useEffect, useState, useContext, useRef } from 'react';
import './tailwind.css';

function App() {
  return (
    // outer container (for use when developing in browser via yarn start)
    <div className="h-screen w-full flex justify-center items-center bg-gray-300">
      {/* extension main container at full height 580x360 */}
      <div
        style={{ width: 360, height: 580, backgroundColor: '#282c34' }}
        className="App"
      >
        <h1>hello world</h1>
      </div>
    </div>
  );
}

export default App;
