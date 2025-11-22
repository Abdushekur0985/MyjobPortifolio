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
                        <h2>About Me</h2>
                        <p className="text-light">A highly motivated full-stack developer and enthusiastic technology innovator, committed to building modern applications, solving real-world problems, and constantly exploring new ideas.</p>
                        <ul className="list-unstyled">
                            <li><strong>Email:</strong> abdushekur4485@gmail.com</li>
                            <li><strong>Phone:</strong> +251928584485</li>
                            <li><strong>Location:</strong> Addis Abaa, ethiopia</li>
                        </ul>
                        <a href="/src/assets/resume.pdf" className="btn btn-primary mt-2">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
