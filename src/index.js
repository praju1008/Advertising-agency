import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
AOS.init({ duration: 800, once: true });

const container = document.getElementById('root');
createRoot(container).render(<App />);
