import styles from '../../../styles/Header.module.scss';
import CTA from './CTA';
import ME from '../../../public/jjt002-1.png';
import HeaderSocials from './HeaderSocials';
import Image from 'next/image';

const Header = () => {
  return (
    <header id='header' className={styles.header}>
      <div className={`${styles.header__container}`}>
        <h5>Hello I'm</h5>
        <h1>Jeremy Threlfall</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className={styles.me}>
          <Image src={ME} alt="Me" />
        </div>
        <a href="#contact" className={styles.scroll__down}>Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;