import htmlIcon from "../Assets/Icons/html5-original.svg";
import cssIcon from "../Assets/Icons/css3-original.svg";
import jsIcon from "../Assets/Icons/javascript-original.svg";
import tailwindIcon from "../Assets/Icons/tailwindcss-plain.svg";
import webpackIcon from "../Assets/Icons/webpack-original.svg";
import pythonIcon from "../Assets/Icons/python-original.svg";
import mysqlIcon from "../Assets/Icons/mysql-original.svg";
import toDoAppImg from "../Assets/Images/todoapp.png";
import dodgeChargerImg from "../Assets/Images/dodge-charger.png";
import libraryImg from "../Assets/Images/library.png";
import restaurantImg from "../Assets/Images/restaurant.png";
import etchasketchImg from "../Assets/Images/etch-a-sketch.png";
import adminDashBoardImg from "../Assets/Images/admin-dashboard.png";
import webIcon from "../Assets/Icons/web.svg";


const Projects = (() => {
	const projectsData = [
		{
			name: "To Do App",
			projctImg: toDoAppImg,
			techStackIcons: [htmlIcon, cssIcon, jsIcon, tailwindIcon, webpackIcon],
			liveLink: "https://muditchoudhary.github.io/todo-app/",
			repoLink: "https://github.com/muditchoudhary/todo-app",
		},
        {
			name: "Dodge Charger Game",
			projctImg: dodgeChargerImg,
			techStackIcons: [pythonIcon, mysqlIcon],
			liveLink: "https://github.com/muditchoudhary/Dodge-Charger-Game",
			repoLink: "https://github.com/muditchoudhary/Dodge-Charger-Game",
		},
        {
			name: "Employee Management App",
			projctImg: toDoAppImg,
			techStackIcons: [pythonIcon, mysqlIcon],
			liveLink: "https://github.com/muditchoudhary/Employee_Management_System",
			repoLink: "https://github.com/muditchoudhary/Employee_Management_System",
		},
        {
			name: "Library",
			projctImg: libraryImg,
			techStackIcons: [htmlIcon, cssIcon, jsIcon],
			liveLink: "https://muditchoudhary.github.io/library/",
			repoLink: "https://github.com/muditchoudhary/library",
            
		},
        {
			name: "Restaurant Website",
			projctImg: restaurantImg,
			techStackIcons: [htmlIcon, cssIcon, jsIcon, webpackIcon],
			liveLink: "https://muditchoudhary.github.io/restaurant-page/",
			repoLink: "https://github.com/muditchoudhary/restaurant-page",
		},
        {
			name: "Etch A Sketch",
			projctImg: etchasketchImg,
			techStackIcons: [htmlIcon, cssIcon, jsIcon],
			liveLink: "https://muditchoudhary.github.io/etch-a-sketch/",
			repoLink: "https://github.com/muditchoudhary/etch-a-sketch",
            
		},
        {
			name: "Admin Dashboard",
			projctImg: adminDashBoardImg,
			techStackIcons: [htmlIcon, cssIcon],
			liveLink: "https://muditchoudhary.github.io/admin-dashboard/",
			repoLink: "https://github.com/muditchoudhary/admin-dashboard",
		},
	];
    
    const createCardIcons = (cIcons, cIconsParent) => {
        for (let i = 0; i < cIcons.length; i++) {
            const icon = document.createElement("img");
            icon.src = cIcons[i];
            icon.classList.add("w-[24px]", "h-[auto]")
            cIconsParent.appendChild(icon);
        }
    };

    const createProjectCard = (
        cName,
        cImg,
        cIcons,
        cRepoLink,
        cLiveLink
    ) => {
        const card = document.createElement("div");
        card.classList.add("border-2", "border-yellow-400", "h-fit", "w-[90%]", "rounded-md", "overflow-hidden", "shadow", "shadow-yellow-400")
        const cardImg = document.createElement("img");
        cardImg.classList.add("h-[auto]", "w-[100%]");
        cardImg.src = cImg;

        const cardName = document.createElement("h1");
        cardName.classList.add("text-white", "text-center", "text-2xl", "font-bold", "p-4");
        cardName.textContent = cName;

        const cardIcons = document.createElement("div");
        cardIcons.classList.add("flex", "justify-center", "gap-3", "items-center", "p-4", "pt-0");
        createCardIcons(cIcons, cardIcons);

        const cardLinks = document.createElement("div");
        cardLinks.classList.add("flex", "justify-center");

        const repoLinkDiv = document.createElement("div");
        repoLinkDiv.classList.add("flex", "p-3", "gap-2");
        const repoLinkIcon = document.createElement("img");
        repoLinkIcon.classList.add("bg-yellow-400", "w-[24px]", "h-[auto]", "rounded-full");
        repoLinkIcon.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
        const repoLinkText = document.createElement("a");
        repoLinkText.href = cRepoLink;
        repoLinkText.textContent = "GitHub";
        repoLinkText.classList.add("text-white", "hover:text-yellow-400");
        repoLinkDiv.append(repoLinkIcon, repoLinkText);

        const liveLinkDiv = document.createElement("div");
        liveLinkDiv.classList.add("flex", "p-3", "gap-2");
        const liveLinkIcon = document.createElement("img");
        liveLinkIcon.classList.add("bg-yellow-400", "w-[24px]", "h-[auto]", "rounded-full");
        liveLinkIcon.src = webIcon;
        const liveLinkText = document.createElement("a");
        liveLinkText.href = cLiveLink;
        liveLinkText.textContent = "Live";
        liveLinkText.classList.add("text-white", "hover:text-yellow-400");
        liveLinkDiv.append(liveLinkIcon, liveLinkText);

        cardLinks.append(repoLinkDiv, liveLinkDiv);

        card.append(cardImg, cardName, cardIcons, cardLinks);

        return card;

    };

	const madeProjedtSection = () => {
        const projectGrid = document.querySelector(".projects-grid");

		const projectDateLength = projectsData.length;
		for (let i = 0; i < projectDateLength; i++) {
			const myCard = createProjectCard(
				projectsData[i].name,
				projectsData[i].projctImg,
				projectsData[i].techStackIcons,
				projectsData[i].repoLink,
				projectsData[i].liveLink
			);
            projectGrid.append(myCard);
		}
	};

	return {
		madeProjedtSection,
	};
})();

export { Projects };
