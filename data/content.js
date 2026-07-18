/**
 * ============================================================
 *  EDIT YOUR RESUME CONTENT HERE
 *  All text on the website comes from this file.
 *  Do not put marks/scores here — they are intentionally omitted.
 * ============================================================
 */

const SITE = {
  // ---- Identity ----
  name: "Rushil",
  fullName: "Rushil Sharma",
  tagline: "B.Tech CSE · Student · Researcher · Chess Arbiter",
  location: "Dwarka, New Delhi",
  email: "rushilsharma@students.sau.ac.in",
  phone: "+91 7838866101",
  linkedin: "https://www.linkedin.com/in/rushil-sharma-3b31b5318",
  github: "https://github.com/RushilRJ",

  
  about: [
    "Hi, I’m Rushil, a B.Tech 3rd Year Computer Science student at South Asian University, New Delhi." 
    ,"Call me Explorer, Problem Solver."
    ,"All I believe is: learn from every instance of life. When a problem comes, I make sure it is never a problem again."
    ,"I have a chess mindset, it means I know patience, and I can calmly navigate through pressure and complex stuff as if I was born to do so."],

  // ---- Education (no marks) ----
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      detail: "3rd Year · Expected Graduation 2028",
      place: "South Asian University, New Delhi",
      period: "2024 – 2028"
    },
    
  ],

  // ---- Skills (grouped for easy editing) ----
  skills: [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "JavaScript", "C", "SQL"]
    },
    {
      category: "Web Technologies",
      items: ["HTML", "CSS"]
    },
    {
      category: "Software & Tools",
      items: ["Arduino IDE", "Canva", "GIMP", "Video Editing"]
    },
    {
      category : "KEYWORDS",
      items:["Fuzzy Logic", "Fuzzy Systems", "Chess","Cyber-Physical Systems"]
    }
    
  ],

  // ---- Research ----
  research: [
    {
      title: "Temporal Fuzzy Safety Margin Degradation for Early Warning in Cyber-Physical Systems",
      venue: "IEEE World Congress on Computational Intelligence (WCCI) 2026 — Fuzzy Systems Track",
      note: "Presented in person at WCCI 2026, Maastricht, Netherlands (June 2026).",
      link: "projects/fuzzy-safety-margin.html"
    }
  ],

  // ---- Experience / Internships ----
  experience: [
    {
      role: "Summer Intern",
      org: "IIT Delhi — CRDT",
      supervisor: "Prof. Vivek Kumar",
      period: "June – July 2026 (Ongoing)",
      points: [
        "Project: Municipal Solid Waste Management — a multifaceted approach based on circularity.",
        "Contributing solutions for the Municipal Corporation of Delhi (MCD) on sustainable solid waste management and the circular economy."
      ]
    },
    {
      role: "Space Science & Technology Intern",
      org: "India Space Lab",
      supervisor: "",
      period: "",
      points: [
        "Specialized modules in advanced drone technology, CanSat and CubeSat satellite systems, astronomy, and space entrepreneurship."
      ]
    },
    {
      role: "Online Course — Communication & Graphic Design",
      org: "South Asian University",
      supervisor: "",
      period: "",
      points: [
        "Completed structured training in communication design and visual media production."
      ]
    }
  ],

  // ---- Leadership & Extracurricular ----
  leadership: [
    
    {
      title: "Senior National Arbiter (SNA) — Chess",
      org: "All India Chess Federation",
      points: [
        "Titled Senior National Arbiter; officiated major Delhi chess events and part-time arbiter roles."
      ]
    }
  ],

  // ---- Achievements (no scores) ----
  achievements: [
    "Presented research at IEEE WCCI 2026 (Maastricht, Netherlands)",
    "Top 50 — National Medical Hackathon, VIT Bhopal (university representative)",
    "Senior National Arbiter (SNA), All India Chess Federation",
    "State-level chess tournament wins",
    ],

  // ---- Projects (cards on homepage + detail pages) ----
  // id must match the folder/file name under /projects/
  projects: [
    {
      id: "fuzzy-safety-margin",
      title: "Temporal Fuzzy Safety Margin Degradation",
      short: "Early-warning model for cyber-physical systems using temporal fuzzy logic — presented at IEEE WCCI 2026.",
      tags: ["Research", "Fuzzy Systems", "CPS"],
      thumbnail: "assets/projects/fuzzy-safety-margin.jpeg",
      page: "projects/fuzzy-safety-margin.html",
      // Detail page content
      overview:
        "This research introduces a temporal fuzzy approach to model how safety margins in cyber-physical systems degrade over time, enabling earlier and more nuanced warnings before hard failures.",
      highlights: [
        "Formulated safety-margin degradation as a temporal fuzzy process rather than a binary threshold.",
        "Targeted early-warning scenarios in cyber-physical systems where delayed alerts are costly.",
        "Peer-reviewed acceptance and oral presentation at IEEE WCCI 2026 (Fuzzy Systems Track).",
        "Presented in person in Maastricht, Netherlands (June 2026)."
      ],
      tech: ["Fuzzy Logic", "Cyber-Physical Systems", , "Research"],
      links: []
    },
    {
      id: "nids",
      title: "Network Intrusion Detection System",
      short: "ML-powered NIDS using Isolation Forest, Random Forest, and fuzzy scoring on the NSL-KDD dataset.",
      tags: ["Machine Learning", "Security", "Python"],
      thumbnail: "assets/projects/nids.svg",
      page: "projects/nids.html",
      overview:
        "A network-based intrusion detection system that combines classical ensemble methods with fuzzy scoring to flag anomalous traffic patterns more robustly than a single classifier.",
      highlights: [
        "Built on the NSL-KDD benchmark for network intrusion detection.",
        "Combined Isolation Forest and Random Forest with a fuzzy scoring layer.",
        "Focused on practical detection of anomalous and attack traffic patterns."
      ],
      tech: ["Python", "Machine Learning", "Isolation Forest", "Random Forest", "Fuzzy Scoring", "NSL-KDD"],
      links: []
    },
    {
      id: "guest-house",
      title: "Guest House Management System",
      short: "Database-backed system for room booking, billing, and operational records using SQL and Python.",
      tags: ["DBMS", "SQL", "Python"],
      thumbnail: "assets/projects/guest-house.svg",
      page: "projects/guest-house.html",
      overview:
        "A guest house management system designed as a database project to handle day-to-day operations — room booking, billing, and historical records — with a clean SQL schema and Python interface.",
      highlights: [
        "Modeled core entities: rooms, guests, bookings, and billing.",
        "Implemented booking workflows and record-keeping with SQL.",
        "Python layer for application logic and operational tasks."
      ],
      tech: ["SQL", "Python", "Database Design", "DBMS"],
      links: []
    },
    {
      id: "medical-hackathon",
      title: "Medical Hackathon Model",
      short: "Innovative medical model developed at VIT Bhopal; team reached Top 50 nationally.",
      tags: ["Hackathon", "Healthcare", "Innovation"],
      thumbnail: "assets/projects/medical-hackathon.jpg",
      page: "projects/medical-hackathon.html",
      overview:
        "Represented South Asian University at a national medical-focused hackathon hosted at VIT Bhopal. The team designed an innovative medical model and placed in the Top 50.",
      highlights: [
        "University representative at a competitive national medical hackathon.",
        "Rapid prototyping under time pressure with a multidisciplinary team.",
        "Reached Top 50 among participating teams at VIT Bhopal."
      ],
      tech: ["Prototyping", "Healthcare Domain", "Team Collaboration"],
      links: []
    }
  ]
};
