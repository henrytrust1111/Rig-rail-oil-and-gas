import "../Style/footer.css"
const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__top">
          <div className="footer__top--container">
            <div className="footer__title">About</div>
            <div className="footer__content">
              <a href="/company" className="footer__content--text">
               Our Company
              </a>
              <a href="/whoWeAre" className="footer__content--text">Who We Are</a>
              <a href="/whatWeDo" className="footer__content--text">What we Do</a>
            </div>
          </div>

          <div className="footer__top--container">
            <div className="footer__title">Our Service</div>
            <div className="footer__content">
              <a href="/lhs" className="footer__content--text">
              Logistics & Haulage Services
              </a>
              <a href="/offshore" className="footer__content--text">
              Offshore Intake/Offtake Facilities
              </a>
              <a href="/ppm" className="footer__content--text">
              Petroleum Product Marketing
              </a>
              <a href="/storage" className="footer__content--text">
              Storage Terminal Facilities
              </a>
              {/* <p className="footer__content--text"></p> */}
            </div>
          </div>

          <div className="footer__top--container">
            <div className="footer__title">Support</div>
            <div className="footer__content">
              <a href="/privacy&policy" className="footer__content--text">Contact Us</a>
              {/* <p className="footer__content--text">Terms And conditions</p> */}
            </div>
          </div>
        </div>
        <div className="footer__down">
          <a href="/" className="footer__logo">
            <p className="speedyTrans__newLogo headerh3">Rigrail Oil & Gas</p>
            {/* <img
              src="https://translang.axiomthemes.com/wp-content/uploads/2017/03/logo.png"
              className="Mainheaderlogoimag"
            /> */}
          </a>
        </div>
        <div className="footer__footer">
          <p className="footer__footer--text">© 2023 Rigrail Oil & Gas.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
