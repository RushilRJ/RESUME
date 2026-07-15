/**
 * Renders homepage sections from data/content.js (SITE object).
 * Edit content in data/content.js — not here.
 */

(function () {
  "use strict";

  if (typeof SITE === "undefined") {
    console.error("SITE data missing. Load data/content.js before main.js");
    return;
  }

  /* ---------- helpers ---------- */
  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => {
        if (k === "className") node.className = v;
        else if (k === "html") node.innerHTML = v;
        else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
        else if (v !== undefined && v !== null) node.setAttribute(k, v);
      });
    }
    if (children != null) {
      const list = Array.isArray(children) ? children : [children];
      list.forEach((c) => {
        if (c == null) return;
        node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
      });
    }
    return node;
  }

  function mount(id, node) {
    const root = document.getElementById(id);
    if (!root) return;
    root.innerHTML = "";
    if (Array.isArray(node)) node.forEach((n) => root.appendChild(n));
    else if (node) root.appendChild(node);
  }

  /* ---------- Hero ---------- */
  function renderHero() {
    const about = SITE.about || [];
    mount("hero-name", document.createTextNode(SITE.name));
    mount("hero-tagline", document.createTextNode(SITE.tagline));
    mount(
      "hero-about",
      about.map((p) => el("p", { className: "hero-about" }, p))
    );

    const meta = el("div", { className: "hero-meta" }, [
      el("a", { href: "mailto:" + SITE.email }, "✉ " + SITE.email),
      el("a", { href: SITE.github, target: "_blank", rel: "noopener" }, "⌘ GitHub"),
      el("a", { href: SITE.linkedin, target: "_blank", rel: "noopener" }, "in LinkedIn"),
      el("span", null, "◎ " + SITE.location)
    ]);
    mount("hero-meta", meta);

    const badge = document.getElementById("portrait-badge");
    if (badge) {
      badge.innerHTML =
        "<strong>" +
        SITE.fullName +
        "</strong>" +
        (SITE.education[0] ? SITE.education[0].place : "");
    }
  }

  /* ---------- Education ---------- */
  function renderEducation() {
    mount(
      "education-list",
      el(
        "div",
        { className: "grid-2" },
        SITE.education.map((e) =>
          el("article", { className: "card reveal" }, [
            el("h3", null, e.degree),
            e.period ? el("div", { className: "meta" }, e.period) : null,
            el("div", { className: "place" }, e.place),
            e.detail ? el("p", null, e.detail) : null
          ])
        )
      )
    );
  }

  /* ---------- Skills ---------- */
  function renderSkills() {
    mount(
      "skills-list",
      el(
        "div",
        { className: "grid-2" },
        SITE.skills.map((g) =>
          el("div", { className: "card skill-group reveal" }, [
            el("h3", null, g.category),
            el(
              "div",
              { className: "skill-tags" },
              g.items.map((item) => el("span", { className: "tag" }, item))
            )
          ])
        )
      )
    );
  }

  /* ---------- Research ---------- */
  function renderResearch() {
    mount(
      "research-list",
      el(
        "div",
        { className: "timeline" },
        SITE.research.map((r) =>
          el("article", { className: "card timeline-item reveal" }, [
            el("h3", null, r.title),
            el("div", { className: "meta" }, r.venue),
            el("p", null, r.note),
            r.link
              ? el("p", { style: "margin-top:0.85rem" }, [
                  el("a", { href: r.link, className: "project-cta" }, "Read more →")
                ])
              : null
          ])
        )
      )
    );
  }

  /* ---------- Experience ---------- */
  function renderExperience() {
    mount(
      "experience-list",
      el(
        "div",
        { className: "timeline" },
        SITE.experience.map((x) =>
          el("article", { className: "card timeline-item reveal" }, [
            el("h3", null, x.role),
            el(
              "div",
              { className: "meta" },
              [x.org, x.period].filter(Boolean).join(" · ")
            ),
            x.supervisor
              ? el("div", { className: "place" }, "Supervisor: " + x.supervisor)
              : null,
            el(
              "ul",
              null,
              x.points.map((p) => el("li", null, p))
            )
          ])
        )
      )
    );
  }

  /* ---------- Leadership ---------- */
  function renderLeadership() {
    mount(
      "leadership-list",
      el(
        "div",
        { className: "grid-2" },
        SITE.leadership.map((l) =>
          el("article", { className: "card reveal" }, [
            el("h3", null, l.title),
            el("div", { className: "meta" }, l.org),
            el(
              "ul",
              null,
              l.points.map((p) => el("li", null, p))
            )
          ])
        )
      )
    );
  }

  /* ---------- Achievements ---------- */
  function renderAchievements() {
    mount(
      "achievements-list",
      el(
        "div",
        { className: "achieve-list" },
        SITE.achievements.map((a) =>
          el("div", { className: "achieve-item reveal" }, [
            el("div", { className: "icon", html: "★" }),
            el("p", null, a)
          ])
        )
      )
    );
  }

  /* ---------- Projects ---------- */
  function renderProjects() {
    mount(
      "projects-list",
      el(
        "div",
        { className: "projects-grid" },
        SITE.projects.map((p) =>
          el("a", { href: p.page, className: "project-card reveal" }, [
            el("div", { className: "project-thumb" }, [
              el("img", {
                src: p.thumbnail,
                alt: p.title,
                loading: "lazy"
              })
            ]),
            el("div", { className: "project-body" }, [
              el("h3", null, p.title),
              el(
                "div",
                { className: "project-tags" },
                (p.tags || []).map((t) => el("span", null, t))
              ),
              el("p", null, p.short),
              el("span", { className: "project-cta" }, "View project →")
            ])
          ])
        )
      )
    );
  }

  /* ---------- Contact ---------- */
  function renderContact() {
    mount(
      "contact-links",
      el("div", { className: "contact-links" }, [
        el("a", { href: "mailto:" + SITE.email, className: "btn btn-primary" }, "Email me"),
        el(
          "a",
          { href: SITE.github, className: "btn btn-ghost", target: "_blank", rel: "noopener" },
          "GitHub"
        ),
        el(
          "a",
          { href: SITE.linkedin, className: "btn btn-ghost", target: "_blank", rel: "noopener" },
          "LinkedIn"
        )
      ])
    );
  }

  /* ---------- Nav + scroll ---------- */
  function setupNav() {
    const nav = document.getElementById("nav");
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");

    window.addEventListener("scroll", () => {
      if (!nav) return;
      nav.classList.toggle("scrolled", window.scrollY > 20);
    });

    if (toggle && links) {
      toggle.addEventListener("click", () => {
        links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", links.classList.contains("open"));
      });
      links.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => links.classList.remove("open"))
      );
    }
  }

  function setupReveal() {
    const nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    nodes.forEach((n) => io.observe(n));
  }

  /* ---------- Document title ---------- */
  function setTitles() {
    const brand = document.getElementById("nav-brand");
    if (brand) brand.innerHTML = SITE.name + "<span>.</span>";
    const year = document.getElementById("footer-year");
    if (year) year.textContent = String(new Date().getFullYear());
    const footerName = document.getElementById("footer-name");
    if (footerName) footerName.textContent = SITE.fullName;
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    setTitles();
    renderHero();
    renderEducation();
    renderSkills();
    renderResearch();
    renderExperience();
    renderLeadership();
    renderAchievements();
    renderProjects();
    renderContact();
    setupNav();
    // reveal after DOM filled
    requestAnimationFrame(() => setupReveal());
  });
})();
