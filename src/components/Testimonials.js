import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/Testimonials.css';

const items = [
  {text: 'Consummate professionals...', author: 'Sachin Agarwal'},
  {text: 'We could not have been more pleased...', author: 'Mehul Shah'},
  {text: 'The professionalism and personalized service...', author: 'Atul'},
];

const Testimonials = () => (
  <section className="testimonials" data-aos="fade-up">
    <h2>Testimonials</h2>
    <Swiper spaceBetween={20} slidesPerView={1} loop autoplay={{delay:4000}}>
      {items.map((t,i) => (
        <SwiperSlide key={i}>
          <blockquote>
            <p>{t.text}</p>
            <footer>— {t.author}</footer>
          </blockquote>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Testimonials;

