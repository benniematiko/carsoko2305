import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* Top Row: Four Columns */}
        <div className="footer-top-row">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>Your premium marketplace for quality cars in Kenya, East Africa and beyond.</p>
          </div>
          
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Socials</h3>
            <ul>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#instagram">Instagram</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>Email: info@carnzuri.com</p>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="footer-bottom-row">
          <p>© 2026 CarNzuri. All Rights Reserved</p>
        </div>
      
      </div>
    </footer>
  )
}

export default Footer
