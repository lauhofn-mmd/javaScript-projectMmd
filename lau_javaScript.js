const menuItems = [
    {id: "hjem", href:"#hjem", target:"_self", name:"Hjem"},
    {id: "butik", href:"#butik", target:"_self", name:"Butik"},
    {id: "omOs", href:"#omOs", target:"_self", name:"Om os"},
    {id: "kontakt", href:"#kontakt", target:"_self", name:"Kontakt"},
    {id: "blog", href:"#blog", target:"_self", name:"Blog"},
];

const menuContainer = document.getElementById("itemsMenu");

for (let i = 0; i < menuItems.length; i++) {
    menuContainer.innerHTML += 
  '<div>' +
    '<a href="' + menuItems[i].href + '" target="' + menuItems[i].target + '">' + menuItems[i].name + '</a>' +
  '</div>';
}

/* Hjælp og inspiration fra W3Schools */

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
document.getElementById("mySidepanel").style.width = "500px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
document.getElementById("mySidepanel").style.width = "0";
}