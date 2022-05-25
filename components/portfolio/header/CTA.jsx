import styles from '../../../styles/Header.module.scss';

const CTA = () => {
  return (
    <div className={styles.cta}>
        <a href='JeremyThrelfall.pdf' download='JJThrelfall.pdf' className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA