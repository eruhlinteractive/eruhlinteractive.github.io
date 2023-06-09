import "./components/project-display-mini.js"
import "./components/nav-component.js"

// https://github.com/micromark/micromark
//import {micromark} from 'https://esm.sh/micromark@3'
//import {gfm, gfmHtml} from 'https://esm.sh/micromark-extension-gfm@2'




function init()
{
    //document.querySelector("#close-project").onclick = closeProjectDisplay;

    // TODO: Async load JSON library of project-document lookups
    //loadText("ah")

    // TODO: Check URL for parameters and open project if needed
    // https://www.sitepoint.com/get-url-parameters-with-javascript/


    // TODO: If page was loaded with arguments, call openProjectDisplay when 
    //          the index has been loaded with init
    //closeProjectDisplay()


    //loadText("help");
}


function openProjectDisplay(projectName)
{
    // TODO: Check loaded project 
    document.querySelector("#project-large-root").classList.add('is-active');
}

function closeProjectDisplay()
{
    document.querySelector("#project-large-root").classList.remove('is-active');
}


function parseMarkDown(textFile)
{
    //return micromark(textFile, {
    //    extenstions:[gfm()],
    //    htmlExtensions: [gfmHtml()]}
    //    );
}

function unescapeHTML(escapedHTML) {
    return escapedHTML.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
  }

async function loadText(projectName)
{
    let bodyText  = await fetch("/texts/test-text.txt");
    let myText = await bodyText.text();
    
    let parsed = unescapeHTML(parseMarkDown(myText));
    
    var temp = document.createElement('div');
    temp.innerHTML = parsed;
    //console.log(parsed)

    

    document.querySelector("#project-body").appendChild(temp);
}

// Initialize everything when the page finishes loading
window.onload = init;