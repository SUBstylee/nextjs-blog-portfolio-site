import styles from '../../../styles/Footer.module.scss';
// social icons
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsDribbble} from 'react-icons/bs';
import {FaCodepen} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer} id='footer'>
      <a href="/" className={styles.footer__logo}>JJThrelfall</a>
      <ul className={styles.permalinks}>
        <li><a href="#">Back to top</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className={styles.footer__socials}>
        <a href="https://www.facebook.com/substylee" target='_blank' rel='noReferrer'><FaFacebookF/></a>
        <a href="https://www.instagram.com/jjthrelfall" target='_blank' rel='noReferrer'><FaInstagram/></a>
        <a href="https://twitter.com/jjthrelfall" target='_blank' rel='noReferrer'><FaTwitter/></a>
      </div>
      <div className={`${styles.footer__socials}`}>
        <a href="https://www.linkedin.com/in/jeremy-threlfall/" target='_blank' rel='noReferrer'><BsLinkedin/></a>
        <a href="https://github.com/SUBstylee" target='_blank' rel='noReferrer'><FaGithub/></a>
        <a href="https://dribbble.com/SUBstylee/collections" target='_blank' rel='noReferrer'><BsDribbble/></a>
        <a href="https://codepen.io/SUBstylee" target='_blank' rel='noReferrer'><FaCodepen/></a>
      </div>
      <div className={styles.footer__copyright}>
        <small>&copy; JJThrelfall - All rights reverved.</small>
      </div>
    </footer>
  );
};

export default Footer;