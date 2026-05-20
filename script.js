// ===== NEXT LEVEL JS =====
document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // ☰ HAMBURGER MENU (SMOOTH SLIDE)
    // =========================
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            // animate icon
            menuBtn.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
        });
    }


    // =========================
    // 🌙 DARK MODE (SAVED)
    // =========================
    const themeBtn = document.getElementById("theme-toggle");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (themeBtn) themeBtn.textContent = "☀️";
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeBtn.textContent = "☀️";
                localStorage.setItem("theme", "dark");
            } else {
                themeBtn.textContent = "🌙";
                localStorage.setItem("theme", "light");
            }
        });
    }


    // =========================
    // ✨ SCROLL ANIMATION (PRO LEVEL)
    // =========================
    const elements = document.querySelectorAll(".content, .card");

    const reveal = () => {
        elements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 80) {
                el.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", reveal);
    reveal();


    // =========================
    // 🔥 DYNAMIC HERO TEXT
    // =========================
    const hero = document.querySelector(".hero");

    if (hero) {
        const text = document.createElement("p");
        text.style.marginTop = "15px";
        text.style.fontWeight = "bold";

        const btn = document.createElement("button");
        btn.textContent = "Discover Impact";

        hero.appendChild(btn);
        hero.appendChild(text);

        const messages = [
            "Biomedical Engineering saves lives 💙",
            "You can build hospital technology 🔬",
            "Innovate healthcare in Zimbabwe 🇿🇼",
            "Design the future of medicine 🚀"
        ];

        let index = 0;

        btn.addEventListener("click", () => {
            text.textContent = messages[index];
            index = (index + 1) % messages.length;
        });
    }


    // =========================
    // 📊 COUNTER ANIMATION (FIX YOUR 0 ISSUE)
    // =========================
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        let count = 0;
        const target = +counter.getAttribute("data-target");

        const update = () => {
            const increment = target / 100;

            if (count < target) {
                count += increment;
                counter.textContent = Math.floor(count);
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        };

        update();
    });


    // =========================
    // 💬 MODAL (SMOOTH)
    // =========================
    const modal = document.getElementById("course-modal");
    const openBtn = document.querySelector(".course-btn");
    const closeBtn = document.querySelector(".close");

    if (openBtn && modal && closeBtn) {

        openBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) modal.style.display = "none";
        });
    }

});