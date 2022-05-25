import styles from '../../../styles/Testimonials.module.scss';
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination,Navigation,Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// imgs
import AVATAR1 from '../../../public/brandon.png';
import AVATAR2 from '../../../public/rome.png';
import AVATAR3 from '../../../public/tk.png';
import AVATAR4 from '../../../public/billy.png';

import Image from 'next/image';

const testData=[
  {
    id: 1,
    avatar: AVATAR3,
    cName: 'Timothy Kline',
    title: 'CEO - Duval Productions',
    review: 'Jeremy has always charged reasonable fees for his services, and sets realistic deadlines.  Despite being on a different continent, he has responded in a timely manner that matches my schedule. I will continue working with him in the future.'
  },
  {
    id: 2,
    avatar: AVATAR1,
    cName: 'Brandon Ibarra',
    title: 'Editor In Chief - grappler',
    review: 'Setup and deployed our blog. Jeremy is always reachable and quick when it has come to fixes or changes. He also was very patient when walking me through the CMS, and even made tutorial videos for me.'
  },
  {
    id: 3,
    avatar: AVATAR4,
    cName: 'Billy Fetzner',
    title: 'CEO - Green Business Impact',
    review: 'Jeremy got the job done. Whatever I tasked him with, he did it on time or well before required. He is a quick learner, and has good communication skills. I plan to work with him again in the future'
  },
  {
    id: 4,
    avatar: AVATAR2,
    cName: 'Rome Lytton',
    title: 'Founder - grappler',
    review: 'Got my site up and running after I was burned by another freelancer. He gave me a discount, even though he couldn\'t make use of any of the code from the previous developer. Actually felt like Jeremy cared about the project, and wasn\'t just trying to make a quick buck. He went above and beyond what was expected.'
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Client Reviews</h5>
      <h2>Testimonials</h2>
      <Swiper className={`port__container ${styles.testimonials__container}`}
        // install Swiper modules
        modules={[Pagination,Navigation,Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay
        pagination={{ clickable: true }}
      >
        {testData.map(({id,avatar,cName,title,review})=>{
          return(
            <SwiperSlide className={styles.testimonial} key={id}>
              <div className={styles.client__avatar}>
                <Image src={avatar} alt={cName} />
              </div>
              <h5 className={styles.client__name}>{cName}</h5>
              <h6 className={styles.client__role}>{title}</h6>
                <small className={styles.client__review}>{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;