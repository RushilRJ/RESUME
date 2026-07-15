/**
 * Renders a project detail page from SITE.projects using ?id= or data-project on <body>.
 * Include: data/content.js then this file.
 */

(function () {
  "use strict";

  if (typeof SITE === "undefined") {
    console.error("SITE data missing. Load data/content.js before project.js");
    return;
  }

  function getProjectId() {
    const bodyId = document.body.getAttribute("data-project");
    if (bodyId) return bodyId;
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }

  function findProject(id) {
    return (SITE.projects || []).find((p) => p.id === id);
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => {
        if (k === "className") node.className = v;
        else if (k === "html") node.innerHTML = v;
        else if (v != null) node.setAttribute(k, v);
      });
    }
    if (children != null) {
      (Array.isArray(children) ? children : [children]).forEach((c) => {
        if (c == null) return;
        node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
      });
    }
    return node;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const brand = document.getElementById("nav-brand");
    if (brand) brand.innerHTML = SITE.name + "<span>.</span>";

    const id = getProjectId();
    const project = findProject(id);
    const root = document.getElementById("project-root");

    if (!project || !root) {
      if (root) {
        root.innerHTML =
          '<div class="container page-hero"><a class="back-link" href="../index.html">← Back home</a><h1>Project not found</h1><p class="lede">Check the project id in data/content.js</p></div>';
      }
      return;
    }

    document.title = project.title + " · " + SITE.name;

    const tags = el(
      "div",
      { className: "project-tags", style: "margin-bottom:1.25rem" },
      (project.tags || []).map((t) => el("span", null, t))
    );

    const highlights = el(
      "ul",
      null,
      (project.highlights || []).map((h) => el("li", null, h))
    );

    const tech = el(
      "div",
      { className: "skill-tags" },
      (project.tech || []).map((t) => el("span", { className: "tag" }, t))
    );

    const links =
      project.links && project.links.length
        ? el(
            "div",
            { className: "contact-links", style: "justify-content:flex-start;margin-top:0.5rem" },
            project.links.map((l) =>
              el(
                "a",
                { href: l.url, className: "btn btn-ghost", target: "_blank", rel: "noopener" },
                l.label
              )
            )
          )
        : el("p", { style: "color:var(--text-dim);font-size:0.9rem" }, "No external links yet.");

    root.innerHTML = "";
    root.appendChild(
      el("section", { className: "page-hero" }, [
        el("div", { className: "container" }, [
          el("a", { href: "../index.html#projects", className: "back-link" }, "← Back to projects"),
          el("h1", null, project.title),
          tags,
          el("p", { className: "lede" }, project.short)
        ])
      ])
    );

    root.appendChild(
      el("section", { className: "container detail-layout" }, [
        el("div", { className: "detail-main" }, [
          el("div", { className: "card" }, [
            el("div", { className: "project-thumb", style: "border-radius:10px;margin-bottom:1.25rem" }, [
              el("img", {
                src: "../" + project.thumbnail,
                alt: project.title
              })
            ]),
            el("h2", null, "Overview"),
            el("p", null, project.overview)
          ]),
          el("div", { className: "card" }, [
            el("h2", null, "Highlights"),
            highlights
          ])
        ]),
        el("aside", { className: "detail-side" }, [
          el("div", { className: "card" }, [el("h2", null, "Tech & tools"), tech]),
          el("div", { className: "card" }, [el("h2", null, "Links"), links]),
          el("div", { className: "card" }, [
            el("h2", null, "Contact"),
            el("p", { style: "font-size:0.9rem;color:var(--text-muted)" }, [
              el("a", { href: "mailto:" + SITE.email }, SITE.email)
            ])
          ])
        ])
      ])
    );

    // nav scroll class
    const nav = document.getElementById("nav");
    window.addEventListener("scroll", () => {
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
    });
  });
})();
