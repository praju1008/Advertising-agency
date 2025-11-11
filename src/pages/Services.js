import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Services.css';

const servicesData = [

  // Added items from your Services list
  {
    title: 'Newspaper Advertising',
    tag: '#PressReach',
    description:
      "Plan and place high‑impact ads across regional and national newspapers to build trust and reach at scale. Media planning, ad sizing, language and city editions, and strict deadline management for timely releases.",
    icon: '/assets/images/1.png',
  },
  {
    title: 'Digital Marketing',
    tag: '#GoDigital',
    description:
      "SEO: Keyword strategy, on‑page optimization, technical fixes, and authority backlinks to lift rankings. Social Media Marketing: Creatives, reels, calendars, and paid campaigns on Instagram, Facebook, LinkedIn, and YouTube. Email Marketing: Strategy, template design, automation journeys, and performance tracking to boost conversions.",
    icon: '/assets/images/2.png',
  },
  {
    title: 'Brand Promotion Campaigns',
    tag: '#MakeItViral',
    description:
      "End‑to‑end campaigns from concept to execution—messaging, visual identity, and multi‑channel rollouts. Launch plans, seasonal promos, influencer tie‑ups, and experiential activations to grow awareness and recall.",
    icon: '/assets/images/3.png',
  },
  {
    title: 'Flex Printing & Outdoor',
    tag: '#GoOutdoor',
    description:
      "High‑quality flex, vinyl, and eco‑solvent printing for hoardings, banners, standees, and in‑store branding. Site survey, fabrication, mounting, and logistics for events, exhibitions, and retail spaces.",
    icon: '/assets/images/4.png',
  },
  {
    title: 'Creative Design & Content',
    tag: '#CreateToConvert',
    description:
      "Ad creatives, brochures, catalogues, packaging, and brand assets tailored to your guidelines and market. Copywriting for ads, landing pages, social posts, and email campaigns that drive action.",
    icon: '/assets/images/5.png',
  },
  {
    title: 'Performance Advertising',
    tag: '#PerformanceFirst',
    description:
      "Data‑driven ad buying on Google Ads and Meta Ads to generate leads and sales with measurable ROI. Audience targeting, landing pages, A/B testing, and conversion tracking for continuous optimization.",
    icon: '/assets/images/6.png',
  },
  {
    title: 'Website & Landing Pages',
    tag: '#ConvertFaster',
    description:
      "Fast, responsive sites and campaign landing pages focused on conversion and SEO best practices. Analytics setup, forms, and integrations with CRM and marketing tools.",
    icon: '/assets/images/6.png',
  },
  {
    title: 'Customized Advertising Solutions',
    tag: '#TailoredForYou',
    description:
      "Bespoke media mixes, regional‑language creatives, B2B outreach, and sector‑specific strategies. Flexible packages for product launches, store openings, festivals, and limited‑time promotions.",
    icon: '/assets/images/2.png',
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
