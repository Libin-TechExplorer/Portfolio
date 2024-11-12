document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll(".skill-progress");

    function animateSkills() {
        skillBars.forEach(bar => {
            const value = bar.style.width;
            bar.style.width = "0";
            setTimeout(() => {
                bar.style.width = value;
            }, 300);
        });
    }

    window.addEventListener("scroll", () => {
        const skillsSection = document.querySelector(".skills-section");
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            animateSkills();
        }
    });
});

