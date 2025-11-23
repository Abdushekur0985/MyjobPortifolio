import React from "react";

const sampleProjects = [
  {
    id: 1,
    title: "Payment Platform",
    desc: "Scalable payment integration and secure checkout flows.",
    img: "/src/assets/payment.png",
    tech: ["React", "Node"],
    github: "#",
    demo: "#",
    accent: "payment",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    desc: "Multi-tenant SaaS dashboard with analytics and billing.",
    img: "/src/assets/saas.png",
    tech: ["React", "Postgres"],
    github: "#",
    demo: "#",
    accent: "saas",
  },
  {
    id: 3,
    title: "Delivery App",
    desc: "Delivery routing and tracking with real-time updates.",
    img: "/src/assets/delivery.png",
    tech: ["React Native", "Node"],
    github: "#",
    demo: "#",
    accent: "delivery",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-5" style={{ minHeight: "60vh" }}>
      <div className="container">
        <h2 className="mb-4">Portfolio</h2>
        <div className="row g-4">
          {sampleProjects.map((p) => (
            <div key={p.id} className="col-md-4">
              <article
                className={`card project-card accent-${p.accent}`}
                data-aos="fade-up"
              >
                <div className="ratio ratio-16x9 overflow-hidden project-media">
                  <img src={p.img} className="project-img" alt={p.title} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text text-muted">{p.desc}</p>
                  <div className="d-flex gap-2 align-items-center">
                    <small className="text-muted me-auto">
                      {p.tech.join(" • ")}
                    </small>
                    <a
                      className="btn btn-sm btn-outline-light"
                      href={p.github}
                    >
                      Code
                    </a>
                    <a className="btn btn-sm btn-primary" href={p.demo}>
                      Live
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

