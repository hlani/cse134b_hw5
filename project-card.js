class ProjectCard extends HTMLElement {
    constructor() {
        super();

        // Attach Shadow DOM
        this.attachShadow({ mode: "open" });

        // Create Card Structure
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2></h2>
            <picture>
                <img src="" alt="">
            </picture>
            <p></p>
            <a href="#" target="_blank">Learn More</a>
        `;

        // Apply Styles
        const style = document.createElement("style");
        style.textContent = `
            :host {
                display: block;
                --card-bg: white;
                --card-border: #ddd;
                --card-shadow: rgba(0, 0, 0, 0.1);
                --text-color: #333;
                --link-color: #007BFF;
            }

            .card {
                background: var(--card-bg);
                border: 1px solid var(--card-border);
                border-radius: 8px;
                box-shadow: 2px 2px 10px var(--card-shadow);
                padding: 16px;
                text-align: center;
                width: 250px;
                transition: transform 0.3s ease-in-out;
            }

            .card:hover {
                transform: scale(1.05);
            }

            img {
                max-width: 100%;
                height: auto;
                border-radius: 6px;
            }

            h2 {
                color: var(--text-color);
                font-size: 1.5em;
            }

            p {
                color: var(--text-color);
                font-size: 1em;
            }

            a {
                color: var(--link-color);
                text-decoration: none;
                font-weight: bold;
            }

            a:hover {
                text-decoration: underline;
            }
        `;

        // Append elements to Shadow DOM
        this.shadowRoot.append(style, card);
    }

    // Set card data dynamically
    set data(data) {
        this.shadowRoot.querySelector("h2").textContent = data.title;
        this.shadowRoot.querySelector("img").src = data.image;
        this.shadowRoot.querySelector("img").alt = data.title;
        this.shadowRoot.querySelector("p").textContent = data.description;
        this.shadowRoot.querySelector("a").href = data.link;
    }
}

// Define custom element
customElements.define("project-card", ProjectCard);
