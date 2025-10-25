import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Services.css';

const servicesData = [
  {
    title: 'Identity Design',
    tag: '#LetsBeDistinctive',
    description: 'Developing a distinctive identity design makes your brand a unique one. In today\'s competitive world, visual identity is really the tip of the iceberg. We offer this powerful communication tool to your advantage and thus it defines how customers perceive your brand in the market. It\'s the piece of your brand identity that people will be exposed to the most. We design unique and innovative designs.',
    icon: '/assets/images/1.png',
  },
  {
    title: 'Strategic Branding',
    tag: '#LetsBuildBrands',
    description: 'There is saying: A brand is a story that is always being told. Let\'s build your brand story together. We offer you this long-term plan for the development of a successful brand. Starting our research by identifying who the target audience is, we help and advise you in every further step like keeping your brand distinct from its competitors, building your brand and promote it to catch the eyes of the prospective audience.',
    icon: '/assets/images/2.png',
  },
  {
    title: 'Packing Design',
    tag: '#LetsPackPerfection',
    description: 'A product is only as good as the packaging around it. Let\'s pack it perfectly. We help your product develop a base with distinctive packaging design. From a marketing perspective, your packaging is an important element of your marketing strategy. We make your product\'s packaging design in a way that it finds itself at the top position at every store.',
    icon: '/assets/images/3.png',
  },
  {
    title: 'Creative Design',
    tag: '#LetsGetCreativity',
    description: 'It\'s the creative ideas which make a brand stand apart. Celebrating creativity will shape your product in an innovative way. Our team of creative experts works hard to deliver unique designs that capture attention and engage your target audience effectively.',
    icon: '/assets/images/4.png',
  },
  {
    title: 'Web Design & Development',
    tag: '#LetsBuildWeb',
    description: 'Professional web design and development services to create stunning, responsive websites that deliver exceptional user experiences and drive business growth.',
    icon: '/assets/images/5.png',
  },
  {
    title: 'Print',
    tag: '#LetsPrint',
    description: 'High-quality print solutions for all your marketing materials, from brochures and flyers to large format displays that make a lasting impression.',
    icon: '/assets/images/6.png',
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
      </section>

      {/* Services Content */}
      <section className="services-content">
        <h1 className="services-title" data-aos="fade-up">
          What <span className="highlight">We Do</span>
        </h1>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-icon-wrapper">
                <img src={service.icon} alt={service.title} className="service-icon" />
              </div>
              <h3>{service.title}</h3>
              <p className="service-tag">{service.tag}</p>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
