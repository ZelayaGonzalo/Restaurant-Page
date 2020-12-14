/*function createHomePage(){
    const content=document.getElementById("content");
    const homePage=document.createElement("div");
    const title=document.createElement("div");
    const text=document.createElement("div");
    homePage.id="mainPage";
    title.id="titleMainPage";
    title.innerHTML="Home Page";
    text.id="textMainPage";
    text.innerHTML="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsam non sit recusandae aliquam, cum est distinctio ea libero debitis? Repellat mollitia ad ab modi quos fugit minus enim perferendis!"
    content.appendChild(homePage);
    homePage.appendChild(title);
    homePage.appendChild(text);
}*/
export function createHomePage(){
    const content=document.getElementById("content");
    const homePage=document.createElement("div");
    const title=document.createElement("div");
    const text=document.createElement("div");
    homePage.id="mainPage";
    title.id="titleMainPage";
    title.innerHTML="Home Page";
    text.id="textMainPage";
    text.innerHTML="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsam non sit recusandae aliquam, cum est distinctio ea libero debitis? Repellat mollitia ad ab modi quos fugit minus enim perferendis!"
    content.appendChild(homePage);
    homePage.appendChild(title);
    homePage.appendChild(text);
};