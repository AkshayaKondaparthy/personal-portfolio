/* =========================================================
   Personal Portfolio - JavaScript ES6+
   Demonstrates variables, arrays, objects, functions,
   arrow functions, conditions, loops, events and DOM.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "Spam Email Detection",
            category: "security",
            icon: "bi-envelope-exclamation",
            description: "NLP and machine learning based application for classifying messages as spam or legitimate.",
            technologies: ["Python", "NLP", "Naive Bayes", "Machine Learning"],
            github: "https://github.com/"
        },
        {
            title: "Fake Review Detection",
            category: "ai",
            icon: "bi-chat-square-text",
            description: "NLP-based system designed to identify suspicious and potentially fake online reviews.",
            technologies: ["Python", "NLP", "Machine Learning", "Text Classification"],
            github: "https://github.com/"
        },
        {
            title: "Educational Assistant Bot",
            category: "ai",
            icon: "bi-robot",
            description: "AI-powered educational assistant developed using Microsoft Azure services to support student learning.",
            technologies: ["Microsoft Azure", "AI", "Python", "Chatbot"],
            github: "https://github.com/"
        },
        {
            title: "OmniShield AI",
            category: "security",
            icon: "bi-shield-check",
            description: "AI-focused cybersecurity concept for detecting voice-clone threats and malicious QR/phishing content.",
            technologies: ["AI", "Cybersecurity", "NLP", "Threat Detection"],
            github: "https://github.com/"
        },
        {
            title: "Student Report Card System",
            category: "web",
            icon: "bi-mortarboard-fill",
            description: "Web application featuring admin login, student login, marks entry and student report viewing.",
            technologies: ["HTML", "CSS", "JavaScript", "Python", "Database"],
            github: "https://github.com/"
        },
        {
            title: "RaagaVerse",
            category: "web",
            icon: "bi-music-note-beamed",
            description: "Responsive Spotify-style music interface with a focus on Telugu songs and modern web UI.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
            github: "https://github.com/"
        }
    ];

    const projectContainer = document.querySelector("#projectContainer");
    const noProjects = document.querySelector("#noProjects");
    const filterButtons = document.querySelectorAll(".filter-btn");

    const renderProjects = (filter = "all") => {
        projectContainer.innerHTML = "";

        const filteredProjects = projects.filter(project =>
            filter === "all" || project.category === filter
        );

        noProjects.classList.toggle("d-none", filteredProjects.length !== 0);

        filteredProjects.forEach(project => {
            const card = document.createElement("div");
            card.className = "col-md-6 col-lg-4";

            card.innerHTML = `
                <article class="project-card">
                    <div class="project-top">
                        <i class="bi ${project.icon}" aria-hidden="true"></i>
                        <span class="project-category">${project.category.toUpperCase()}</span>
                    </div>

                    <div class="project-body">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>

                        <div class="tech-tags">
                            ${project.technologies
                                .map(tech => `<span class="tech-tag">${tech}</span>`)
                                .join("")}
                        </div>

                        <a href="${project.github}" target="_blank" rel="noopener noreferrer"
                           class="btn btn-sm btn-primary-custom">
                            <i class="bi bi-github me-1"></i> GitHub
                        </a>
                    </div>
                </article>
            `;

            projectContainer.appendChild(card);
        });
    };

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            renderProjects(button.dataset.filter);
        });
    });

    renderProjects();

    // Theme switching
    const themeToggle = document.querySelector("#themeToggle");
    const themeIcon = themeToggle.querySelector("i");

    const updateThemeButton = () => {
        const dark = document.body.classList.contains("dark-theme");

        themeIcon.className = dark
            ? "bi bi-sun-fill"
            : "bi bi-moon-stars-fill";

        themeToggle.setAttribute(
            "aria-label",
            dark ? "Switch to light theme" : "Switch to dark theme"
        );
    };

    if (localStorage.getItem("portfolioTheme") === "dark") {
        document.body.classList.add("dark-theme");
    }

    updateThemeButton();

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        const isDark = document.body.classList.contains("dark-theme");
        localStorage.setItem("portfolioTheme", isDark ? "dark" : "light");

        updateThemeButton();
    });

    // Typing effect
    const typingText = document.querySelector("#typingText");

    const phrases = [
        "Software Development & AI Enthusiast",
        "NLP & Machine Learning Learner",
        "Cybersecurity Enthusiast",
        "Problem Solver & Builder"
    ];

    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    const typeEffect = () => {
        const phrase = phrases[phraseIndex];

        if (!deleting) {
            typingText.textContent = phrase.substring(0, characterIndex + 1);
            characterIndex++;

            if (characterIndex === phrase.length) {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }
        } else {
            typingText.textContent = phrase.substring(0, characterIndex - 1);
            characterIndex--;

            if (characterIndex === 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
        }

        setTimeout(typeEffect, deleting ? 45 : 80);
    };

    typeEffect();

    // Contact form validation
    const contactForm = document.querySelector("#contactForm");
    const formAlert = document.querySelector("#formAlert");

    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            event.stopPropagation();
            contactForm.classList.add("was-validated");

            formAlert.className = "alert alert-danger";
            formAlert.textContent =
                "Please correct the highlighted fields and try again.";

            return;
        }

        const formData = new FormData(contactForm);
        const name = formData.get("name");

        formAlert.className = "alert alert-success";
        formAlert.textContent =
            `Thank you, ${name}! Your message has been validated successfully.`;

        contactForm.reset();
        contactForm.classList.remove("was-validated");
    });

    // Scroll-to-top
    const scrollTopBtn = document.querySelector("#scrollTopBtn");

    window.addEventListener("scroll", () => {
        scrollTopBtn.classList.toggle("show", window.scrollY > 450);
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Current year
    document.querySelector("#currentYear").textContent =
        new Date().getFullYear();

    // Close Bootstrap mobile navbar after selection
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const mainNav = document.querySelector("#mainNav");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (mainNav.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(mainNav).hide();
            }
        });
    });

    // Active navigation link while scrolling
    const sections = document.querySelectorAll("main section[id]");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove("active"));

                const activeLink = document.querySelector(
                    `.nav-link[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }, {
        rootMargin: "-35% 0px -55% 0px"
    });

    sections.forEach(section => observer.observe(section));
});
