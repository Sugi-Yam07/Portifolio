/* ------------------ TEMA ESCURO / CLARO ------------------ */
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
});

/* ------------------ TROCA DE IDIOMA ------------------ */
const translations = {
    pt: {
        logo: "Seu Nome",
        menuSobre: "Sobre",
        menuSkills: "Skills",
        menuProjetos: "Projetos",
        menuContato: "Contato",
        heroTitle: "Olá! Eu sou <span>Seu Nome</span>",
        heroSubtitle: "Desenvolvedor • Cientista de Dados • Criador de Projetos",
        heroBtn: "Ver Projetos",
        sobreTitulo: "Sobre Mim",
        sobreTexto:
            "Sou estudante de Ciência de Dados no CEDUP e atuo na criação de dashboards, websites, modelos de machine learning e análises de dados.",
        skillsTitulo: "Habilidades",
        skillsHard: "Hard Skills",
        skillsSoft: "Soft Skills",
        projetosTitulo: "Projetos",
        proj1: "Modelo ARIMA e LSTM para previsão de preços futuros.",
        proj2: "EDA e regressão linear para prever despesas médicas.",
        proj3: "Classificação de textos usando Naive Bayes.",
        proj4: "Dashboard com API Open-Meteo.",
        projVer: "Ver Projeto",
        contatoTitulo: "Contato",
        linkedin: "LinkedIn:",
        telefone: "Telefone:"
    },

    en: {
        logo: "Your Name",
        menuSobre: "About",
        menuSkills: "Skills",
        menuProjetos: "Projects",
        menuContato: "Contact",
        heroTitle: "Hello! I am <span>Your Name</span>",
        heroSubtitle: "Developer • Data Scientist • Project Creator",
        heroBtn: "View Projects",
        sobreTitulo: "About Me",
        sobreTexto:
            "I am a Data Science student working with dashboards, websites, machine learning models and data analysis.",
        skillsTitulo: "Skills",
        skillsHard: "Hard Skills",
        skillsSoft: "Soft Skills",
        projetosTitulo: "Projects",
        proj1: "ARIMA and LSTM models for price forecasting.",
        proj2: "EDA and linear regression to predict medical expenses.",
        proj3: "Text classification using Naive Bayes.",
        proj4: "Dashboard using Open-Meteo API.",
        projVer: "View Project",
        contatoTitulo: "Contact",
        linkedin: "LinkedIn:",
        telefone: "Phone:"
    }
};

document.getElementById("languageSwitch").addEventListener("change", function () {
    const lang = this.value;

    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.innerHTML = translations[lang][key];
    });
});

/* ------------------ ROLAGEM SUAVE ------------------ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const section = document.querySelector(link.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
});
