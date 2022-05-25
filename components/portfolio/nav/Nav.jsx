import styles from '../../../styles/Nav.module.scss';

import {AiOutlineHome,AiOutlineUser,AiOutlineCode,AiOutlineMessage} from 'react-icons/ai';
// import {RiServiceLine} from 'react-icons/ri';
import {VscNotebook} from 'react-icons/vsc';
import {IoIosPeople} from 'react-icons/io';
import {GiFootprint} from 'react-icons/gi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');

  return (
    <nav className={styles.nav}>
      <a 
        href="#header"
        onClick={()=>setActiveNav('#')}
        className={activeNav==='#'?styles.active:''}><AiOutlineHome/></a>
      <a 
        href="#about"
        onClick={()=>setActiveNav('#about')}
        className={activeNav==='#about'?styles.active:''}><AiOutlineUser/></a>
      <a 
        href="#experience"
        onClick={()=>setActiveNav('#experience')}
        className={activeNav==='#experience'?styles.active:''}><AiOutlineCode/></a>
      <a href="#portfolio"
        onClick={()=>setActiveNav('#portfolio')}
        className={activeNav==='#portfolio'?styles.active:''}><VscNotebook/></a>
      <a href="#testimonials"
        onClick={()=>setActiveNav('#testimonials')}
        className={activeNav==='#testimonials'?styles.active:''}><IoIosPeople/></a>
      <a href="#contact"
        onClick={()=>setActiveNav('#contact')}
        className={activeNav==='#contact'?styles.active:''}><AiOutlineMessage/></a>
      <a href="#footer"
        onClick={()=>setActiveNav('#footer')}
        className={activeNav==='#footer'?styles.active:''}><GiFootprint/></a>
    </nav>
  );
};

export default Nav;