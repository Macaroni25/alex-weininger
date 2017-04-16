function clickHome() {
    document.getElementById('home').className = "active";
    document.getElementById('projects').className = "";
    document.getElementById('about').className = "";
    document.getElementById('contact').className = "";
    window.location.href = "#";
}
function clickProjects() {
    document.getElementById('home').className = "";
    document.getElementById('projects').className = "active";
    document.getElementById('about').className = "";
    document.getElementById('contact').className = "";
    window.location.href = "#projects";
}
function clickAbout() {
    document.getElementById('home').className = "";
    document.getElementById('projects').className = "";
    document.getElementById('about').className = "active";
    document.getElementById('contact').className = "";
    window.location.href = "#about";
}
function clickCon() {
    document.getElementById('home').className = "";
    document.getElementById('projects').className = "";
    document.getElementById('about').className = "";
    document.getElementById('contact').className = "active";
    window.location.href = "#contact";
}

// game object

function person(title, description, link, thumbnail){
    this.title = title;
    this.description = description;
    this.link = link;
    this.thumbnail = thumbnail;
}