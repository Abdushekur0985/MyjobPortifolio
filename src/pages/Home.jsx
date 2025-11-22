import React from 'react';
import Hero from '../components/Hero.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Portfolio from './Portfolio.jsx';
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
