import React from 'react';

const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 }
];

export default function Skills() {
    return (
        <section id="skills" className="py-5" style={{ minHeight: '50vh' }}>
            <div className="container">
                <h2 className="mb-4">Skills</h2>
                <div className="row g-3">
                    <div className="col-md-6">
                        {skills.map(s => (
                            <div key={s.name} className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <strong>{s.name}</strong>
                                    <small className="text-muted">{s.level}%</small>
                                </div>
                                <div className="progress" style={{ height: 10 }}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${s.level}%` }} aria-valuenow={s.level} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-6">
                        <p className="text-muted">Optionally we can add circular progress or animated SVGs here to highlight select skills.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
