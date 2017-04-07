function clickHome() {
    document.getElementById('home').className = "active";
    document.getElementById('projects').className = "";
    document.getElementById('about').className = "";
    document.getElementById('contact').className = "";
}
function clickProjects() {
    document.getElementById('home').className = "";
    document.getElementById('projects').className = "active";
    document.getElementById('about').className = "";
    document.getElementById('contact').className = "";
}
function clickAbout() {
    document.getElementById('home').className = "";
    document.getElementById('projects').className = "";
    document.getElementById('about').className = "active";
    document.getElementById('contact').className = "";
}
function clickCon() {
    document.getElementById('home').className = "";
    document.getElementById('projects').className = "";
    document.getElementById('about').className = "";
    document.getElementById('contact').className = "active";
}