const template = document.createElement("template");
 template.innerHTML = 
 `
 <style>
    @import "../styles/sass/custom-styles.css";
    @import "../styles/bulma/bulma.css";
    .tile
    {
        background-color:#0F4C75;
    }
    img
    {
        width:250px;
    }
    .project-name
    {
        text-align:center;
    }
    div:hover
    {
        font-weight:bold;
    }
 </style>

    <div class="tile px-5 py-2 is-vertical">
        <h3 id="project-name" class="is-size-3"></h3>
        <a href="" id="link">
         <img id="project-thumbnail"/>
        </a>
        <p id="description"> A description of the game</p>
        <p id="role"> My role as a developer</p>
    </div>
 `;

 class ProjectDisplay extends HTMLElement
 {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.pThumbnail = this.shadowRoot.querySelector("#project-thumbnail");
        this.pLink = this.shadowRoot.querySelector("#link");
        this.pName = this.shadowRoot.querySelector("#project-name");
        this.pDesc = this.shadowRoot.querySelector("#description");
        this.pRole = this.shadowRoot.querySelector("#role");
    }
  
    attributeChangedCallback(attributeName, oldVal, newVal){
        this.render();
    }

    static get observedAttributes(){
        return ["project-name", "project-image", "project-link","project-description", "role"];
    }

    render(){
        const projectName = this.getAttribute('project-name') ? this.getAttribute('project-name') : "Untitled Game";
        const projectImgSrc = this.getAttribute('project-image') ? this.getAttribute('project-image') : "";
        const projectLink = this.getAttribute('project-link') ? this.getAttribute('project-link') : "";
        const projectDesc = this.getAttribute('project-description') ? this.getAttribute('project-description') : "";
        const role = this.getAttribute('role') ? "<b>Role</b>: " + this.getAttribute('role') : "<b>Role</b>: Sole Developer";

        this.pThumbnail.src = projectImgSrc;
        this.pName.innerHTML = `${projectName}`;
        this.pThumbnail.alt = `${projectName} thumbnail`;
        this.pLink.href = projectLink;
        this.pDesc.innerText = `${projectDesc}`;
        this.pRole.innerHTML = `${role}`;
    }
 }
 customElements.define('project-display-mini', ProjectDisplay);