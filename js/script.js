/* =========================================================
   Personal Portfolio - JavaScript ES6+
   Demonstrates:
   Variables, arrays, objects, functions,
   arrow functions, conditions, loops,
   events and DOM manipulation.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       PROJECT DATA
    ===================================================== */

    const projects = [

        // -------------------------------------------------
        // REVIEWSHIELD AI
        // -------------------------------------------------

        {
            title: "ReviewShield AI",

            category: "ai",

            icon: "bi-shield-check",

            description:
                "NLP-based fake review detection system using TF-IDF and Logistic Regression for real-time review analysis, confidence scoring, analytics, and reports.",

            technologies: [
                "Python",
                "NLP",
                "TF-IDF",
                "Logistic Regression",
                "React",
                "FastAPI",
                "Tailwind CSS"
            ],

            github: "https://github.com/"
        },


        // -------------------------------------------------
        // AI VOICE WIKI ASSISTANT
        // -------------------------------------------------

        {
            title: "AI Voice Wiki Assistant",

            category: "ai",

            icon: "bi-mic-fill",

            description:
                "Voice-based assistant developed using SpeechRecognition, pyttsx3, and Wikipedia for voice-driven information retrieval.",

            technologies: [
                "Python",
                "SpeechRecognition",
                "pyttsx3",
                "Wikipedia",
                "Voice AI"
            ],

            github: "https://github.com/"
        },


        // -------------------------------------------------
        // AI PATIENT POST-DISCHARGE AGENT
        // -------------------------------------------------

        {
            title: "AI Patient Post-Discharge Agent",

            category: "web",

            icon: "bi-heart-pulse-fill",

            description:
                "AI-powered healthcare monitoring system using React.js, FastAPI, and PostgreSQL, featuring authentication, patient tracking, and analytics.",

            technologies: [
                "React.js",
                "FastAPI",
                "PostgreSQL",
                "REST APIs",
                "AI"
            ],

            github: "https://github.com/"
        },


        // -------------------------------------------------
        // SPAM EMAIL DETECTION
        // -------------------------------------------------

        {
            title: "Spam Email Detection",

            category: "security",

            icon: "bi-envelope-exclamation",

            description:
                "NLP and machine learning based application for classifying messages as spam or legitimate.",

            technologies: [
                "Python",
                "NLP",
                "Naive Bayes",
                "Machine Learning"
            ],

            github: "https://github.com/"
        },


        // -------------------------------------------------
        // EDUCATIONAL ASSISTANT BOT
        // -------------------------------------------------

        {
            title: "Educational Assistant Bot",

            category: "ai",

            icon: "bi-robot",

            description:
                "AI-powered educational assistant developed using Microsoft Azure services to support student learning and information retrieval.",

            technologies: [
                "Microsoft Azure",
                "AI",
                "Python",
                "Chatbot"
            ],

            github: "https://github.com/"
        },


        // -------------------------------------------------
        // OMNISHIELD AI
        // -------------------------------------------------

        {
            title: "OmniShield AI",

            category: "security",

            icon: "bi-shield-lock-fill",

            description:
                "AI-focused cybersecurity solution for detecting voice-clone threats and malicious QR codes and phishing content.",

            technologies: [
                "AI",
                "Cybersecurity",
                "NLP",
                "Threat Detection"
            ],

            github: "https://github.com/"
        },


        // -------------------------------------------------
        // STUDENT REPORT CARD SYSTEM
        // -------------------------------------------------

        {
            title: "Student Report Card System",

            category: "web",

            icon: "bi-mortarboard-fill",

            description:
                "Web application featuring admin login, student login, marks entry, student records, and report viewing.",

            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Python",
                "Database"
            ],

            github: "https://github.com/"
        }

    ];


    /* =====================================================
       PROJECT FILTERING & RENDERING
    ===================================================== */

    const projectContainer =
        document.querySelector("#projectContainer");

    const noProjects =
        document.querySelector("#noProjects");

    const filterButtons =
        document.querySelectorAll(".filter-btn");


    const getCategoryName = category => {

        if (category === "ai") {
            return "AI / NLP";
        }

        if (category === "security") {
            return "Cybersecurity";
        }

        if (category === "web") {
            return "Web";
        }

        return "All";

    };


    const renderProjects = (filter = "all") => {

        if (!projectContainer) {
            return;
        }


        projectContainer.innerHTML = "";


        const filteredProjects = projects.filter(project =>
            filter === "all" ||
            project.category === filter
        );


        if (noProjects) {

            noProjects.classList.toggle(
                "d-none",
                filteredProjects.length !== 0
            );

        }


        filteredProjects.forEach(project => {

            const card =
                document.createElement("div");


            card.className =
                "col-md-6 col-lg-4";


            card.innerHTML = `

                <article class="project-card h-100">

                    <div class="project-top">

                        <i
                            class="bi ${project.icon}"
                            aria-hidden="true">
                        </i>

                        <span class="project-category">
                            ${getCategoryName(project.category)}
                        </span>

                    </div>


                    <div class="project-body">

                        <h3>
                            ${project.title}
                        </h3>


                        <p>
                            ${project.description}
                        </p>


                        <div class="tech-tags">

                            ${project.technologies
                                .map(
                                    tech =>
                                        `<span class="tech-tag">${tech}</span>`
                                )
                                .join("")}

                        </div>


                        <a
                            href="${project.github}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn btn-sm btn-primary-custom">

                            <i
                                class="bi bi-github me-1"
                                aria-hidden="true">
                            </i>

                            GitHub

                        </a>

                    </div>

                </article>

            `;


            projectContainer.appendChild(card);

        });

    };


    /* =====================================================
       PROJECT FILTER BUTTONS
    ===================================================== */

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            renderProjects(
                button.dataset.filter
            );

        });

    });


    // Initial project rendering
    renderProjects();


    /* =====================================================
       DARK / LIGHT THEME
    ===================================================== */

    const themeToggle =
        document.querySelector("#themeToggle");


    const themeIcon =
        themeToggle?.querySelector("i");


    const updateThemeButton = () => {

        if (!themeToggle || !themeIcon) {
            return;
        }


        const dark =
            document.body.classList.contains("dark-theme");


        themeIcon.className = dark
            ? "bi bi-sun-fill"
            : "bi bi-moon-stars-fill";


        themeToggle.setAttribute(
            "aria-label",
            dark
                ? "Switch to light theme"
                : "Switch to dark theme"
        );

    };


    // Load saved theme
    if (
        localStorage.getItem("portfolioTheme") === "dark"
    ) {

        document.body.classList.add("dark-theme");

    }


    updateThemeButton();


    // Theme toggle
    themeToggle?.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark-theme"
            );


            const isDark =
                document.body.classList.contains(
                    "dark-theme"
                );


            localStorage.setItem(
                "portfolioTheme",
                isDark ? "dark" : "light"
            );


            updateThemeButton();

        }
    );


    /* =====================================================
       TYPING EFFECT
    ===================================================== */

    const typingText =
        document.querySelector("#typingText");


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

        if (!typingText) {
            return;
        }


        const phrase =
            phrases[phraseIndex];


        if (!deleting) {

            typingText.textContent =
                phrase.substring(
                    0,
                    characterIndex + 1
                );


            characterIndex++;


            if (
                characterIndex ===
                phrase.length
            ) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1500
                );

                return;

            }

        } else {

            typingText.textContent =
                phrase.substring(
                    0,
                    characterIndex - 1
                );


            characterIndex--;


            if (characterIndex === 0) {

                deleting = false;

                phraseIndex =
                    (phraseIndex + 1) %
                    phrases.length;

            }

        }


        setTimeout(
            typeEffect,
            deleting ? 45 : 80
        );

    };


    typeEffect();


    /* =====================================================
       CONTACT FORM VALIDATION
    ===================================================== */

    const contactForm =
        document.querySelector("#contactForm");


    const formAlert =
        document.querySelector("#formAlert");


    contactForm?.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            if (!contactForm.checkValidity()) {

                event.stopPropagation();


                contactForm.classList.add(
                    "was-validated"
                );


                if (formAlert) {

                    formAlert.className =
                        "alert alert-danger";

                    formAlert.textContent =
                        "Please correct the highlighted fields and try again.";

                }


                return;

            }


            const formData =
                new FormData(contactForm);


            const name =
                formData.get("name");


            if (formAlert) {

                formAlert.className =
                    "alert alert-success";

                formAlert.textContent =
                    `Thank you, ${name}! Your message has been validated successfully.`;

            }


            contactForm.reset();


            contactForm.classList.remove(
                "was-validated"
            );

        }
    );


    /* =====================================================
       SCROLL TO TOP
    ===================================================== */

    const scrollTopBtn =
        document.querySelector("#scrollTopBtn");


    window.addEventListener(
        "scroll",
        () => {

            scrollTopBtn?.classList.toggle(
                "show",
                window.scrollY > 450
            );

        }
    );


    scrollTopBtn?.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.querySelector("#currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       MOBILE NAVBAR
       Close Bootstrap navbar after clicking a link
    ===================================================== */

    const navLinks =
        document.querySelectorAll(
            ".navbar-nav .nav-link"
        );


    const mainNav =
        document.querySelector("#mainNav");


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                if (
                    mainNav &&
                    mainNav.classList.contains("show")
                ) {

                    bootstrap.Collapse
                        .getOrCreateInstance(mainNav)
                        .hide();

                }

            }
        );

    });


    /* =====================================================
       ACTIVE NAVIGATION ON SCROLL
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        navLinks.forEach(
                            link =>
                                link.classList.remove(
                                    "active"
                                )
                        );


                        const activeLink =
                            document.querySelector(
                                `.nav-link[href="#${entry.target.id}"]`
                            );


                        if (activeLink) {

                            activeLink.classList.add(
                                "active"
                            );

                        }

                    }

                });

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(
        section =>
            observer.observe(section)
    );


});