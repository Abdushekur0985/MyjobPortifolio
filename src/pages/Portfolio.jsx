import React from 'react';

const sampleProjects = [
    { id: 1, title: 'Project A', desc: 'A short description', img: '/src/assets/myimage.png', tech: ['React', 'Node'], github: '#', demo: '#' },
    { id: 2, title: 'Project B', desc: 'A short description', img: '/src/assets/myimage.png', tech: ['React', 'Docker'], github: '#', demo: '#' },
    { id: 3, title: 'Project C', desc: 'A short description', img: '/src/assets/myimage.png', tech: ['AI', 'Python'], github: '#', demo: '#' }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-5" style={{ minHeight: '60vh' }}>
            <div className="container">
                <h2 className="mb-4">Portfolio</h2>
                <div className="row g-3">
                    {sampleProjects.map(p => (
                        <div key={p.id} className="col-md-4">
                            <div className="card hover-lift">
                                <img src={p.img} className="card-img-top" alt={p.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{p.title}</h5>
                                    <p className="card-text text-muted">{p.desc}</p>
                                    <div className="d-flex gap-2">
                                    <a
  className="btn btn-sm btn-outline-primary"
  href="https://github.com/Abdushekur0985"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
