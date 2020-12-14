export function createMenu(){
    const container=document.getElementById("content");
    let menuElements=4;
    const menuContainer=document.createElement("div");
    menuContainer.id="menu";
    const menuTitle=document.createElement("div");
    menuTitle.id="menuTitle"
    menuTitle.innerHTML="Menu";
    
    container.appendChild(menuContainer);
    menuContainer.appendChild(menuTitle);
    for(let i=0;i<menuElements;i++){
        const card=document.createElement("div");
        const cardDescription=document.createElement("div");
        cardDescription.classList.add("cardDescription");
        cardDescription.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        card.classList.add("card");
        const cardImage=document.createElement("img");
        cardImage.src="images/plate"+i+".png";
        console.log(cardImage);
        card.appendChild(cardImage);
        card.appendChild(cardDescription);
        menuContainer.appendChild(card);
    }
}
