// ===============================
// ELEMENTS
// ===============================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

const cloudModal = document.getElementById("cloudModal");
const closeModal = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

const deploymentStatus = document.getElementById("deploymentStatus");


// ===============================
// MOBILE NAVIGATION
// ===============================

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// ===============================
// CLOUD INFORMATION
// ===============================

const cloudInformation = {

    AWS: {
        title: "Amazon Web Services - AWS S3",

        description:
            "Amazon S3 is an object storage service. " +
            "In this project, S3 is used to store HTML, CSS, " +
            "and JavaScript files and deliver them through a " +
            "static website endpoint."
    },

    Azure: {
        title: "Microsoft Azure - Storage Static Website",

        description:
            "Azure Storage supports static website hosting. " +
            "The project files are uploaded to the $web container " +
            "and served through the Azure primary web endpoint."
    }

};


function showCloudInfo(platform) {

    const information = cloudInformation[platform];

    if (!information) {
        return;
    }

    modalTitle.textContent = information.title;

    modalDescription.textContent =
        information.description;

    cloudModal.classList.add("show");

}


closeModal.addEventListener("click", () => {

    cloudModal.classList.remove("show");

});


cloudModal.addEventListener("click", (event) => {

    if (event.target === cloudModal) {

        cloudModal.classList.remove("show");

    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        cloudModal.classList.remove("show");

    }

});


// ===============================
// CONTACT FORM
// ===============================

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        formMessage.style.color = "#ef4444";

        formMessage.textContent =
            "Please complete all fields.";

        return;

    }


    formMessage.style.color = "#22c55e";

    formMessage.textContent =
        `Thank you ${name}! Your demo message was received.`;


    contactForm.reset();


    setTimeout(() => {

        formMessage.textContent = "";

    }, 5000);

});


// ===============================
// DEPLOYMENT DETECTION
// ===============================

function detectDeploymentPlatform() {

    const hostname =
        window.location.hostname.toLowerCase();


    if (
        hostname.includes("amazonaws.com") ||
        hostname.includes("s3-website")
    ) {

        deploymentStatus.textContent =
            "Website currently deployed on AWS S3 ☁";

        return;

    }


    if (
        hostname.includes("web.core.windows.net")
    ) {

        deploymentStatus.textContent =
            "Website currently deployed on Microsoft Azure ☁";

        return;

    }


    if (
        hostname === "localhost" ||
        hostname === "127.0.0.1" ||
        hostname === ""
    ) {

        deploymentStatus.textContent =
            "Running in local development environment 💻";

        return;

    }


    deploymentStatus.textContent =
        "Multi-cloud website is online ☁";

}


detectDeploymentPlatform();


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("currentYear").textContent =
    new Date().getFullYear();