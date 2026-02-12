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
  '<div id="' + menuItems[i].id + '">' +
    '<a href="' + menuItems[i].href + '" target="' + menuItems[i].target + '">' + menuItems[i].name + '</a>' +
  '</div>';
}