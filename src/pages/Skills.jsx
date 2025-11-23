import React from "react";
import "../components/skill.css"; //  custom CSS for animations

const skills = {
    languages: [
        { name: "JavaScript", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "PHP", level: 75 },
        { name: "SQL", level: 80 },
    ],
    frameworks: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Next.js", level: 70 },
        { name: "React Native", level: 65 },
    ],
    libraries: [
        { name: "Axios", level: 85 },
        { name: "Framer Motion", level: 80 },
        { name: "React Router", level: 85 },
        { name: "Bootstrap", level: 90 },
        { name: "Tailwind CSS", level: 75 },
    ],
};

export default function Skills() {
    return (
        <section id="skills" className="py-5" style={{ minHeight: "60vh" }}>
            <div className="container">
                {/*  Gradient animated header */}
                <h2 className="mb-5 text-center skills-header">Skills</h2>

                <div className="row g-4">
                    {/* Languages */}
                    <div className="col-md-4">
                        <div className="card skill-card">
                            <div className="card-body">
                                <h4 className="text-primary mb-3">Languages</h4>
                                {skills.languages.map((s, i) => (
                                    <div key={s.name} className="mb-3 skill-block">
                                        <div className="d-flex justify-content-between">
                                            <strong className="text-success">{s.name}</strong>
                                            <small className="text-success">{s.level}%</small>
                                        </div>
                                        <div className="progress" style={{ height: 16 }}>
                                            <div
                                                className="progress-bar progress-animate"
                                                role="progressbar"
                                                style={{
                                                    '--val': `${s.level}%`,
                                                    animationDelay: `${i * 0.3}s`,
                                                }}
                                                aria-valuenow={s.level}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {/* <span className="bar-text">{s.level}%</span> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="col-md-4">
                        <div className="card skill-card">
                            <div className="card-body">
                                <h4 className="text-primary mb-3">Frameworks</h4>
                                {skills.frameworks.map((s, i) => (
                                    <div key={s.name} className="mb-3 skill-block">
                                        <div className="d-flex justify-content-between">
                                            <strong className="text-success">{s.name}</strong>
                                            <small className="text-success">{s.level}%</small>
                                        </div>
                                        <div className="progress" style={{ height: 16 }}>
                                            <div
                                                className="progress-bar progress-animate"
                                                role="progressbar"
                                                style={{
                                                    '--val': `${s.level}%`,
                                                    animationDelay: `${i * 0.3}s`,
                                                }}
                                                aria-valuenow={s.level}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {/* <span className="bar-text">{s.level}%</span> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Libraries */}
                    <div className="col-md-4">
                        <div className="card skill-card">
                            <div className="card-body">
                                <h4 className="text-primary mb-3">Libraries</h4>
                                {skills.libraries.map((s, i) => (
                                    <div key={s.name} className="mb-3 skill-block">
                                        <div className="d-flex justify-content-between">
                                            <strong className="text-success">{s.name}</strong>
                                            <small className="text-success">{s.level}%</small>
                                        </div>
                                        <div className="progress" style={{ height: 16 }}>
                                            <div
                                                className="progress-bar progress-animate"
                                                role="progressbar"
                                                style={{
                                                    '--val': `${s.level}%`,
                                                    animationDelay: `${i * 0.3}s`,
                                                }}
                                                aria-valuenow={s.level}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {/* <span className="bar-text">{s.level}%</span> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

