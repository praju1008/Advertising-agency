import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../styles/Testimonials.css';

const logos = [
  'assets/images/Logo-1-min.jpg',
  'assets/images/Logo-2-min.jpg',
  'assets/images/Logo-3-min.jpg',
  'assets/images/Logo-4-min.jpg',
  'assets/images/Logo-5-min.jpg',
  'assets/images/Logo-6-min.jpg',
  'assets/images/Logo-7-min.jpg',
];

const testimonials = [
  { text: 'Consummate professionals...', author: 'Sachin Agarwal' },
  { text: 'We could not have been more pleased...', author: 'Mehul Shah' },
  { text: 'The professionalism and personalized service...', author: 'Atul' },
  { text: 'Their creativity and attention to detail...', author: 'Ravi Kumar' },
  { text: 'A fantastic experience from start to finish...', author: 'Anjali Verma' },
  { text: 'They took our vision and turned it into reality...', author: 'Atul' },
  { text: 'Their innovative approach helped us stand out...', author: 'Priya Singh' },
];

const Testimonials = () => (
  <section className="testimonials" data-aos="fade-up">
    <h2>Testimonials</h2>

    {/* Logos carousel */}
    <Swiper
      spaceBetween={30}
      slidesPerView={5}
      loop
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Autoplay]}
      className="testimonial-logos"
      breakpoints={{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
    >
      {logos.map((logo, i) => (
        <SwiperSlide key={i}>
          <img src={logo} alt={`Client ${i + 1}`} className="testimonial-logo" />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Text carousel */}
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      modules={[Autoplay]}
      className="testimonial-texts"
    >
      {testimonials.map((t, i) => (
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
