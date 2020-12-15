export function eraseContent(){
const container=document.getElementById("content");
while(container.firstChild){
    container.removeChild(container.lastChild);
    }
}