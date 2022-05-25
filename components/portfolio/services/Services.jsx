import styles from '../../../styles/Services.module.scss';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className={`port__container ${styles.services__container}`}>
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>UI/UX</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <BiCheck className={styles['service__list-icon']}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
            </li>
            <li>
              <BiCheck className={styles['service__list-icon']}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
            </li>
            <li>
              <BiCheck className={styles['service__list-icon']}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
            </li>
            <li>
              <BiCheck className={styles['service__list-icon']}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
            </li>
            <li>
              <BiCheck className={styles['service__list-icon']}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Web Development</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <BiCheck className={styles['service__list-icon']}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
            </li>
            <li>
              <BiCheck className={styles['service__list-icon']}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
            </li>
            <li>
              <BiCheck className={styles['service__list-icon']}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
            </li>
            <li>
              <BiCheck className={styles['service__list-icon']}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
            </li>
            <li>
              <BiCheck className={styles['service__list-icon']}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
            </li>
            <li>
              <BiCheck className={styles['service__list-icon']}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
            </li>
          </ul>
        </article>
        {/* End of WebDev */}
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Content Creation</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <BiCheck className={styles['service__list-icon']}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
            </li>
            <li>
              <BiCheck className={styles['service__list-icon']}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
            </li>
            <li>
              <BiCheck className={styles['service__list-icon']}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
            </li>
            <li>
              <BiCheck className={styles['service__list-icon']}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
            </li>
            <li>
              <BiCheck className={styles['service__list-icon']}/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  );
};

export default Services;