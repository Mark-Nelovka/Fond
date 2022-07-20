import Logo from "../images/ДАХ.jpg";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="Logo in footer" />
      </div>
      <ul className="footer_list">
        <li>
          <a href="tel:+380 63 258 3366">+380 63 258 3366</a>
        </li>
        <li>
          <a href="tel:+380 95 946 1585">+380 95 946 1585</a>
        </li>
      </ul>
      <ul className="footer_soc">
        <li>
          <a
            // className="phone"
            href="https://www.facebook.com/angelika.zayika.1"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            // className="phone"
            href="https://www.linkedin.com/in/angelika-zayika-832909130/"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            // className="phone"
            href="https://www.linkedin.com/company/86672521/admin/"
          >
            Fond
          </a>
        </li>
      </ul>
    </footer>
  );
}
