import React from 'react';

const services = [
    { title: 'Web Applications', desc: 'Modern, responsive web apps with React and Node.js', icon: '🌐' },
    { title: 'AI Integration', desc: 'Agentic AI generators and automation solutions', icon: '🤖' },
    { title: 'DevOps & Deploy', desc: 'Docker, CI/CD and cloud deployment', icon: '⚙️' }
];

export default function Services() {
    return (
        <section id="services" className="py-5" style={{ minHeight: '60vh' }}>
            <div className="container">
                <h2 className="mb-4">Services</h2>
                <div className="row g-3">
                    {services.map(s => (
                        <div key={s.title} className="col-md-4">
                            <div className="card h-100 shadow-sm hover-lift">
                                <div className="card-body text-center">
                                    <div style={{ fontSize: 40 }}>{s.icon}</div>
                                    <h5 className="card-title mt-2">{s.title}</h5>
                                    <p className="card-text text-muted">{s.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
