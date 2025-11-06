import React from 'react';

// Newspaper (front page + lines)
const NewspaperSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="14" height="14" rx="2" stroke="#1f3b5c" strokeWidth="1.6"/>
    <rect x="5" y="7" width="7" height="5" fill="#1f3b5c" opacity="0.12"/>
    <line x1="5" y1="13" x2="15" y2="13" stroke="#1f3b5c" strokeWidth="1.6" strokeLinecap="round"/>
    <line x1="5" y1="16" x2="15" y2="16" stroke="#1f3b5c" strokeWidth="1.6" strokeLinecap="round"/>
    <rect x="17" y="7" width="4" height="12" rx="1.4" stroke="#1f3b5c" strokeWidth="1.6"/>
  </svg>
);

// Digital (screen + spark)
const DigitalSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="12" rx="2" stroke="#1f6f7a" strokeWidth="1.6"/>
    <rect x="8" y="18" width="8" height="2" rx="1" fill="#1f6f7a"/>
    <circle cx="12" cy="11" r="3.8" stroke="#1f6f7a" strokeWidth="1.6"/>
    <path d="M15 8l1.8-1.8" stroke="#1f6f7a" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

// Campaigns (megaphone angled)
// const CampaignSVG = () => (
//   <svg width="100" height="100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//     <path d="M5 12h7l6-3v6l-6-3H5z" stroke="#7a1f4f" strokeWidth="1.6" fill="none"/>
//     <path d="M8 12.5v2.8c0 .7.6 1.3 1.3 1.3H10" stroke="#7a1f4f" strokeWidth="1.6" strokeLinecap="round"/>
//     <path d="M19.3 8.4c.9.6 1.5 1.6 1.5 2.6s-.6 2-1.5 2.6" stroke="#7a1f4f" strokeWidth="1.6" strokeLinecap="round"/>
//   </svg>
// );

// Flex/Outdoor (stacked boards)
const PrintSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="6" y="6" width="12" height="5" rx="1" stroke="#7a5c1f" strokeWidth="1.6"/>
    <rect x="5" y="12" width="14" height="6" rx="1.4" stroke="#7a5c1f" strokeWidth="1.6"/>
    <rect x="8" y="14" width="8" height="3.5" fill="#7a5c1f" opacity="0.16"/>
  </svg>
);

// Creative (bulb/idea)
const CreativeSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 4a6 6 0 016 6c0 2.3-1.2 3.4-2.2 4.6-.4.5-.8 1.1-.8 1.9H9c0-.8-.4-1.4-.8-1.9C7.2 13.4 6 12.3 6 10a6 6 0 016-6z" stroke="#5c1f7a" strokeWidth="1.6"/>
    <path d="M10 19h4" stroke="#5c1f7a" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

// Web (browser window)
const WebSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="12" rx="2" stroke="#1f5c2a" strokeWidth="1.6"/>
    <line x1="3" y1="8" x2="21" y2="8" stroke="#1f5c2a" strokeWidth="1.6"/>
    <circle cx="6.5" cy="6.5" r="0.9" fill="#1f5c2a"/>
    <circle cx="9.5" cy="6.5" r="0.9" fill="#1f5c2a"/>
    <circle cx="12.5" cy="6.5" r="0.9" fill="#1f5c2a"/>
  </svg>
);

// Brochure & Pamphlet (folded tri-fold)
const BrochureSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {/* left panel */}
    <path d="M4.5 6.5l6-2v15l-6 2V6.5z" stroke="#7a5c1f" strokeWidth="1.6" fill="none"/>
    {/* middle panel */}
    <rect x="10.5" y="5" width="3" height="16" stroke="#7a5c1f" strokeWidth="1.6" fill="none"/>
    {/* right panel */}
    <path d="M13.5 6.5l6 2v13l-6-2V6.5z" stroke="#7a5c1f" strokeWidth="1.6" fill="none"/>
    {/* lines */}
    <line x1="5.8" y1="9" x2="9.8" y2="7.9" stroke="#7a5c1f" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="14.2" y1="9.8" x2="18.2" y2="11" stroke="#7a5c1f" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// Public Relations (distinct megaphone with waves)
const PublicRSVG = () => (
  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 12h7.2l6.3-3.2v6.4L11.2 12H4z" stroke="#1f3b5c" strokeWidth="1.6" fill="none"/>
    <path d="M8.2 12.6v3c0 .8.6 1.4 1.4 1.4h1" stroke="#1f3b5c" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M19.8 8.2a4 4 0 010 7.6" stroke="#1f3b5c" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M18.2 9.4a2.7 2.7 0 010 5.2" stroke="#1f3b5c" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

// Services (each with a unique icon)
const services = [
  { title: 'Newspaper Advertising', Svg: NewspaperSVG },
  { title: 'Digital Marketing', Svg: DigitalSVG },
  // { title: 'Brand Promotion Campaigns', Svg: CampaignSVG },
  { title: 'Flex Printing & Outdoor', Svg: PrintSVG },
  { title: 'Creative Design & Content', Svg: CreativeSVG },
  { title: 'Website & Landing Pages', Svg: WebSVG },
  { title: 'Brochure & Pamphlet Design', Svg: BrochureSVG },
  { title: 'Public Relations', Svg: PublicRSVG },
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
