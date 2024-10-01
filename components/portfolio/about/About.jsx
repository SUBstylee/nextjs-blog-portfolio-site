import styles from '../../../styles/About.module.scss'
import ME2 from '../../../public/jjt008.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about">
      <h5>Who Are You?</h5>
      <h2>About Me</h2>
      <div className={`${styles.about__container}`}>
        <div className={`${styles.about__me}`}>
          <Image
            src={ME2}
            alt="Me again"
            className={`${styles['about__me-image']}`}
            layout="fill"
            priority
          />
        </div>
        {/* <div className="about__me">
          <img src={ME2} alt="Me again" className='about__me-image' />
        </div> */}
        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <FaAward className={styles.about__icon} />
              <h5>Experience</h5>
              <small>7+ Years Work</small>
            </article>
            <article className={styles.about__card}>
              <FiUsers className={styles.about__icon} />
              <h5>Clients</h5>
              <small>15+ Worldwide</small>
            </article>
            <article className={styles.about__card}>
              <VscFolderLibrary className={styles.about__icon} />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            Hi, I'm Jeremy. I'm an American Software Developer currently based
            in Taiwan. I mainly work with clients based in the United States,
            and am willing to relocate if the right opportunity presents itself.
            I am not limited to that region however, so no matter where you are,
            feel free to contact me to discuss your project details. My hours
            and rates are highly flexible, and are decided on a case by case
            basis.
          </p>
          <p>
            I have a diverse set of <a href="#experience">skills</a> and am
            always ready to learn whatever it takes to get the job done
            correctly. I work primarily with the technologies listed below, but
            am by no means limited to them. I work on every aspect of web
            development, from concept to deployment. Whether you need help with
            front-end, back-end, UI/UX, editing photos, etc., I am ready to take
            on the challenge.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk!
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
