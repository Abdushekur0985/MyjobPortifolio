import React from 'react';

const testimonials = [
    { id: 1, quote: 'Great work and delivery on time.', name: 'Client A', img: '/src/assets/myimage.png' },
    { id: 2, quote: 'Highly recommended.', name: 'Client B', img: '/src/assets/myimage.png' }
];

export default function Testimonials() {
    return (
        <section className="py-5" style={{ minHeight: '40vh' }}>
            <div className="container">
                <h2 className="mb-4">Testimonials</h2>
                <div className="row">
                    {testimonials.map(t => (
                        <div key={t.id} className="col-md-6">
                            <div className="card p-3 mb-3">
                                <div className="d-flex gap-3 align-items-center">
                                    <img src={t.img} alt={t.name} style={{ width: 64, height: 64, borderRadius: 12 }} />
                                    <div>
                                        <p className="mb-1">"{t.quote}"</p>
                                        <small className="text-muted">— {t.name}</small>
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
