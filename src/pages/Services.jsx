import React from "react";
import "../components/service.css"; // page-specific service styles


const services = [
  {
    key: "frontend",
    title: "Frontend",
    subtitle: "Frontend Static Website for Promotion:",
    desc: "Build fast, SEO-friendly promotional static sites and landing pages optimized for conversion and performance.",
    icon: "🖥️",
    accent: "frontend",
  },
  {
    key: "backend",
    title: "Backend Development",
    desc: "Design and implement robust backend services (Node.js, Express, databases, authentication, APIs) that scale reliably.",
    icon: "🗄️",
    accent: "backend",
  },
  {
    key: "consult",
    title: "Consulting & Training",
    desc: "Hands-on mentorship, code reviews, and training programs to coach and advise junior developers and teams.",
    icon: "🎓",
    accent: "consult",
  },
  {
    key: "system",
    title: "System Development",
    desc: "End-to-end system design and implementation: architecture, integrations and deployment.",

    icon: "🔧",
    accent: "system",
  },
  {
    key: "webapps",
    title: "Web Applications",
    desc: "Modern, responsive web apps with React and Node.js",
    icon: "🌐",
    accent: "webapps",
  },
  {
    key: "ai",
    title: "AI Integration",
    desc: "Agentic AI generators and automation solutions",
    icon: "🤖",
    accent: "ai",
  },
  {
    key: "devops",
    title: "DevOps & Deploy",
    desc: "Docker, CI/CD and cloud deployment",
    icon: "⚙️",
    accent: "devops",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-5" style={{ minHeight: "60vh" }}>
      <div className="container">
        {/* ✅ Mixed gradient header */}
        <h2 className="mb-4 text-center services-header">Services</h2>

        {/* Continuous RTL ticker row (all services on one row, loops forever) */}
        <div className="services-ticker" aria-hidden="false" aria-label="Services ticker">
          <div className="ticker-inner" style={{ "--ticker-speed": '18s' }}>
            <div className="ticker-track">
              {services.map((s) => (
                <span key={s.key} className="ticker-item">{s.subtitle || s.title}</span>
              ))}
            </div>
            {/* duplicate for seamless loop */}
            <div className="ticker-track" aria-hidden="true">
              {services.map((s) => (
                <span key={s.key + '-dup'} className="ticker-item">{s.subtitle || s.title}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="row g-4">
          {services.map((s) => (
            <div key={s.key} className="col-md-6 col-lg-3">
              <div
                className={`card service-card accent-${s.accent} ${s.subtitle ? 'has-scroll' : ''}`}
                data-aos="fade-up"
              >
                {s.img ? (
                  <div className="service-media overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="img-fluid service-img"
                    />
                  </div>
                ) : (
                  <div className="p-4 text-center" style={{ fontSize: 36 }}>
                    {s.icon}
                  </div>
                )}
                <div className="card-body text-center">
                  <h5 className="card-title text-white">{s.title}</h5>
                  {s.subtitle ? (
                    <h6 className="small subtitle-scroll" style={{ "--ticker-duration": `${Math.max(8, s.subtitle.length / 8 * 2)}s` }} tabIndex={0} aria-live="polite">
                      <span className="ticker">{s.subtitle}</span>
                    </h6>
                  ) : null}
                  <p className="card-text text-white">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
