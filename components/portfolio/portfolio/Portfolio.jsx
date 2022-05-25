import styles from '../../../styles/Portfolio.module.scss';
import Image from 'next/image';
import GRAPPLER from '../../../public/g-with-_r_-solo-black.svg';
import CRYPTOTRACKER from '../../../public/cryptotracker.png';
import TAA from '../../../public/TAA-Logo-black-and-white.png';
import JOBLY from '../../../public/jobly.png';
import OMNI from '../../../public/omnifood.png';
import NATOURS from '../../../public/natours.png';
import TRILLO from '../../../public/trillo.png';

const portData=[
  {
    id:1,
    image: TAA,
    imgAlt: 'TAA Logo',
    title: 'Totally Awesome Apparel',
    desc: 'A fullstack ecommerce site built from scratch using the MERN stack.  Features payments (in sandbox/test mode) using Stripe and PayPal.  Custom CMS, and more!  Note it is hosted on Heroku using a free tier, so may take a moment to load.',
    githubBtn: 'GitHub',
    github: 'https://github.com/SUBstylee/Capstone-2',
    demoBtn: 'Live Demo',
    demo: 'https://totallyawesomeapparel.herokuapp.com/',
  },
  {
    id:2,
    image: JOBLY,
    imgAlt: 'Jobly Logo',
    title: 'Jobly',
    desc: 'A fullstack (mock) job search site using the PERN stack.  Users can search and track jobs they have applied to.  Front end is hosted on Surge and backend on Heroku using a free tier, so may take a moment to load.',
    githubBtn: 'GitHub',
    github: 'https://github.com/SUBstylee/springboard-remote/tree/main/jobly',
    demoBtn: 'Live Demo',
    demo: 'https://amusing-flag.surge.sh/',
  },
  {
    id:3,
    image: CRYPTOTRACKER,
    imgAlt: 'Crypto-Tracker Logo',
    title: 'Crypto-Tracker',
    desc: 'A fullstack crypto tracking application using Python, Postgresql and the Nomics API.  Users can create an account and keep track of any of the top 100 coins by market cap.  Hosted on Heroku using a free tier, so may take a moment to load.',
    githubBtn: 'GitHub',
    github: 'https://github.com/SUBstylee/capstone1',
    demoBtn: 'Live Demo',
    demo: 'https://jt-cryptotracker.herokuapp.com/',
  },
  {
    id:4,
    image: TRILLO,
    imgAlt: 'Trillo Logo',
    title: 'Trillo',
    desc: 'A mockup for a hotel booking site. Uses SASS, CSS-Flexbox, and CSS-Grid.',
    githubBtn: 'GitHub',
    github: 'https://github.com/SUBstylee/CSS-projects/tree/master/18_Trillo',
    demoBtn: 'Live Demo',
    demo: 'https://substylee.github.io/CSS-projects/18_Trillo/',
  },
  {
    id:5,
    image: OMNI,
    imgAlt: 'Omnifood Logo',
    title: 'Omnifood',
    desc: 'Food delivery service website. Uses pure HTML and CSS.',
    githubBtn: 'GitHub',
    github: 'https://github.com/SUBstylee/CSS-projects/tree/master/16_OmniFoods',
    demoBtn: 'Live Demo',
    demo: 'https://substylee.github.io/CSS-projects/16_OmniFoods/',
  },
  {
    id:6,
    image: NATOURS,
    imgAlt: 'Natours Logo',
    title: 'Natours',
    desc: 'Guided nature tour site. Uses SASS and lots of CSS-Animations.',
    githubBtn: 'GitHub',
    github: 'https://github.com/SUBstylee/CSS-projects/tree/master/17_Natours',
    demoBtn: 'Live Demo',
    demo: 'https://substylee.github.io/CSS-projects/17_Natours/',
  },
  {
    id:7,
    image: GRAPPLER,
    imgAlt: 'grappler Logo',
    title: 'grappler',
    desc: 'A fullstack ecommerce site for grapplermag built using the LAMP stack.  Includes a blog, shop, and more!  OpenCart is used for the CMS.',
    githubBtn: 'GitHub',
    github: '',
    demoBtn: 'Live Demo',
    demo: 'https://www.grapplermag.com',
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className={styles.portfolio__container}>
        {
          portData.map(({id,image,imgAlt,title,desc,githubBtn,github,demoBtn,demo})=>{
            return(
              <article className={styles.portfolio__items} key={id}>
                <div className={styles['portfolio__item-image']}>
                  <Image src={image} alt={imgAlt} />
                </div>
                <h3>{title}</h3>
                {desc!==''?<p>{desc}</p>:''}
                <div className={styles['portfolio__item-cta']}>
                  {github!==''?<a href={github} target='_blank' className='btn' rel='noreferrer'>{githubBtn}</a>:''}
                  {demo!==''?<a href={demo} target='_blank' className='btn btn-primary' rel='noreferrer'>{demoBtn}</a>:''}
                </div>
              </article>
            )
          })
        }
        {/* <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src="https://raw.githubusercontent.com/SUBstylee/Capstone-2/main/images/logos/TAA-Logo-black-and-white.png" alt="TAA Logo" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className='btn'>GitHub</a>
            <a href="https://github.com/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src="https://raw.githubusercontent.com/SUBstylee/Capstone-2/main/images/logos/TAA-Logo-black-and-white.png" alt="TAA Logo" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className='btn'>GitHub</a>
            <a href="https://github.com/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__items">
          <div className="portfolio__item-image">
            <img src="https://raw.githubusercontent.com/SUBstylee/Capstone-2/main/images/logos/TAA-Logo-black-and-white.png" alt="TAA Logo" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" target='_blank' className='btn'>GitHub</a>
            <a href="https://github.com/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;