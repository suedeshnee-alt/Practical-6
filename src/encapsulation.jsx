import React from 'react';

const ScreenLayout = () => {
  return (
    <div style={styles.container}>
      {/* Top Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>Main Screen Title</h1>
      </header>

      {/* Second Top / Description Section */}
      <section style={styles.descriptionSection}>
        <p style={styles.description}>
          This is the description paragraph located directly below the title. 
          It serves as the "second top" element of your layout, providing 
          context or instructions for the user.
        </p>
      </section>

      {/* Main Content Area */}
      <main style={styles.content}>
        <p>Rest of your screen content goes here...</p>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: 'sans-serif',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  header: {
    borderBottom: '1px solid #ddd',
    marginBottom: '10px',
  },
  title: {
    fontSize: '2rem',
    margin: '0 0 10px 0',
    color: '#333',
  },
  descriptionSection: {
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.5',
    color: '#666',
    margin: 0,
  },
  content: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
};

export default ScreenLayout;