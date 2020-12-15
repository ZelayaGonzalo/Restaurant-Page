import{createHomePage} from "./pages/mainPage.js";
import{createMenu} from"./pages/menu.js";
import{createContact} from "./pages/contact.js";
import{eraseContent} from "./pages/eraseContent.js"
createContact();
const tabsContainer=document.getElementById("tabs");

function addEventListeners(){
    const tabs=tabsContainer.querySelectorAll(".tab");
    tabs.forEach(tab=>{
        console.log(tab.id);
        switch(tab.id){ 
            case "homenav":
                tab.addEventListener("click",()=>{
                    eraseContent();
                    createHomePage();
                })
               
                break;
            case "contactnav":
                tab.addEventListener("click",()=>{
                    eraseContent();
                    createContact();
                })
                break;
            case "menunav":
                tab.addEventListener("click",()=>{
                    eraseContent();
                    createMenu();
                })
                break;
        }
    });
}
addEventListeners();


