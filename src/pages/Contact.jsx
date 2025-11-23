import React from "react";
import "../components/contact.css"; //  custom CSS for styling

export default function Contact() {
  const phoneNumber = "+2519285844 or 0935915874"; 

  return (
    <section id="contact" className="py-5" style={{ minHeight: "40vh" }}>
      <div className="container">
        {/*  Gradient animated header */}
        <h2 className="mb-4 text-center contact-header">Contact</h2>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card bg-dark border-0 shadow-lg rounded">
              <div className="p-4 text-light">
                <p className="mb-4 text-center lead">
                  Get in touch via phone or connect with me on social media.
                </p>

                {/* Phone */}
                <div className="d-flex justify-content-center mb-4">
                  <a
                    className="d-inline-flex align-items-center btn btn-outline-light btn-lg contact-btn"
                    href={`tel:${phoneNumber}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="me-2"
                    >
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1v3.5a1 1 0 01-1 1A19 19 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57.12.33.06.7-.24 1.01l-2.2 2.21z" />
                    </svg>
                    {phoneNumber}
                  </a>
                </div>

                {/* Social Media */}
                <h5 className="text-center mb-3">Connect with me</h5>
                <div className="d-flex justify-content-center gap-3">
                  <a
                    className="d-inline-flex align-items-center btn btn-outline-light btn-sm contact-btn"
                    href="https://t.me/Pursuitofjannah"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="me-2">📨</span> Telegram
                  </a>

                  <a
                    className="d-inline-flex align-items-center btn btn-outline-primary btn-sm contact-btn"
                    href="https://www.linkedin.com/in/abdushekur-mohammed-0781a2399/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="me-2">💼</span> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

