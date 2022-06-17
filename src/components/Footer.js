import React from 'react';
import telegramIcon from '../images/telegram.svg'
import githubIcon from '../images/github-icon.svg'
import gmailIcon from '../images/gmail.svg'
import nameLogo from '../images/name-logo.svg'
function Footer() {
    return (
      <footer className="footer">
       <div className="footer__contacts">
         <ul className="footer__contacts-list">
           <li className="footer__contacts-list-item">
             <a className="footer__contacts-list-link" href="http://t.me/mitkaz7">
                <img src={telegramIcon} alt="telegram icon"/>
             </a>
            </li>
           <li className="footer__contacts-list-item">
             <a className="footer__contacts-list-link" href="https://github.com/MitkaZ7">
              <img src={githubIcon} alt="github icon"/>
             </a>
            </li>
            <li className="footer__contacts-list-item">
              <a className="footer__contacts-list-link" href="mailto:mitka.dev@gmail.com">
                <img src={gmailIcon} alt="gmail icon" />
              </a>
            </li>
         </ul>
       </div>
        <div className="footer__copyrights">
          <p className="footer__copyrights_text">&copy; {new Date().getFullYear()} Mitka.dev</p>
        </div>
       <div className="footer__logo">
         <img src={nameLogo} alt="logotype"/>
       </div>

     </footer>
    )
}
export default Footer;

