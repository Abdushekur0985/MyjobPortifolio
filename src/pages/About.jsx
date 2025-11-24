import React from 'react';
import '../components/About.css';

export default function About() {
  return (
    <section id="about" className="py-2" style={{ minHeight: '60vh' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-md-4 text-center mb-2 mb-md-0">
            <img
              src="/src/assets/image.png"
              alt="profile"
              className="img-fluid rounded-circle shadow-lg profile-pic"
              style={{ maxWidth: 200 }}
              tabIndex={0}
            />
          </div>

          {/* About Text */}
          <div className="col-md-8">
            {/*  Gradient headline */}
            <h2 className="about-header mb-3">Who am I?</h2>

            <p className="about-text">
              I am <span className="highlight">Abdushekur</span>, a passionate
              <span className="highlight"> Full‑Stack Developer</span> driven by
              curiosity and innovation. With strong expertise in both frontend
              and backend technologies, I build scalable, user‑friendly
              applications that solve real problems and deliver meaningful
              impact.
            </p>

            <p className="about-text">
              My journey blends academic excellence in mathematics with
              hands‑on experience in modern web development — React, Node.js,
              Express, MySQL, and beyond. I thrive on transforming ideas into
              production‑ready solutions, from responsive interfaces to robust
              server architectures.
            </p>

            <p className="about-text">
              As an innovator, I constantly explore new frameworks, libraries,
              and design patterns to push boundaries and craft efficient,
              elegant code. I believe technology should empower people, and my
              mission is to create applications that bridge gaps, inspire
              collaboration, and drive progress.
            </p>

            <p className="about-text">
              Whether it’s architecting complex systems, polishing UI/UX with
              animations, or mentoring others, I bring resilience, creativity,
              and a problem‑solving mindset to every project. My long‑term
              vision is to establish a tech hub that fosters innovation and
              equips Ethiopian youth with the skills to thrive in the digital
              era.
            </p>

            {/* ✅ Gradient button */}
            <a href='' className="btn hire-btn ">
              System Developer Abdushekur
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
