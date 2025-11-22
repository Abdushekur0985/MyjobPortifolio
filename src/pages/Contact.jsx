import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="py-5" style={{ minHeight: '50vh' }}>
            <div className="container">
                <h2 className="mb-4">Contact</h2>
                <p className="text-muted">Send me a message via the form (placeholder) or email me at <strong>you@example.com</strong>.</p>
                <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
                    <div className="col-md-6">
                        <input className="form-control" placeholder="Your name" />
                    </div>
                    <div className="col-md-6">
                        <input className="form-control" placeholder="Your email" />
                    </div>
                    <div className="col-12">
                        <textarea className="form-control" rows={5} placeholder="Message" />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
