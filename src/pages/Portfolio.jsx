import React from "react";

const sampleProjects = [
  {
    id: 1,
    title: "Payment Platform",
    desc: "Scalable payment integration and secure checkout flows.",
    img: "/src/assets/payment.png",
    tech: ["React", "Node"],
    github: "https://github.com/Abdushekur0985",
    demo: "#",
    accent: "payment",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    desc: "Multi-tenant SaaS dashboard with analytics and billing.",
    img: "/src/assets/saas.png",
    tech: ["React", "Postgres"],
    github: "https://github.com/Abdushekur0985",
    demo: "#",
    accent: "saas",
  },
  {
    id: 3,
    title: "Delivery App",
    desc: "Delivery routing and tracking with real-time updates.",
    img: "/src/assets/delivery.png",
    tech: ["React Native", "Node"],
    github: "https://github.com/Abdushekur0985",
    demo: "#",
    accent: "delivery",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-5" style={{ minHeight: "60vh" }}>
      <div className="container">
        {/* ✅ Centered and bold header */}
        <h2 className="mb-4 text-center fw-bold">Portfolio</h2>

        <div className="row g-4">
          {sampleProjects.map((p) => (
            <div key={p.id} className="col-md-4">
              <article
                className={`card project-card accent-${p.accent} shadow-sm`}
                data-aos="fade-up"
              >
                <div className="ratio ratio-16x9 overflow-hidden project-media">
                  <img
                    src={p.img}
                    className="project-img img-fluid"
                    alt={p.title}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  {/* ✅ Darker, more visible text */}
                  <h5 className="card-title text-light fw-semibold">{p.title}</h5>
                  <p className="card-text text-secondary">{p.desc}</p>

                  <div className="d-flex gap-2 align-items-center">
                    <small className="text-light me-auto">
                      {p.tech.join(" • ")}
                    </small>
                    <a
                      className="btn btn-sm btn-outline-light"
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code on GitHub
                    </a>
                    <a className="btn btn-sm btn-primary" href={p.demo}>
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
