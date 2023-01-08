var profileDev = {
    fullName: "Mikaias Silva",
    defStatus: {
        def1: "developer",
        def2: "freelancer"
    },
    texts: {
        pres1: "Hello! I'm Mikaias Silva",
        paragraph1: "I'm developer front-end, I study and create my own projects to improve my attributes and learn new things.",
    },
    areas: [
        {
            icon: "../src/svg/icon_frontend.svg",
            text: "web pages with html, css and js"
        },
        {
            icon: "../src/svg/icon_prototype.svg",
            text: "prototyping interfaces with figma"
        },
        {
            icon: "../src/svg/icon_design.svg",
            text: "graphic design and responsive applications"
        }
    ],
    personalImg: {
        img: {
            poster: "../public/poster_banner.png", 
        },
        logo: {
            logoLow: "../src/svg/logo_low.svg",
            logoLowBlack: "../src/svg/logo_low_black.svg",
            logoLowPink: "../src/svg/logo_low_pink.svg",
        }
    },
    networks: [
        {
            name: "linkedin/mikaias",
            link: "https://www.linkedin.com/in/mikay4s",
            icon: "../src/svg/linkedin.svg"
        },            
        {
            name: "github/mikaias",
            link: "https://github.com/mikayas",
            icon: "../src/svg/gtihub.svg"
        },
        {
            name: "instagram/mikaias",
            link: "https://instagram.com/mikay4s_eu",
            icon: "../src/svg/instagram.svg"
        },
        
    ],
    mainProjects: [
        {
            id: "block-project-main1",
            name: "on-nho",
            text1: "registration phases in an application. including visual id and flux",
            text2: "prototype developed with figma and design mobile",
            icon: "../src/svg/onnho_mascot.svg",
            iconMake1: "src/svg/design.svg",
            iconMake2: "src/svg/figma.svg",
            iconMake3: "src/svg/icon_prototype.svg",
            bgColor: "#0000ff0d",
            link: "https://www.figma.com/proto/ggM8ZkDkPPs9NoYnQJ2oNt/forms?node-id=224%3A325&scaling=min-zoom&page-id=224%3A302&starting-point-node-id=224%3A325",
            base: "https://www.figma.com/file/ggM8ZkDkPPs9NoYnQJ2oNt/forms?node-id=0%3A1&t=WUWpTwPJmrE4jPpn-1"
        },
        {
            id: "block-project-main2",
            name: "login form",
            text1: "form to register or enter an account",
            text2: "web project developed with html, css e js",
            icon: "../src/svg/icon_project_form.svg",
            iconMake1: "src/svg/html.svg",
            iconMake2: "src/svg/css.svg",
            iconMake3: "src/svg/js.svg",
            bgColor: "#00ff4c0d",
            link: "https://mikayas.github.io/fomulario_de_acesso/",
            base: "https://github.com/mikayas/fomulario_de_acesso"
        },
        {
            id: "block-project-main3",
            name: "landing page",
            text1: "bitcoin quickstart page (design only)",
            text2: "web project developed with html e css",
            icon: "../src/svg/icon_project_page.svg",
            iconMake1: "src/svg/html.svg",
            iconMake2: "src/svg/css.svg",
            iconMake3: "src/svg/design.svg",
            bgColor: "#fffb000d",
            link: "https://mikayas.github.io/btc-lading-page/",
            base: "https://github.com/mikayas/btc-lading-page"
        }
    ],
    otherProjects: [
        {
            display: "",
            name: "digital calculator",
            text: "digital calculator with basic operations",
            link: "https://mikayas.github.io/calculadora-digital/",
            base: "https://github.com/mikayas/calculadora-digital"
        },
        {
            display: "func-no-element",
            name: "empty",
            text: "empty",
            link: "#",
            base: "#"
        },
        {
            display: "func-no-element",
            name: "empty",
            text: "empty",
            link: "#",
            base: "#"
        }
    ],
    atributes: {
        skills: [
            {
                name: "ALGORITHM",
                level: "BASIC",
                icon: "../src/svg/logic.svg",
                text: "programming logic"
            },
            {
                name: "DESIGN",
                level: "BASIC",
                icon: "../src/svg/design.svg",
                text: "web design"
            },
        ],
        lenguage: [
            {
                name: "HTML",
                level: "INTERMEDIARY",
                icon: "../src/svg/html.svg",
                text: "semantic web pages"
            },
            {
                name: "CSS",
                level: "INTERMEDIARY",
                icon: "../src/svg/css.svg",
                text: "responsive styles"
            },
            {
                name: "JAVASCRIPT",
                level: "BASIC",
                icon: "../src/svg/js.svg",
                text: "manipulation of web pages"
            }
        ],
        tool: [
            {
                name: "FIGMA",
                level: "INTERMEDIARY",
                icon: "../src/svg/figma.svg",
                text: "prototypes"
            },
            {
                name: "GIT",
                level: "BASIC",
                icon: "../src/svg/git.svg",
                text: "code versioning"
            },
        ]
    },
    resouces: [
        {
            name: "home",
            icon: "../src/svg/icon_home.svg",
            anc: "#ancHome"
        },
        {
            name: "projects",
            icon: "../src/svg/icon_projects.svg",
            anc: "#ancProjects"
        },
        {
            name: "atributes",
            icon: "../src/svg/icon_atributes.svg",
            anc: "#ancAtributes"
        },
        {
            name: "contact",
            icon: "../src/svg/icon_contact.svg",
            anc: "#ancNetworks"
        },
    ]
}

export default profileDev;