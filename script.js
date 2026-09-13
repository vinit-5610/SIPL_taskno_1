const CONFIG = {
  name: "Vinit Raj",
  initials: "VR",
  roleStatic: "Computer Science Student / Web Developer",
  roles: [
    "Computer Science Student",
    "Web Developer",
    "Creative Problem Solver"
  ],
  tagline: "Building clean, modern and user-focused digital experiences.",
  heroDescription: "I design and build interfaces with an eye for detail — turning rough ideas into fast, accessible, working software.",
  bio: "I am a Computer Science student and aspiring developer who enjoys building websites, learning new technologies and working on practical projects. I like taking an idea from a rough sketch to a polished, working interface, and I'm always looking for the next thing to learn.",

  email: "ps706594@gmail.com",
  phone: "+91 6202894625",
  location: "Bihar, India",

  resumeUrl: "assets/resume.pdf",
  profileImage: "assets/profile.jpeg",
  aboutImage: "assets/about.jpeg",

  socials: {
    github: "https://github.com/vinit-5610",
    linkedin: "https://www.linkedin.com/in/vinit-raj-49b3a7311/",
    instagram: "https://www.instagram.com/vinit_5610/",
    email: "ps706594@gmail.com"
  },

  stats: [
    { value: "3+", label: "Projects built" },
    { value: "10+", label: "Technologies learned" },
    { value: "100%", label: "Passion for learning" }
  ],

  skills: [
    { code: "HTML", name: "HTML5", desc: "Semantic, accessible structure" },
    { code: "CSS", name: "CSS3", desc: "Layouts, animation, responsive design" },
    { code: "JS", name: "JavaScript", desc: "Interactive, dynamic interfaces" },
    { code: "C", name: "C", desc: "Core programming fundamentals" },
    { code: "JAVA", name: "Java", desc: "Object-oriented programming" },
    { code: "PY", name: "Python", desc: "Scripting and problem solving" },
    { code: "WP", name: "WordPress", desc: "Custom themes and websites" },
    { code: "GIT", name: "Git", desc: "Version control and workflows" },
    { code: "GH", name: "GitHub", desc: "Collaboration and code hosting" },
    { code: "RWD", name: "Responsive Design", desc: "Interfaces that work everywhere" },
    { code: "AE", name: "Adobe After Effects", desc: "Motion graphics, animation and visual effects" },
    { code: "PR", name: "Adobe Premiere Pro", desc: "Video editing, transitions and storytelling" },
    { code: "AI", name: "Adobe Illustrator", desc: "Vector graphics, illustrations and design" },
    { code: "CANVA", name: "Canva", desc: "Graphic design, presentations and social media content" }
  ],

 
  projects: [
    {
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio built from scratch with vanilla HTML, CSS and JavaScript — the site you're looking at right now.",
      image: "assets/projects/portfolio-site.png",
      category: "web",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "#",
      github: "#",
      featured: true
    },
    {
      title: "NotoByte — Study Resource Platform",
      description: "A centralized study platform providing notes, PYQs, syllabus resources and quizzes for students.",
      image: "assets/projects/notobyte.png",
      category: "web",
      tech: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Vercel"],
      live: "https://notobyte.vercel.app/",
      github: "#",
      featured: true
    },
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  bindConfig();
  renderSkills();
  renderProjects();
  // initLoader();
  initNavbar();
  initMobileMenu();
  initScrollProgressAndBackToTop();
  initTypingRoles();
  initHeroGlow();
  initScrollReveal();
  initProjectFilters();
  initResumeButtons();
  initContactForm();
  initCopyEmail();
  initActiveNavOnScroll();
});


function bindConfig() {
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const key = el.getAttribute("data-bind");
    const value = getConfigValue(key);
    if (value === undefined) return;
    el.textContent = value;
  });

  document.querySelectorAll("[data-bind-href]").forEach((el) => {
    const key = el.getAttribute("data-bind-href");
    const value = getConfigValue(key);
    if (value !== undefined) el.setAttribute("href", value);
  });

  document.querySelectorAll("[data-bind-src]").forEach((el) => {
    const key = el.getAttribute("data-bind-src");
    const value = getConfigValue(key);
    if (value !== undefined) el.setAttribute("src", value);
  });

  document.title = `${CONFIG.name} — ${CONFIG.roleStatic}`;
  const year = new Date().getFullYear();
  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = year;
  });

 
  const statsWrap = document.querySelector("[data-stats]");
  if (statsWrap) {
    statsWrap.innerHTML = CONFIG.stats
      .map(
        (s) => `
        <div class="stat">
          <div class="stat-value">${escapeHTML(s.value)}</div>
          <div class="stat-label">${escapeHTML(s.label)}</div>
        </div>`
      )
      .join("");
  }
}

function getConfigValue(path) {
  return path.split(".").reduce((obj, k) => (obj ? obj[k] : undefined), CONFIG);
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}


function initLoader() {
  const loader = document.querySelector(".loader");
  if (!loader) return;
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("is-hidden"), 350);
  });

  setTimeout(() => loader.classList.add("is-hidden"), 1800);
}


function initNavbar() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".menu-overlay");
  if (!hamburger || !menu || !overlay) return;

  const openMenu = () => {
    hamburger.classList.add("is-open");
    menu.classList.add("is-open");
    overlay.classList.add("is-open");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    hamburger.classList.remove("is-open");
    menu.classList.remove("is-open");
    overlay.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  hamburger.addEventListener("click", () => {
    const isOpen = menu.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });
  overlay.addEventListener("click", closeMenu);
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}


function initScrollProgressAndBackToTop() {
  const progress = document.querySelector(".scroll-progress");
  const backToTop = document.querySelector(".back-to-top");

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progress) progress.style.width = `${pct}%`;
    if (backToTop) backToTop.classList.toggle("is-visible", scrollTop > 480);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    });
  }
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}


function initTypingRoles() {
  const el = document.getElementById("role-text");
  if (!el) return;

  const roles = CONFIG.roles && CONFIG.roles.length ? CONFIG.roles : [CONFIG.roleStatic];

  if (prefersReducedMotion()) {
    el.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const TYPE_SPEED = 55;
  const DELETE_SPEED = 30;
  const HOLD_TIME = 1400;

  function tick() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      charIndex++;
      el.textContent = currentRole.slice(0, charIndex);
      if (charIndex === currentRole.length) {
        isDeleting = true;
        return setTimeout(tick, HOLD_TIME);
      }
      return setTimeout(tick, TYPE_SPEED);
    }

    charIndex--;
    el.textContent = currentRole.slice(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      return setTimeout(tick, 300);
    }
    return setTimeout(tick, DELETE_SPEED);
  }

  tick();
}


function initHeroGlow() {
  const hero = document.querySelector(".hero");
  const glow = document.querySelector(".hero-cursor-glow");
  if (!hero || !glow) return;
  if (prefersReducedMotion()) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    glow.style.left = `${e.clientX - rect.left}px`;
    glow.style.top = `${e.clientY - rect.top}px`;
    glow.style.opacity = "1";
  });
  hero.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
  });
}


function initScrollReveal() {
  const targets = document.querySelectorAll("[data-reveal], [data-reveal-group]");
  if (!targets.length) return;

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  targets.forEach((t) => observer.observe(t));
}


function renderSkills() {
  const wrap = document.querySelector("[data-skills-grid]");
  if (!wrap) return;

  wrap.innerHTML = CONFIG.skills
    .map(
      (skill) => `
      <div class="skill-card" data-reveal>
        <div class="skill-icon" aria-hidden="true">${escapeHTML(skill.code)}</div>
        <div>
          <div class="skill-name">${escapeHTML(skill.name)}</div>
          <div class="skill-desc">${escapeHTML(skill.desc)}</div>
        </div>
      </div>`
    )
    .join("");
}


function renderProjects(filter = "all") {
  const wrap = document.querySelector("[data-projects-grid]");
  const empty = document.querySelector("[data-projects-empty]");
  if (!wrap) return;

  const list =
    filter === "all"
      ? CONFIG.projects
      : CONFIG.projects.filter((p) => p.category === filter);

  wrap.innerHTML = list
    .map((project) => {
      const initials = project.title
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

      return `
      <article class="project-card${project.featured ? " is-featured" : ""}" data-reveal>
        <div class="project-media">
          <img src="${escapeHTML(project.image)}" alt="Screenshot of ${escapeHTML(project.title)}"
               loading="lazy"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="img-placeholder" aria-hidden="true">${escapeHTML(initials)}</div>
        </div>
        <div class="project-body">
          <h3 class="project-title">${escapeHTML(project.title)}</h3>
          <p class="project-desc">${escapeHTML(project.description)}</p>
          <div class="project-tags">
            ${project.tech.map((t) => `<span>${escapeHTML(t)}</span>`).join("")}
          </div>
          <div class="project-links">
            <a href="${escapeHTML(project.live)}" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 4h6v6M10 14 20 4M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/></svg>
              Live Demo
            </a>
            <a href="${escapeHTML(project.github)}" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </article>`;
    })
    .join("");

  if (empty) empty.classList.toggle("is-visible", list.length === 0);

 
  initScrollReveal();
}

function initProjectFilters() {
  const buttons = document.querySelectorAll("[data-filter]");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderProjects(btn.getAttribute("data-filter"));
    });
  });
}


function initResumeButtons() {
  document.querySelectorAll("[data-resume-link]").forEach((el) => {
    el.setAttribute("href", CONFIG.resumeUrl);
  });
}


function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector("[data-form-status]");

  const fields = {
    name: form.querySelector("#name"),
    email: form.querySelector("#email"),
    subject: form.querySelector("#subject"),
    message: form.querySelector("#message")
  };

  const validators = {
    name: (v) => (v.trim().length >= 2 ? "" : "Please enter your name (min. 2 characters)."),
    email: (v) => (isValidEmail(v) ? "" : "Please enter a valid email address."),
    subject: (v) => (v.trim().length >= 3 ? "" : "Subject should be at least 3 characters."),
    message: (v) => (v.trim().length >= 15 ? "" : "Message should be at least 15 characters.")
  };

  Object.entries(fields).forEach(([key, input]) => {
    if (!input) return;
    input.addEventListener("blur", () => validateField(key, input));
    input.addEventListener("input", () => {
      const fieldWrap = input.closest(".field");
      if (fieldWrap && fieldWrap.classList.contains("has-error")) {
        validateField(key, input);
      }
    });
  });

  function validateField(key, input) {
    const errorEl = input.closest(".field").querySelector("[data-field-error]");
    const message = validators[key](input.value);
    input.closest(".field").classList.toggle("has-error", Boolean(message));
    if (errorEl) errorEl.textContent = message;
    return !message;
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;
    Object.entries(fields).forEach(([key, input]) => {
      if (!input) return;
      if (!validateField(key, input)) isValid = false;
    });

    if (!isValid) {
      showStatus("error", "Please fix the highlighted fields and try again.");
      return;
    }

    const payload = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      subject: fields.subject.value.trim(),
      message: fields.message.value.trim()
    };

    submitContactForm(payload)
      .then(() => {
        showStatus("success", "Thanks! Your message has been received — I'll get back to you soon.");
        form.reset();
      })
      .catch(() => {
        showStatus("error", "Something went wrong. Please try again or email me directly.");
      });
  });

  function showStatus(type, message) {
    if (!status) return;
    status.textContent = message;
    status.className = `form-status is-${type}`;
    status.setAttribute("role", "status");
  }

  
  function submitContactForm(payload) {
    console.log("Contact form demo submission:", payload);
    return new Promise((resolve) => setTimeout(resolve, 500));
  }
}


function initCopyEmail() {
  document.querySelectorAll("[data-copy-email]").forEach((btn) => {
    const defaultLabel = btn.textContent;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(CONFIG.email);
        btn.textContent = "Email copied!";
      } catch (err) {
        btn.textContent = "Couldn't copy — try manually";
      }
      setTimeout(() => {
        btn.textContent = defaultLabel;
      }, 2000);
    });
  });
}


function initActiveNavOnScroll() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-menu-links a");
  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
