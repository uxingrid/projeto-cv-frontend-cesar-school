var experience = document.getElementById("experience");
var education = document.getElementById("education");
var courses = document.getElementById("courses");
var languages = document.getElementById("languages");


var myExperience = [{
        title: "Accenture",
        description: "Designer Visual Analyst",
        period: "Mar. 2020 - Present"
    },
    {
        title: "Informata",
        description: "UX/UI Designer Jr.",
        period: "Jan. - Fev. 2020"
    },
    {
        title: "Grupo SEG",
        description: "Assistente de Marketing",
        period: "Set. 2018 - Dez. 2019"
    },
    {
        title: "Karpa Produções Culturais Ltda.",
        description: "Programadora Visual",
        period: "Abr. - Jun. 2018"
    },
];

var myEducation = [{
        title: "Pós-Graduação em Design de Interação para Artefatos Digitais",
        description: "CESAR School",
        period: "Mai. 2020 - Nov. 2021 [Present]"
    },
    {
        title: "Design Gráfico",
        description: "UNIBRATEC",
        period: "Ago. 2018 - Dez. 2019 [Incomplete]"
    },
    {
        title: "Bacharelado em Direito",
        description: "Faculdade dos Guararapes",
        period: "Mai. 2010 - Jun. 2015"
    },

];

var myCourses = [{
        title: "UX Design",
        description: "Design Circuit",
        period: "2020"
    },
    {
        title: "Design Thinking for Innovation: Stakeholder Engagement",
        description: "Skillsoft",
        period: "Set. 2020"
    },
    {
        title: "API Security",
        description: "Skillsoft",
        period: "Ago. 2020"
    },
    {
        title: "Construindo uma Cultura de Design Thinking",
        description: "Skillsoft",
        period: "Jun. 2020"
    },
    {
        title: "Scrum Foundation Profesional Certificate (SFPC)",
        description: "CertiProf",
        period: "Jun. 2020"
    },

];

var myLanguages = [{
        title: "Inglês",
        description: "",
        period: "Intermediário"
    },
    {
        title: "Espanhol",
        description: "",
        period: "Básico"
    },
];

var myExperienceElement = convertToElement(myExperience);
print(experience, myExperienceElement);

var myEducationElement = convertToElement(myEducation);
print(education, myEducationElement);

var myCoursesElement = convertToElement(myCourses);
print(courses, myCoursesElement);

var myLanguagesElement = convertToElement(myLanguages);
print(languages, myLanguagesElement);

function convertToElement(items) {
    var elementItems = [];

    for (qtd = 0; qtd < items.length; qtd++) {
        elementItems.push(createElemetItem(items[qtd]));
    }

    return elementItems;
}

function createElemetItem(exp) {
    return `<li>
        <b>${exp.title}</b>` +
        (exp.description == "" ? "" : ", ") +
        `${exp.description}</br>
        <small class="section-item-subtitle">${exp.period}</small>
    </li>`;
}

function print(elementItem, items) {
    elementItem.innerHTML = items.join('');
}