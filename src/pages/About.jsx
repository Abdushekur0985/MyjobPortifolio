import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-5" style={{ minHeight: '60vh' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 text-center">
                        <img src="/src/assets/myimage.png" alt="profile" className="img-fluid rounded-circle" style={{ maxWidth: 200 }} />
                    </div>
                    <div className="col-md-8">
                        <h2>who am I?</h2>
                        <p className="text-light">I am Abdushekur, a passionate Full‑Stack Developer driven by curiosity and innovation. With strong expertise in both frontend and backend technologies, I build scalable, user‑friendly applications that solve real problems and deliver meaningful impact.  

My journey blends academic excellence in mathematics with hands‑on experience in modern web development — React, Node.js, Express, MySQL, and beyond. I thrive on transforming ideas into production‑ready solutions, from responsive interfaces to robust server architectures.  

As an innovator, I constantly explore new frameworks, libraries, and design patterns to push boundaries and craft efficient, elegant code. I believe technology should empower people, and my mission is to create applications that bridge gaps, inspire collaboration, and drive progress.  

Whether it’s architecting complex systems, polishing UI/UX with animations, or mentoring others, I bring resilience, creativity, and a problem‑solving mindset to every project. My long‑term vision is to establish a tech hub that fosters innovation and equips Ethiopian youth with the skills to thrive in the digital era.
</p>
                        <a href="/src/assets/resume.pdf" className="btn btn-primary mt-2">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
