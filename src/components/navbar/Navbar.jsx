// import "./Navbar.css"
// import { useState } from "react"
// import { Link } from "react-router-dom"

// function Navbar() {
//   return (
//     <nav className="navbar-wrapper">
//       <div className="navbar-container">
//         {/* Left Column: Brand Logo */}
//         <div className="navbar-left">
//           <Link to="/" className="navbar-brand">
//             <h1>Cars<span>Nzuri</span></h1>
//           </Link>
//         </div>
        
//         {/* Right Column: Navigation Links */}
//         <div className="navbar-right">
//           <ul className="navbar-links">
//             <li><Link to="carsinstock">Cars In Stock</Link></li>
//             <li><Link to="incomingcars">Incoming Cars</Link></li>
//             <li><Link to="finance">Finance</Link></li>
//             <li><Link to="importservices">Import Services</Link></li>
//             <li><Link to="autocare">Auto Care</Link></li>
//             <li><Link to="contactus">Contact Us</Link></li>
            
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        {/* Left Column: Brand Logo */}
        <div className="navbar-left">
          <Link to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
            <h1>Cars<span>Nzuri</span></h1>
          </Link>
        </div>
        
        {/* Animated Mobile Hamburger Button */}
        <button 
          className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        {/* Right Column: Navigation Links Menu Overlay */}
        <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li style={{ "--item-index": 1 }}><Link to="carsinstock" onClick={toggleMenu}>Cars In Stock</Link></li>
            <li style={{ "--item-index": 2 }}><Link to="incomingcars" onClick={toggleMenu}>Incoming Cars</Link></li>
            <li style={{ "--item-index": 3 }}><Link to="finance" onClick={toggleMenu}>Finance</Link></li>
            <li style={{ "--item-index": 4 }}><Link to="importservices" onClick={toggleMenu}>Import Services</Link></li>
            <li style={{ "--item-index": 5 }}><Link to="autocare" onClick={toggleMenu}>Auto Care</Link></li>
            <li style={{ "--item-index": 6 }}><Link to="contactus" onClick={toggleMenu}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar