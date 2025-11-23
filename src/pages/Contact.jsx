import React, { useState, useEffect } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', password: '', message: '' });
    const [status, setStatus] = useState(null);
    const [contacts, setContacts] = useState([]);

    const API_BASE = window.location.hostname === 'localhost' ? 'http://localhost:4000' : '';

    useEffect(() => {
        fetch(`${API_BASE}/api/contacts`)
            .then((r) => r.json())
            .then((data) => setContacts(data))
            .catch(() => { });
    }, []);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch(`${API_BASE}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (data.success) {
                setStatus('saved');
                setForm({ name: '', email: '', password: '', message: '' });
                // refresh list
                const r2 = await fetch(`${API_BASE}/api/contacts`);
                const list = await r2.json();
                setContacts(list);
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-5" style={{ minHeight: '50vh' }}>
            <div className="container">
                <h2 className="mb-4">Contact</h2>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card bg-transparent border-0">
                            <div className="row g-0 shadow-sm rounded overflow-hidden">
                                <div className="col-md-6 p-4 bg-dark">
                                    <p className="text-muted">Send me a message or connect via social links below.</p>
                                    <form className="row g-3" onSubmit={handleSubmit}>
                                        <div className="col-md-6">
                                            <input name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Your name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input name="email" type="email" value={form.email} onChange={handleChange} className="form-control" placeholder="Your email" required />
                                        </div>
                                        <div className="col-12">
                                            <input name="password" type="password" value={form.password} onChange={handleChange} className="form-control" placeholder="A password (will be hashed)" required />
                                        </div>
                                        <div className="col-12">
                                            <textarea name="message" className="form-control" rows={4} placeholder="Message" value={form.message} onChange={handleChange} />
                                        </div>
                                        <div className="col-12 d-flex gap-2 align-items-center">
                                            <button className="btn btn-primary" type="submit">Send Message</button>
                                            <div>
                                                {status === 'loading' && <small className="text-muted">Sending...</small>}
                                                {status === 'saved' && <small className="text-success">Saved — thank you!</small>}
                                                {status === 'error' && <small className="text-danger">Error saving — try again.</small>}
                                            </div>
                                        </div>
                                    </form>

                                    <div className="mt-4">
                                        <h6>Connect</h6>
                                        <div className="d-flex gap-3 align-items-center mt-2">
                                            <a className="d-inline-flex align-items-center btn btn-outline-light btn-sm" href="https://t.me/Pursuitofjannah" target="_blank" rel="noopener noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="me-2"><path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12s12-5.372 12-12C24 5.373 18.627 0 12 0zm5.3 7.2l-1.7 8.1c-.1.5-.4.6-.8.4l-2.4-1.8-1.2 1.2c-.1.1-.2.2-.4.2l.2-2.8 5.1-4.6c.2-.1-.1-.3-.3-.2L8.1 12.6 4.6 11.6c-.6-.2-.6-.6.1-.9L17.3 6c.5-.1.9.2.7 1.2z" /></svg>
                                                Telegram
                                            </a>

                                            <a className="d-inline-flex align-items-center btn btn-outline-primary btn-sm" href="https://www.linkedin.com/in/abdushekur-mohammed-0781a2399/" target="_blank" rel="noopener noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="me-2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.036-1.85-3.036-1.853 0-2.136 1.446-2.136 2.941v5.664H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.603 0 4.269 2.368 4.269 5.452v6.289zM5.337 7.433c-1.144 0-2.069-.927-2.069-2.07 0-1.143.925-2.07 2.069-2.07 1.142 0 2.07.927 2.07 2.07 0 1.143-.928 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452z" /></svg>
                                                LinkedIn
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 p-4 bg-white text-dark">
                                    <h5>Messages</h5>
                                    {contacts.length === 0 && <p className="text-muted">No messages yet.</p>}
                                    <div className="list-group">
                                        {contacts.map((c) => (
                                            <div key={c.id} className="list-group-item bg-white border-0 p-3 shadow-sm mb-2 rounded">
                                                <div className="d-flex justify-content-between">
                                                    <strong>{c.name}</strong>
                                                    <small className="text-muted">{new Date(c.created_at).toLocaleString()}</small>
                                                </div>
                                                <div className="text-muted">{c.message}</div>
                                                <div className="small text-muted mt-1">{c.email}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
