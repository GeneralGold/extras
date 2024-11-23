import { links } from "./links.js";

const linkContainer = document.getElementById("links");

function addLink(name, link, image, image2) {
    return `
  <a href="${link}" class="link" target="blank">
    <img src="${image}"/>
    <span>${name}  </span>
    <img class="linkIcon" src="${image2}" alt=""/>
  </a>
  `;
}

let allLinks = "";

links.forEach((ele) => {
    let link = ele.link;
    let name = ele.name;
    let image = ele.image;
    let image2 = ele.image2;

    allLinks += addLink(name, link, image, image2);
});

linkContainer.innerHTML = allLinks;
