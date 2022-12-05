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

addContentInClass(".content_dev_fullname", profileDev.fullName);
addContentInClass(".content_dev_email", profileDev.addressEmail);
addContentInClass(".content_developer_def1", profileDev.defStatus.def1);
addContentInClass(".content_developer_def2", profileDev.defStatus.def2);
addContentInClass(".content_subtitle_about", profileDev.texts.press1);
addContentInClass(".content_parag_about", profileDev.texts.paragraph1);

addImageInClass(".content_bg_poster", profileDev.personalImg.img.poster, "poster");
addImageInClass(".content_pf_poster", profileDev.personalImg.img.profile, "perfil");
addImageInClass(".content_logo_low", profileDev.personalImg.logo.logoLow, "logo");
addImageInClass(".content_logo_low_black", profileDev.personalImg.logo.logoLowBlack, "logo");
addImageInClass(".content_logo_low_pink", profileDev.personalImg.logo.logoLowPink, "logo");

profileDev.resouces.map((obj) => {
    var content = document.querySelector(".content_list_sections");
    content.innerHTML = content.innerHTML + 
    `<li>
        <a href="${obj.anc}">
            <img class="icon-simple" src="${obj.icon}" alt="icone"/>
            <span>${obj.name}</span>
        </a>
    </li>`
});

profileDev.iconsPersonal.map((obj) => {
    var content = document.querySelector(".content_frame_home");
    content.innerHTML = content.innerHTML + 
    `<span class="icon-simple icon-frames-home">
        <img src="${obj.icon}" alt="icone"/>
    </span>`
})

profileDev.areas.map((obj) => {
    var content = document.querySelector(".content_blocks_area");
    content.innerHTML = content.innerHTML +
    `<div class="block-content-area">
        <img class="icon-simple" src="${obj.icon}" alt="icone"/>
        <span>${obj.text}</span>
    </div>`
})

profileDev.mainProjects.map((obj) => {
    var content = document.querySelector(".content_main_projects");
    content.innerHTML = content.innerHTML +
    `<div class="block-project-main" id="${obj.id}">
        <span class="icon-main-project">
            <img src="${obj.icon}" alt="icone">
        </span>
        <span class="name-main-project">${obj.name}</span>
        <span class="text-main-project">${obj.text}</span>
        <span class="type-main-project">${obj.make}</span>
        <div class="link-main-project">
            <a href="${obj.link}" target="_blank" class="init-main-project">ver projeto</a>
            <a href="${obj.base}" target="_blank" class="base-main-project">abrir projeto</a>
        </div>
    </div>`
})

profileDev.outherProjects.map((obj) => {
    var content = document.querySelector(".content_outher_projects");
    content.innerHTML = content.innerHTML +
    `<div class="block-project-outher">
        <span class="name-outher-project">${obj.name}</span>
        <span class="text-outher-project">${obj.text}</span>
        <div class="link-outher-project">
            <a href="${obj.link}" target="_blank" class="init-outher-project">ver projeto</a>
            <a href="${obj.base}" target="_blank" class="base-outher-project">abrir projeto</a>
        </div>
    </div>`
})

profileDev.atributes.skills.map((obj) => {
    var content = document.querySelector('.content-skills-atributes');
    content.innerHTML = content.innerHTML +
    `<div class="block-atribute">
        <span class="icon-atributes">
            <img src="${obj.icon}" alt="icone">
        </span>
        <span class="name-atributes">${obj.name} - ${obj.level}</span>
        <span class="text-atributes">${obj.text}</span>
    </div>`
})

profileDev.atributes.lenguage.map((obj) => {
    var content = document.querySelector('.content-lenguage-atributes');
    content.innerHTML = content.innerHTML +
    `<div class="block-atribute">
        <span class="icon-atributes">
            <img src="${obj.icon}" alt="icone">
        </span>
        <span class="name-atributes">${obj.name} - ${obj.level}</span>
        <span class="text-atributes">${obj.text}</span>
    </div>`
})

profileDev.atributes.tool.map((obj) => {
    var content = document.querySelector('.content-tool-atributes');
    content.innerHTML = content.innerHTML +
    `<div class="block-atribute">
        <span class="icon-atributes">
            <img src="${obj.icon}" alt="icone">
        </span>
        <span class="name-atributes">${obj.name} - ${obj.level}</span>
        <span class="text-atributes">${obj.text}</span>
    </div>`
})

profileDev.networks.social.map((obj) => {
    var content = document.querySelector(".content_blocks_social");
    content.innerHTML = content.innerHTML +
    `<div class="network-blocks-item">
        <span class="block-content-icon">
            <img src="${obj.icon}" alt="icone"/>
        </span>
        <a href="${obj.link}" target="_blank" class="block-content-name">${obj.name}</a>
    </div>`
});


profileDev.networks.contact.map((obj) => {
    var content = document.querySelector(".content_blocks_contact");
    content.innerHTML = content.innerHTML +
    `<div class="network-blocks-item">
        <span class="block-content-icon">
            <img src="${obj.icon}" alt="icone"/>
        </span>
        <a href="${obj.link}" target="_blank" class="block-content-name">${obj.name}</a>
    </div>`
});

//animações____________________________________________________________________
document.querySelectorAll(".icon-frames-home").forEach(
    (el) => {
        el.style.transform = `translateY(-${Math.random() * 100}px)`
    }
);