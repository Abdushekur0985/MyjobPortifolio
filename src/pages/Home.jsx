import React from 'react';
import Hero from '../components/Hero.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
// Use the cleaned portfolio component to avoid the corrupted file
import Portfolio from './PortfolioClean.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';

export default function Home() {
    return (
        <main id="home">
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Skills />
            <Contact />
        </main>
    );
}
