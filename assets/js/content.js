var profileDev = {
    fullName: "Mikaias Silva",
    addressEmail: "mikay4s_661@protonmail.com",
    defStatus: {
        def1: "desenvolvedor",
        def2: "freelancer"
    },
    texts: {
        press1: "Olá! Pode me chamar de Mikaías",
        paragraph1: "Sou desenvolvedor front-end, comecei a pouco tempo e estudando por conta propria. Também desenvolvo protótipos e design gráfico com figma.",
    },
    areas: [
        {
            icon: "../assets/svg/about/icon_frontend.svg",
            text: "desenvolvimento web front-end com html, css e js"
        },
        {
            icon: "../assets/svg/about/icon_prototype.svg",
            text: "prototipagem de aplicativos e páginas web com figma"
        },
        {
            icon: "../assets/svg/about/icon_design.svg",
            text: "habilidades no design gráfico com interfaces responsivas"
        }
    ],
    personalImg: {
        img: {
            poster: "../assets/img/poster_banner.png", 
            profile: "../assets/img/poster_icon.png"
        },
        logo: {
            logoLow: "../assets/svg/geral/logo_low.svg",
            logoLowBlack: "../assets/svg/geral/logo_low_black.svg",
            logoLowPink: "../assets/svg/geral/logo_low_pink.svg",
        }
    },
    iconsPersonal: [
            {icon: "../assets/svg/personal/icon_code.svg"},
            {icon: "../assets/svg/personal/icon_ball.svg"},
            {icon: "../assets/svg/personal/icon_music.svg"},
            {icon: "../assets/svg/personal/icon_pen.svg"},
            {icon: "../assets/svg/personal/icon_book.svg"},
            {icon: "../assets/svg/personal/icon_game.svg"}
    ],
    networks: {
        social: [
            {
                name: "linkedin/mikaias",
                link: "https://www.linkedin.com/in/mikay4s",
                icon: "../assets/svg/networks/linkedin.svg"
            },            
            {
                name: "github/mikaias",
                link: "https://github.com/mikayas",
                icon: "../assets/svg/networks/gtihub.svg"
            },
            {
                name: "instagram/mikaias",
                link: "https://instagram.com/mikay4s_eu",
                icon: "../assets/svg/networks/instagram.svg"
            },
        ],
        contact: [
            {
                name: "protonmail@mikaias",
                link: "mailto:mikay4s_661@protonmail.com",
                icon: "../assets/svg/networks/protonmail.svg"
            }
        ],
    },
    mainProjects: [
        {
            id: "block-project-main1",
            name: "formulario de acesso",
            text: "tela inicial para fazer cadastro ou criar conta.",
            make: "Projeto web desenvolvido com html, css e js",
            icon: "../assets/svg/projects/icon_project_form.svg",
            link: "https://mikayas.github.io/fomulario_de_acesso/",
            base: "https://github.com/mikayas/fomulario_de_acesso"
        },
        {
            id: "block-project-main2",
            name: "página de captura",
            text: "página de captura com tema bitcoin.",
            make: "Projeto web desenvolvido com html e css",
            icon: "../assets/svg/projects/icon_project_page.svg",
            link: "https://mikayas.github.io/btc-lading-page/",
            base: "https://github.com/mikayas/btc-lading-page"
        },
        {
            id: "block-project-main3",
            name: "calculadora dígital",
            text: "calculadora digital com operações matemáticas básicas.",
            make: "Projeto web desenvolvido com html, css e js",
            icon: "../assets/svg/projects/icon_project_calc.svg",
            link: "https://mikayas.github.io/calculadora-digital/",
            base: "https://github.com/mikayas/calculadora-digital"
        },
    ],
    outherProjects: [],
    atributes: {
        skills: [
            {
                name: "ALGORITMO",
                level: "BÁSICO",
                icon: "../assets/svg/atributes/logic.svg",
                text: "lógica de programação"
            },
            {
                name: "DESIGN",
                level: "BÁSICO",
                icon: "../assets/svg/atributes/design.svg",
                text: "web design"
            },
        ],
        lenguage: [
            {
                name: "HTML",
                level: "INTERMEDIÁRIO",
                icon: "../assets/svg/atributes/html.svg",
                text: "páginas web semânticas"
            },
            {
                name: "CSS",
                level: "INTERMEDIÁRIO",
                icon: "../assets/svg/atributes/css.svg",
                text: "estilos reponsivos"
            },
            {
                name: "JAVASCRIPT",
                level: "BÁSICO",
                icon: "../assets/svg/atributes/js.svg",
                text: "páginas interativas"
            }
        ],
        tool: [
            {
                name: "FIGMA",
                level: "INTERMEDIÁRIO",
                icon: "../assets/svg/atributes/figma.svg",
                text: "protótipos"
            },
            {
                name: "GIT",
                level: "BÁSICO",
                icon: "../assets/svg/atributes/git.svg",
                text: "versionamento de código"
            },
        ]
    },
    resouces: [
        {
            name: "início",
            icon: "../assets/svg/resources/icon_home.svg",
            anc: "#ancHome"
        },
        {
            name: "projetos",
            icon: "../assets/svg/resources/icon_projects.svg",
            anc: "#ancProjects"
        },
        {
            name: "atributos",
            icon: "../assets/svg/resources/icon_atributes.svg",
            anc: "#ancAtributes"
        },
        {
            name: "contato",
            icon: "../assets/svg/resources/icon_contact.svg",
            anc: "#ancNetworks"
        },
    ]
}

export default profileDev;