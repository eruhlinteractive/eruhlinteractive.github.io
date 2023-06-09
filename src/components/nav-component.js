const template = document.createElement("template");
 template.innerHTML = 
 `
<style>
@import "/styles/bulma/bulma.css";
@import "/styles/sass/custom-styles.css";img{height:4.25rem}#burger{display:inline-block;margin-top:auto;margin-bottom:auto}#brand{align-items:center !important}#kofi{margin:auto;padding-left:40px;padding-right:15px}
</style>

<nav id="navbar" class="navbar is-fixed-top has-text-centered">
    <div class="navbar-brand" id="brand">
        <img class="is-hidden-tablet px-2" src="res/logo.png"></img>
        <a class="is-hidden-mobile">
         <img src="res/logo.png" class="pl-4 py-1 mt-1"></img>
        </a>


        <a class="navbar-item is-hidden-mobile">
            <span class="is-size-2">ERuhl Interactive</span>
        </a>
            <a class="navbar-burger is-hidden-desktop" id="burger">
                <span></span>
                <span></span>
                <span></span>
            </a>
        </a>
    </div>

    <div class="navbar-menu" id="navbar-menu">
        <div class="navbar-end">
        <a href='https://ko-fi.com/S6S8BWM9W' id='kofi' target='_blank'>
        <img height='36' style='border:0px; height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com'/>
        </a>
            <a class="navbar-item" href="home.html">Home</a>
            <a class="navbar-item" href="projects.html">Projects</a>
            <a class="navbar-item" href="code-snippets.html">Code Examples</a>
            <!--<a class="navbar-item" href="blog.html">Blog</a> -->
            <a class="navbar-item" href="contact-me.html">Contact Me</a>
            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">Other</a>
                <div class="navbar-dropdown">
                    <a class="navbar-item" href="https://twitter.com/ERInteractive">Twitter</a>
                    <a class="navbar-item" href="https://eruhl-interactive.itch.io/">Itch.io</a>
                </div>
            </div>
        </div>
    </div>
</nav>
 `;

 class Navigation extends HTMLElement
 {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        // Add class to html to add padding to the top of the page
        document.documentElement.querySelector("body").classList.add("has-navbar-fixed-top");
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.navMenu = this.shadowRoot.querySelector("#navbar-menu");
        this.burger = this.shadowRoot.querySelector("#burger");
    }


    connectedCallback(){
        // is-underlined has-text-weight-semibold
        this.burger.onclick = () => this.toggleBurger();
    }

    toggleBurger()
    {
        console.log("Toggled");
        this.navMenu.classList.toggle('is-active');
    }
};

customElements.define('web-nav', Navigation);