// Open About Pop-up
document.getElementById("learn-more-btn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("about-popup").style.display = "flex";
});

// Close About Pop-up
document.getElementById("close-about-popup").addEventListener("click", function() {
    document.getElementById("about-popup").style.display = "none";
});

// Close Pop-up if clicking outside content
document.getElementById("about-popup").addEventListener("click", function(event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
