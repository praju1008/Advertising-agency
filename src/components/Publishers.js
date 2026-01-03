import React from "react";
import "../styles/Publisher.css";

const publishers = [
  {
    name: "Vijay Karnataka",
    logo: "/assets/images/publishers/vijaykarnataka.jpg",
  },
  { name: "Prajavani", logo: "/assets/images/publishers/prajavani.png" },
  { name: "Vijayavani", logo: "/assets/images/publishers/vijayavani.jpg" },
  {
    name: "Samyukta Karnataka",
    logo: "/assets/images/publishers/samyukta.png",
  },
  { name: "Deccan Herald", logo: "/assets/images/publishers/deccanherald.jpg" },
  { name: "Udayvani", logo: "/assets/images/publishers/udayvani.png" },
  {
    name: "Business Standard",
    logo: "/assets/images/publishers/businessstandard.png",
  },
  { name: "Hindu", logo: "/assets/images/publishers/thehindu.png" },
  {
    name: "Kannada Prabha",
    logo: "/assets/images/publishers/kannadaprabha.png",
  },
  {
    name: "Times of India",
    logo: "/assets/images/publishers/Times Of India.png",
  },
  {
    name: "Indian Express",
    logo: "/assets/images/publishers/Indian Express.jpg",
  },
];

const PublisherLogos = () => {
  // Duplicate the array for seamless infinite scroll
  const duplicatedPublishers = [...publishers, ...publishers];

  return (
    <div className="publisher-logos-section">
      <h2>
        Our Publishers
      </h2>
      <p className="publisher-subtitle">
        Trusted partnerships with leading newspapers across Karnataka and India
      </p>
      <div className="publisher-slider">
        <div className="publisher-track">
          {duplicatedPublishers.map((pub, idx) => (
            <div key={idx} className="publisher-card">
              <img src={pub.logo} alt={pub.name} title={pub.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublisherLogos;
