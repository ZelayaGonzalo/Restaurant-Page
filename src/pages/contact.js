export function createContact(){
    let mediaIconsNumber=4;
    const container=document.getElementById("content");
    const contact=document.createElement("div");
    contact.id="contact";
    const contactTitle=document.createElement("div");
    contactTitle.id="contactTitle";
    contactTitle.innerHTML="Contact Us";
    const titleText=document.createElement("div");
    titleText.id="contactText";
    titleText.innerHTML="Reach us through any social media or send us an email at:"
    const mail=document.createElement("a");
    mail.href="example@gmail.com";
    mail.innerHTML="example@gmail.com";
    const mediaIcons=document.createElement("div");
    mediaIcons.id="mediaIcons";
    container.appendChild(contact);
    contact.appendChild(contactTitle);
    contact.appendChild(titleText);
    contact.appendChild(mail);
    contact.appendChild(mediaIcons);
   
    for(let i=0;i<mediaIconsNumber;i++){
        const icon=document.createElement("a");
        icon.classList.add("icon");  
        const image=document.createElement("img");
        image.classList.add("iconImage");
        switch(i){
            case 0:               
                icon.href="https://facebook.com";              
                image.src="images/facebook.png";
                image.alt="facebook";   
                icon.appendChild(image);
                mediaIcons.appendChild(icon);
                break;
            case 1: 
                icon.href="https://twitter.com"                        
                image.src="images/twitter.png";
                image.alt="twitter";
                icon.appendChild(image);
                mediaIcons.appendChild(icon);
                break;
            case 2:
               
                icon.href="https://instagram.com";
                image.src="images/instagram.png";
                image.alt="instagram";
                
                icon.appendChild(image);
                mediaIcons.appendChild(icon);
                break;
            case 3:
                
                icon.href="https://whatsapp.com";
                
                
                image.src="images/whatsapp.png";
                image.alt="whatsapp";
                
                icon.appendChild(image);
                mediaIcons.appendChild(icon);
                break;
        }
    }
}