import styles from '../../../styles/Header.module.scss';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsDribbble} from 'react-icons/bs';
import {FaCodepen} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className={styles.header__socials}>
        <a href="https://www.linkedin.com/in/jeremy-threlfall/" target='_blank' rel='noReferrer'><BsLinkedin/></a>
        <a href="https://github.com/SUBstylee" target='_blank' rel='noReferrer'><FaGithub/></a>
        <a href="https://dribbble.com/SUBstylee/collections" target='_blank' rel='noReferrer'><BsDribbble/></a>
        <a href="https://codepen.io/SUBstylee" target='_blank' rel='noReferrer'><FaCodepen/></a>
    </div>
  );
};

export default HeaderSocials;