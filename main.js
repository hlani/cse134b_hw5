document.addEventListener("DOMContentLoaded", () => {
    const projectContainer = document.getElementById("project-container");
    const loadLocalBtn = document.getElementById("loadLocal");
    const loadRemoteBtn = document.getElementById("loadRemote");

    // Sample projects
    const sampleProjects = [
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

    // Store sample projects in localStorage if not already stored
    if (!localStorage.getItem("projects")) {
        localStorage.setItem("projects", JSON.stringify(sampleProjects));
    }

    // Function to clear existing projects
    function clearProjects() {
        projectContainer.innerHTML = "";
    }

    // Function to load projects dynamically
    function loadProjects(data) {
        clearProjects();
        data.forEach(project => {
            const card = document.createElement("project-card");
            card.data = project;  
            projectContainer.appendChild(card);
        });
    }

    // Load from localStorage
    loadLocalBtn.addEventListener("click", () => {
        const localData = JSON.parse(localStorage.getItem("projects")) || [];
        console.log("Local Data Retrieved:", localData); //  Check if local data is loading
        loadProjects(localData);
    });

    document.getElementById("loadRemote").addEventListener("click", async () => {
        try {
            const response = await fetch("https://tangerine-croissant-82cf5c.netlify.app/projects.json"); 
            const json = await response.json();
            console.log("Loading from Remote JSON:", json);
            loadProjects(json);
        } catch (error) {
            console.error("Error fetching remote data:", error);
        }
    });
});