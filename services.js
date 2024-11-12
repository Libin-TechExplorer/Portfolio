// Function to open the modal and set content
function openModal(service) {
    const modal = document.getElementById("serviceModal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");
    const status = document.getElementById("modal-status");
    const whatsappLink = document.getElementById("whatsapp-link");

    // Set content based on the selected service
    if (service === 'productivity') {
        title.textContent = "Productivity Tips";
        description.textContent = "Get free productivity tips and strategies to help you achieve more in less time.";
        status.textContent = "Free";
        whatsappLink.href = "https://wa.me/6369662654";
    } else if (service === 'notion') {
        title.textContent = "Notion Help";
        description.textContent = "Need help organizing your thoughts and ideas in Notion? I can clarify your doubts and help you streamline your workflow.";
        status.textContent = "Paid";
        whatsappLink.href = "https://wa.me/6369662654";
    
    } else if (service === 'jesus') {
        title.textContent = "Sharing About Jesus";
        description.innerHTML = `
        <p>No matter what you're facing - mental health struggles, loneliness, family difficulties, addiction, suicidal thoughts, illness, or feeling utterly hopeless - Jesus can transform your life.</p>
        <blockquote>
            "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light"
        </blockquote>
        <cite>- Matthew 11:28-30</cite>
    `;
            status.textContent = "Free";
        whatsappLink.href = "https://wa.me/6369662654";
    }

    // Show the modal
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("serviceModal");
    modal.style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById("serviceModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
