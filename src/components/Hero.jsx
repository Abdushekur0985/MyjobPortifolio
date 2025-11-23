import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import '../components/hero.css';
import heroImg from '../assets/myimage.png';

export default function Hero() {
    const el = useRef(null);
    const nameRef = useRef(null);
    const imgRef = useRef(null);
    const [swapped, setSwapped] = useState(false);
    const [titleText, setTitleText] = useState('Abdushekur Mohammed');
    const [hue, setHue] = useState(260);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'SaaS Developer',
                'Agentic AI Generator',
                'AI Engineer',
                'MLOps Engineer',
                'Full-Stack Developer',
                'Backend Engineer',
                'Frontend Engineer',
                'Automation Expert',
                'Startup CTO (Fractional)'
            ],
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 1500,
            loop: true,
            smartBackspace: true
        });

        // animateOnce available immediately and on interval
        const animateOnce = (r) => {
            if (!r || !r.current) return;
            r.current.style.transition = 'transform 450ms cubic-bezier(.2,.9,.2,1)';
            r.current.style.transform = 'translateY(-14px) rotate(-4deg)';
            setTimeout(() => {
                if (!r.current) return;
                r.current.style.transform = '';
            }, 900);
        };

        // run immediately so the move appears instantly
        animateOnce(nameRef);
        animateOnce(imgRef);

        // every 5 seconds: small move animation for name and image
        const moveInterval = setInterval(() => {
            animateOnce(nameRef);
            animateOnce(imgRef);
        }, 5000);

        
        // For testing we temporarily use 2.5 seconds; revert to 7*60*1000 for production
        const sevenMin = 4 * 1000; // TEST: 4 seconds (4000 ms) — change interval for rapid testing
        const swapInterval = setInterval(() => {
            setSwapped((s) => !s);
            setTitleText((prev) => prev === 'Abdushekur Mohammed' ? 'Innovator and Developer Abdushekur' : 'Abdushekur Mohammed');
            setHue(Math.floor(Math.random() * 360));
        }, sevenMin);

        return () => {
            typed.destroy();
            clearInterval(moveInterval);
            clearInterval(swapInterval);
        };
    }, []);

    return (
        <section id="home" className="hero d-flex align-items-center justify-content-center text-center" style={{ minHeight: '100vh' }}>
            <div className="container">
                <div className="row align-items-center">
                    {swapped ? (
                        <>
                            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-flex align-items-center justify-content-center" data-aos="fade-left">
                                <img
                                    ref={imgRef}
                                    src={heroImg}
                                    alt="Abdushekur Mohammed setup"
                                    className="img-fluid hero-image shadow-lg"
                                    style={{ boxShadow: `0 24px 60px ${`hsl(${hue}deg 85% 60%)`}33` }}
                                />
                            </div>

                            <div className="col-lg-7" data-aos="fade-up">
                                <h1 ref={nameRef} className="display-4 fw-bold transition-transform duration-700" style={{ color: `hsl(${hue}deg 85% 60%)`, textShadow: `0 6px 18px ${`hsl(${hue}deg 85% 60%)`}33` }}>{titleText}</h1>
                                <p className="lead text-light mb-4">I design and build modern, full‑stack web experiences — React frontends, robust Node/Express backends, databases, production deployments, and AI-powered features for smarter UX.</p>
                                <h3 className="mb-4"><span ref={el} className="text-primary"></span></h3>


                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-lg-7" data-aos="fade-up">
                                <h1 ref={nameRef} className="display-4 fw-bold transition-transform duration-700" style={{ color: `hsl(${hue}deg 85% 60%)`, textShadow: `0 6px 18px ${`hsl(${hue}deg 85% 60%)`}33` }}>{titleText}</h1>
                                <p className="lead text-light mb-4">I design and build modern, full‑stack web experiences — React frontends, robust Node/Express backends, databases, production deployments, and AI-powered features for smarter UX.</p>
                                <h3 className="mb-4"><span ref={el} className="text-primary"></span></h3>
                                <div className="d-flex gap-3 justify-content-center mb-3">
  <button
    className="btn btn-lg hire-btn"
    data-aos="zoom-in"
    data-aos-delay="150"
    onClick={() => window.location.href = "#projects"} // ✅ still navigates
  >
    Hire Abdushekur
  </button>
</div>


                                {/* removed why-hire per user request */}
                            </div>

                            <div className="col-lg-5 mt-4 mt-lg-0 text-center d-flex align-items-center justify-content-center" data-aos="fade-left">
                                <img
                                    ref={imgRef}
                                    src={heroImg}
                                    alt="Abdushekur Mohammed setup"
                                    className="img-fluid hero-image shadow-lg"
                                    style={{ boxShadow: `0 24px 60px ${`hsl(${hue}deg 85% 60%)`}33` }}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
