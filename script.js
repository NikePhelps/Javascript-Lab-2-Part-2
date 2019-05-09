"use strict";
document.querySelector(".add_button").addEventListener("click", createContact);
document.querySelector(".contact_container").addEventListener("click", deleteAt);
function createContact(event) {
    event.preventDefault();
    let inputs = document.querySelectorAll("input");
    let div = document.createElement("div");
    div.innerHTML = `
    <p>name: ${inputs[0].value}</p>
    <p>email: ${inputs[1].value}</p>
    <p>phone: ${inputs[2].value}</p>
    <p>relation: ${inputs[3].value}</p>
    <img class= "delete_card" src= "https://photos.gograph.com/thumbs/CSP/CSP992/smiling-trash-can-cartoon-character-clip-art-vector_k13753794.jpg">`;
    
    document.querySelector(".contact_container").append(div);
};

function deleteAt(event) {
    event.preventDefault();
    let remove = document.querySelector("section");
    remove.parentNode.removeChild(remove);
    display();
    console.log(event);
};

