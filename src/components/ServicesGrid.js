import React from 'react';
import '../styles/ServicesGrid.css';

const services = [
  {title: 'Identity Design', hashtag: '#LetsBeDistinctive', img: '/assets/images/1.png', desc: 'Developing a distinctive identity design makes your brand a unique one. In today\'s competitive world, visual identity is really the tip of the iceberg. We offer this powerful communication tool to your advantage and thus it defines how customers perceive your brand in the market. It\'s the piece of your brand identity that people will be exposed to the most. We design unique and innovative designs...' },
  {title: 'Strategic Branding', hashtag: '#LetsBuildBrands', img: '/assets/images/2.png', desc: 'There is saying," A brand is a story that is always being told" Let\'s build your brand story together. We offer you this long-term plan for the development of a successful brand. Starting our research by identifying who the target audience is, we help and advice you in every further step like keeping your brand distinct from its competitors, building your brand and promote it to catch the eyes of the prospective audience.' },
  {title: 'Packing Design', hashtag: '#LetsPackPerfection', img: '/assets/images/3.png', desc: 'A product is only as good as the packaging around it. Let\'s pack it perfectly. We help your product develop a base with distinctive packaging design. From a marketing perspective, your packaging is an important element of your marketing strategy. We make your products\' packaging design in a way that it finds itself at the top position at every store.' },
  {title: 'Creative Design', hashtag: '#LetsCelebrateCreativity', img: '/assets/images/4.png', desc: 'It\'s the creative ideas which make a brand stand apart. Celebrating creativity will shape your product in an innovative way .Our designing team is always ready and hungry for fresh ideas. We make every effort to make your product an eye-catcher and support your brand vision through our creative designs. We offer creative designing services for flyers, hoardings and adverts in newspaper, magazines...' },
  {title: 'Website Design & Development', hashtag: '#LetsClick', img: '/assets/images/5.png', desc: 'Your website is just a click away from your viewers.Let\'s make it worth clicking!!Website is the biggest digital asset for any company and hence we pour in maximum efforts to make it an extraordinary one. We provide step by step assistance from information gathering, planning, design, writing, coding to maintenance. We work with you to develop a user experience which delivers value to your audience.' },
  {title: 'Media Planning & Buying', hashtag: '#LetsEmbraceReach', img: '/assets/images/6.png', desc: 'Reaching out to people with your product or service is the key element of marketing. Let\'s do it wisely and embrace your reach with more and more viewers. In the aforementioned title, we strategically select media platforms to place ads in order to achieve client\'s campaign goals. Our services include Print, Radio & Television, OOH, and Events & Exhibitions.' }
];

const ServicesGrid = () => (
  <div className="services-grid">
    {services.map((s, idx) => (
      <div className="service-card" key={idx}>
        <div className="service-icon">
          <img src={s.img} alt={s.title}/>
        </div>
        <h3>{s.title}</h3>
        <p className="hashtag">{s.hashtag}</p>
        <p className="desc">{s.desc}</p>
      </div>
    ))}
  </div>
);

export default ServicesGrid;
