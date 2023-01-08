import profileDev from "./content.js";

function addContentInClass(selectorCls, contentHtml) {
    document.querySelectorAll(selectorCls).forEach(
        (el) => {el.innerHTML = contentHtml}
    );
};

function addImageInClass(selectorCls, srcImg, altImg) {
    document.querySelectorAll(selectorCls).forEach(
        (el) => {el.innerHTML = `<img src="${srcImg}" alt="${altImg}"/>`}
    );
};

addContentInClass(".add-content-dev-fullname", profileDev.fullName);
addContentInClass(".add-content-dev-def1", profileDev.defStatus.def1);
addContentInClass(".add-content-dev-def2", profileDev.defStatus.def2);
addContentInClass(".add-content-subtitle-about", profileDev.texts.pres1);
addContentInClass(".add-content-parag-about", profileDev.texts.paragraph1);

addImageInClass(".add-content-bg-poster", profileDev.personalImg.img.poster, "poster");
addImageInClass(".add-content-logo-low-normal", profileDev.personalImg.logo.logoLow, "logo");
addImageInClass(".add-content-logo-low-black", profileDev.personalImg.logo.logoLowBlack, "logo");
addImageInClass(".add-content-logo-low-pink", profileDev.personalImg.logo.logoLowPink, "logo");

profileDev.resouces.map((obj) => {
    var content = document.querySelector(".add-content-list-sections");
    content.innerHTML = content.innerHTML + 
    `<li>
        <a href="${obj.anc}">
            <img class="icon-simple" src="${obj.icon}" alt="icon"/>
            <span>${obj.name}</span>
        </a>
    </li>`
});

profileDev.areas.map((obj) => {
    var content = document.querySelector(".add-content-block-area");
    content.innerHTML = content.innerHTML +
    `<div class="block-content-area">
        <img class="icon-simple icon-block-area" src="${obj.icon}" alt="icon"/>
        <span class="text-block-area">${obj.text}</span>
    </div>`
})

profileDev.mainProjects.map((obj) => {
    var content = document.querySelector(".add-content-main-projects");
    content.innerHTML = content.innerHTML +
    `<div class="block-project-main" id="${obj.id}">
        <div class="layers-block-project-main header-main-project">
            <span class="name-main-project">${obj.name}</span>
            <span class="icon-main-project">
                <img src="${obj.icon}" alt="icon">
            </span>
            <span class="text-main-project">${obj.text1}</span>
        </div>
        <div class="layers-block-project-main body-main-project" style="background-color:${obj.bgColor};">
            <div class="top-body-main-project">
                <div class="make-main-project">
                    <span class="icon-make-main-project"><img src="${obj.iconMake1}" alt="icon"/></span>
                    <span class="icon-make-main-project"><img src="${obj.iconMake2}" alt="icon"/></span>
                    <span class="icon-make-main-project"><img src="${obj.iconMake3}" alt="icon"/></span>
                </div>
                <span class="text-main-project">${obj.text1}</span>
            </div>
            <div class="bottom-body-main-project">
                <span class="text-main-project">${obj.text2}</span>
                <div class="link-main-project">
                    <a href="${obj.link}" target="_blank">run application</a>
                    <a href="${obj.base}" target="_blank">open project</a>
                </div>
            </div>
        </div>
    </div>`
})

profileDev.otherProjects.map((obj) => {
    var content = document.querySelector(".add-content-other-projects");
    content.innerHTML = content.innerHTML +
    `<div class="block-project-other">
        <span class="name-other-project">${obj.name}</span>
        <div class="${obj.display}">
            <span class="text-other-project">${obj.text}</span>
            <div class="link-other-project">
                <a href="${obj.link}" target="_blank">run application</a>
                <a href="${obj.base}" target="_blank">open project</a>
            </div>
        </div>
    </div>`
})

profileDev.atributes.skills.map((obj) => {
    var content = document.querySelector('.add-content-skills-atributes');
    content.innerHTML = content.innerHTML +
    `<div class="block-atribute">
        <span class="icon-atributes">
            <img src="${obj.icon}" alt="icon">
        </span>
        <span class="name-atributes">${obj.name} - ${obj.level}</span>
        <span class="text-atributes">${obj.text}</span>
    </div>`
})

profileDev.atributes.lenguage.map((obj) => {
    var content = document.querySelector('.add-content-lenguage-atributes');
    content.innerHTML = content.innerHTML +
    `<div class="block-atribute">
        <span class="icon-atributes">
            <img src="${obj.icon}" alt="icon">
        </span>
        <span class="name-atributes">${obj.name} - ${obj.level}</span>
        <span class="text-atributes">${obj.text}</span>
    </div>`
})

profileDev.atributes.tool.map((obj) => {
    var content = document.querySelector('.add-content-tool-atributes');
    content.innerHTML = content.innerHTML +
    `<div class="block-atribute">
        <span class="icon-atributes">
            <img src="${obj.icon}" alt="icon">
        </span>
        <span class="name-atributes">${obj.name} - ${obj.level}</span>
        <span class="text-atributes">${obj.text}</span>
    </div>`
})

profileDev.networks.map((obj) => {
    var content = document.querySelector(".add-content-blocks-social");
    content.innerHTML = content.innerHTML +
    `<div class="network-blocks-item">
        <span class="icon-network-block-item">
            <img src="${obj.icon}" alt="icon"/>
        </span>
        <a class="name-network-block-item" href="${obj.link}" target="_blank">
            ${obj.name}
        </a>
    </div>`
});