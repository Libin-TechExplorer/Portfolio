
    // Animation for dynamic text in the hero section (if applicable)
    const heroText = document.querySelector(".hero h2");
    if (heroText) {
        const titles = ["-Productivity Enthusiast", "-Daily Journaler","-MBA Student"];
        let titleIndex = 0;

        function updateTitle() {
            heroText.textContent = titles[titleIndex];
            titleIndex = (titleIndex + 1) % titles.length;
        }

        setInterval(updateTitle, 3000); // Change every 3 seconds
        updateTitle();
    }
