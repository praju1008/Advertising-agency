import React from 'react';
import '../styles/ServicesGrid.css';

const NewspaperSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2" ry="2" stroke="#1f3b5c" strokeWidth="1.6"/>
    <rect x="5" y="6" width="7" height="5" fill="#1f3b5c" opacity="0.12"/>
    <line x1="5" y1="13" x2="19" y2="13" stroke="#1f3b5c" strokeWidth="1.6" strokeLinecap="round"/>
    <line x1="5" y1="16" x2="19" y2="16" stroke="#1f3b5c" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const DigitalSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="14" rx="2" stroke="#1f6f7a" strokeWidth="1.6"/>
    <rect x="7" y="19" width="10" height="2" rx="1" fill="#1f6f7a"/>
    <circle cx="12" cy="11" r="4" stroke="#1f6f7a" strokeWidth="1.6"/>
    <path d="M14.5 8.5l2-2" stroke="#1f6f7a" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const CampaignSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 10h10l6-4v12l-6-4H4z" stroke="#7a1f4f" strokeWidth="1.6" fill="none"/>
    <circle cx="6" cy="16" r="1" fill="#7a1f4f"/>
    <circle cx="9" cy="16" r="1" fill="#7a1f4f"/>
  </svg>
);

const PrintSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="6" y="3" width="12" height="5" rx="1" stroke="#7a5c1f" strokeWidth="1.6"/>
    <rect x="4" y="9" width="16" height="8" rx="2" stroke="#7a5c1f" strokeWidth="1.6"/>
    <rect x="7" y="13" width="10" height="6" fill="#7a5c1f" opacity="0.12"/>
  </svg>
);

const CreativeSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2a5 5 0 015 5c0 3-2 4-2 7a3 3 0 01-6 0c0-3-2-4-2-7a5 5 0 015-5z" stroke="#5c1f7a" strokeWidth="1.6"/>
    <path d="M10 20h4" stroke="#5c1f7a" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const WebSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="14" rx="2" stroke="#1f5c2a" strokeWidth="1.6"/>
    <line x1="3" y1="8" x2="21" y2="8" stroke="#1f5c2a" strokeWidth="1.6"/>
    <circle cx="7" cy="6" r="0.8" fill="#1f5c2a"/>
    <circle cx="10" cy="6" r="0.8" fill="#1f5c2a"/>
    <circle cx="13" cy="6" r="0.8" fill="#1f5c2a"/>
  </svg>
);

const services = [
  { title: 'Newspaper Advertising', Svg: NewspaperSVG },
  { title: 'Digital Marketing', Svg: DigitalSVG },
  { title: 'Brand Promotion Campaigns', Svg: CampaignSVG },
  { title: 'Flex Printing & Outdoor', Svg: PrintSVG },
  { title: 'Creative Design & Content', Svg: CreativeSVG },
  { title: 'Website & Landing Pages', Svg: WebSVG },
];

const ServicesGrid = () => (
  <div className="services-grid">
    {services.map((s, idx) => {
      const Icon = s.Svg;
      return (
        <div className="service-card" key={idx}>
          <div className="service-icon">
            <Icon />
          </div>
          <h3>{s.title}</h3>
        </div>
      );
    })}
  </div>
);

export default ServicesGrid;
