import React from 'react';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '0px', backgroundColor: '#FDD365' }}>
     <header
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 20px',
    backgroundColor: '#3D5926',
    color: '#fff',
  }}
>
  <h1 style={{ fontSize: '18px', margin: '0' }}>Swift Burgers</h1>
  <p style={{ fontSize: '18px', margin: '0' }}>The tastiest burgers in town!</p>
</header>



      {/* Main Content */}
<main style={{ marginTop: '30px' }}>
      <h1
  style={{
    fontSize: '78px',
    margin: '0',
    fontWeight: 'bold',
    color: '#AE150D',
    fontFamily: "'Merriweather', serif", // You can replace 'Lobster' with any preferred font
  }}
>
  Swizz Burgers
</h1>
<h2
  style={{
    fontSize: '24px',
    margin: '10px 0 0',
    fontWeight: 'normal',
    color: '#3D5926',
    fontFamily: "'Merriweather', serif", // Subheading font
  }}
>
  Your favorite destination for delicious bites!
</h2>

<div
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  }}
>
  {/* Burger Image */}
  <img
    src="/burgers/french.png"
    alt="chicken wing"
    style={{ width: '300px' }}
  />

  {/* Pizza Image */}
  <img
    src="/burgers/burger.png"
    alt="Delicious Pizza"
    style={{ width: '300px' }}
  />

  {/* French Fries Image */}
  <img
    src="/burgers/french.png"
    alt="Crispy French Fries"
    style={{ width: '300px' }}
  />
</div>



<div >
  {/* Heading */}
  <h2
    style={{
      color: '#3D5926',
      
      marginTop: '20px',
      fontSize: '36px', // Increased size
      fontWeight: 'bold', // Added bold for emphasis
      textAlign: 'center', // Centered for better layout
    }}
  >
    Fresh Ingredients, Unmatched Taste
  </h2>
  
  {/* Paragraph */}
  <p
    style={{
      color: '#AE150D',
      fontSize: '22px', // Increased size
      maxWidth: '800px', // Increased width for more content
      margin: '20px auto', // Added spacing and centralized alignment
      lineHeight: '1.8', // Increased line height for better readability
      textAlign: 'center', // Centered the text
    }}
  >
    At Swizz Burgers, we believe in creating the perfect burger experience, crafted with love and 
    the freshest ingredients. Visit us to savor our signature flavors!
  </p>
</div>




        {/* Call-to-Action Button */}
        <div style={{ marginTop: '40px' }}>
          <a 
            href="/menu" 
            style={{
              textDecoration: 'none',
              padding: '10px 20px',
              backgroundColor: '#FC8F00',
              color: '#fff',
              fontSize: '18px',
              borderRadius: '5px',
              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
            }}
          >
            Explore Our Menu
          </a>
        </div>

        <div
  style={{
    position: 'relative', // Allows layering of the overlay and content
    padding: '200px',
    textAlign: 'center',
    margin: '50px auto',
    borderRadius: '10px', // Optional: Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden', // Ensures the overlay and content stay within the rounded corners
  }}
>
  {/* Background Image */}
  <div
    style={{
      backgroundImage: `url('/burgers/offer.jpg')`, // Correct path to your image
      backgroundSize: 'cover', // Ensures the image covers the container
      backgroundPosition: 'center', // Centers the image
      filter: 'brightness(60%)', // Darkens the image for better text visibility
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1, // Keeps the background behind the text
    }}
  ></div>

  {/* Offer Content */}
  <div
    style={{
      position: 'relative', // Places the content above the background
      zIndex: 2, // Ensures the content is above the background
      color: '#fff', // Ensures the text contrasts with the background
    }}
  >
    {/* Offer Heading */}
    <h2
      style={{
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '20px',
      }}
    >
      Special Offers
    </h2>

    {/* Offer Text */}
    <p
      style={{
        fontSize: '18px',
        lineHeight: '1.6',
        margin: '10px 0',
      }}
    >
      Grab the best deals now! Enjoy <strong>20% off</strong> on all items this weekend.
    </p>

    {/* Call-to-Action Button */}
    <a
      href="/offers"
      style={{
        
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#FC8F00', // Semi-transparent button
        color: '#fff',
        fontSize: '16px',
        fontWeight: 'bold',
        textDecoration: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
      }}
    >
      View Offers
    </a>
  </div>
</div>

<div
  style={{
    backgroundColor: '#FDEDD6', // Light yellow background
    padding: '80px',
    
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    
    margin: '50px auto',
  }}
>
  {/* Subscription Heading */}
  <h2
    style={{
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#AE150D',
      marginBottom: '10px',
    }}
  >
    Subscribe to Our Newsletter
  </h2>

  {/* Subscription Text */}
  <p
    style={{
      fontSize: '16px',
      color: '#3D5926',
      marginBottom: '20px',
    }}
  >
    Get exclusive offers, updates, and delicious recipes straight to your inbox!
  </p>

  {/* Subscription Form */}
  <form
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
    }}
  >
    <input
      type="email"
      placeholder="Enter your email"
      required
      style={{
        padding: '10px',
        borderRadius: '5px',
        fontSize: '14px',
        flex: '1',
        maxWidth: '300px',
      }}
    />
    <button
      type="submit"
      style={{
        padding: '10px 20px',
        backgroundColor: '#AE150D',
        color: '#fff',
        fontSize: '14px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
    
    >
      Subscribe
    </button>
  </form>
</div>




</main>

      {/* Footer */}
      <footer style={{ marginTop: '50px', padding: '70px 0', backgroundColor: '#3D5926', color: '#fff' }}>
        <p>© 2024 Swizz Burgers. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
