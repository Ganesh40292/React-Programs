1)App.jsx

import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

function App() {

  const linkStyle = ({ isActive }) => ({
    margin: '0 10px',
    textDecoration: 'none',
    color: isActive ? 'blue' : 'black',
    fontWeight: isActive ? 'bold' : 'normal'
  });

  return (
    <div>

      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px'
        }}
      >

        <NavLink to="/" style={linkStyle} end>
          Home
        </NavLink>

        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>

        <NavLink to="/contact" style={linkStyle}>
          Contact
        </NavLink>

      </nav>

      <hr />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </div>
  );
}

export default App;

2) Main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

3) Home.jsx

import React from 'react';

function Home() {
  return <h2>Home Page</h2>;
}

export default Home;

4) About.jsx

import React from 'react';

function About() {
  return <h2>About Page</h2>;
}

export default About;

5) Contact.jsx

import React from 'react';

function Contact() {
  return <h2>Contact Page</h2>;
}

export default Contact;
