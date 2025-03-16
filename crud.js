document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("projectForm");
    const projectList = document.getElementById("projectList");
    let projects = JSON.parse(localStorage.getItem("projects")) || [];

    function displayProjects() {
        projectList.innerHTML = "";

        projects.forEach((project, index) => {
            const li = document.createElement("li");
            li.classList.add("project-item");

            li.innerHTML = `
                <strong>${project.title}</strong>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a><br>
            `;

            // Create Edit Button
            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.classList.add("edit");
            editButton.onclick = () => editProject(index);

            // Create Delete Button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete");
            deleteButton.onclick = () => deleteProject(index);

            // Append buttons to project list item
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            projectList.appendChild(li);
        });

        localStorage.setItem("projects", JSON.stringify(projects));
    }

    function editProject(index) {
        const project = projects[index];
        document.getElementById("editIndex").value = index;
        document.getElementById("title").value = project.title;
        document.getElementById("image").value = project.image;
        document.getElementById("description").value = project.description;
        document.getElementById("link").value = project.link;
    }

    function deleteProject(index) {
        if (confirm("Are you sure you want to delete this project?")) {
            projects.splice(index, 1);
            displayProjects();
        }
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const image = document.getElementById("image").value;
        const description = document.getElementById("description").value;
        const link = document.getElementById("link").value;
        const editIndex = document.getElementById("editIndex").value;

        if (editIndex === "") {
            projects.push({ title, image, description, link });
        } else {
            projects[editIndex] = { title, image, description, link };
            document.getElementById("editIndex").value = "";
        }

        form.reset();
        displayProjects();
    });

    displayProjects();
});
