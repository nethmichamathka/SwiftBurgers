// pages/menu/burgers/index.tsx
import React from 'react';
import Link from 'next/link';

const Burgers = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#FDD365', padding: '0px' }}>
      {/* Navbar */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '30px 20px',
          backgroundColor: '#AE150D',
          color: '#fff',
        }}
      >
        <h1
          style={{
            fontSize: '30px',
            margin: '0',
            fontWeight: 'bold',
            fontFamily: "'Lobster', sans-serif",
          }}
        >
          Swift Burgers
        </h1>
        <p style={{ fontSize: '18px', margin: '0' }}>The tastiest burgers in town!</p>
      </header>

      <main style={{ marginTop: '30px', textAlign: 'center' }}>
        <h2
          style={{
            fontSize: '36px',
            color: '#3D5926',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          Burgers Menu
        </h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: '20px',
          }}
        >
          {/* Example Burger Item */}
          <div style={{ width: '250px', margin: '20px' }}>
            <img
              src="/burgers/hamburger.png"
              alt="Hamburger"
              style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            />
            <h3 style={{ color: '#3D5926', marginTop: '10px' }}>Hamburger</h3>
            <p style={{ color: '#AE150D', fontSize: '18px' }}>A tasty burger with all the fixings!</p>
          </div>

          {/* Add more burger items here */}
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          marginTop: '50px',
          padding: '70px 0',
          backgroundColor: '#AE150D',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <p>© 2024 Swizz Burgers. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Burgers;
