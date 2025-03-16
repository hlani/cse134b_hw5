document.addEventListener("DOMContentLoaded", () => {
    const projectContainer = document.getElementById("project-container");

    // Sample projects
    const projects = [
        {
            title: "Flappy-Bird",
            image: "images/fb.png",
            description: "Recreated the flappy bird game with only JS",
            link: "https://github.com/lhailani/flappy-bird"
        },
        
        {
            title: "Project Two",
            image: "https://via.placeholder.com/150",
            description: "placeholder for another project.",
            link: "https://example.com"
        }
    ];

    // Create and append project cards
    projects.forEach(project => {
        const card = document.createElement("project-card");
        card.data = project;
        projectContainer.appendChild(card);
    });
});
