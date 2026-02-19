import React from 'react';

const InfoScreen = () => {
  return (
    <div className="screen-container">
      <header className="header-section">
        <h1 className="screen-title">Welcome to the App</h1>
      </header>
      
      <main className="content-section">
        <p className="screen-description">
          This is where your description goes. You can explain the purpose of 
          this screen, provide instructions, or share important information 
          with your users in a clear and concise way.
        </p>
      </main>
    </div>
  );
};

export default InfoScreen;