function createProjectElement(projectData) {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project");

  const titleElement = document.createElement("h2");
  titleElement.textContent = projectData.title;

  const countryElement = document.createElement("p");
  countryElement.innerHTML = `<span class="detail-label">Country:</span> ${projectData.country}`;

  const datesElement = document.createElement("p");
  datesElement.innerHTML = `<span class="detail-label">Start Date:</span> ${projectData.dates}`;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = projectData.description;

  projectElement.appendChild(titleElement);
  projectElement.appendChild(countryElement);
  projectElement.appendChild(datesElement);
  projectElement.appendChild(descriptionElement);

  return projectElement;
}

document.addEventListener("DOMContentLoaded", () => {
  const projectDetails = [
    {
      title: "BrownsShoes",
      country: "Canada",
      dates: "01/2023 - Current",
      description:
        "I am currently working as a contractor for BrownsShoes Inc. I am responsible for further development in their Salesforce website, mainly working on Frontend A/B tests implementation and later integration on the website. The main goal of my position is to significantly convert more sales and grow revenue based on improving user experience. My role here include a lot of data gathering, data analysis, Vanilla JavaScript coding from scratch, maintaining code and leading a team of 4 people.",
    },
    {
      title: "LaunchEngine",
      country: "California",
      dates: "05/2022 - 05/2023",
      description:
        "In my role as a Senior Front End Developer at LaunchEngine, I wasprimarily responsible for designing and implementing high-qualitycomponents that improved the overall architecture and clarity of thecodebase. I identified areas where code needed to be reworked tofollow best practices, and I actively worked to refactor and redesignthose components. Through these efforts, I was able to make significantimprovements to the codebase and enhance the overall quality of theprojects I worked on. My ability to design efficient and effective front-end solutions helped to ensure that the final products were not onlyvisually appealing but also scalable and maintainable.",
    },
    {
      title: "Korber Digital ",
      country: "Portugal",
      dates: "06/2022 - 11/2022",
      description:
        "I was a contractor in this project to fix all the production bugs andvulnerabilities they had according to the Front-End, I had also to createthe version of the website for Android and IOS apps. It was a hugeproject for the inner team managements that created games,competitions between team members of different companies thatsubscribed to our platform. It was hosted in Azure so I also had to workon Azure to figure out how to create custom User-Flows and use themthe proper way. Also, a big part of my work was to create customnative components for both Android and IOS apps, including PushNotifications, Splash Screens, Biometric Login etc. Also had to createsome APIs on Node.js for some custom features required that were bestto be manipulated and created in another ‘server’. Technologies usedwere: Vue.js Ionic-Capacitor, MS Azure, Node.js",
    },
    {
      title: "Anitech Solutions ",
      country: "United Kingdom",
      dates: "08/2021 - 08/2022",
      description:
        "I worked as a Full Stack Developer for this client. The team was small,with 2 members and we had to create a custom WordPress theme andcustom plugins for the client requirements. The website's goal was tohave every employee data managed, manipulated and showed tospecific users for performance reasons. There you had how many taskseach employee had made during a specific time period, productivity,hours worked, some kind of rating, upcoming events, team-members(if-any), performance review and a lot of other things. Mostly I havebeen working on plugins and API development but also on the themedevelopment. Technologies used here were PHP and JavaScript. Theclient was very happy with the result and we still keep in touch forproduct-maintance or improvements.",
    },
  ];

  const projectsContainer = document.getElementById("portfolio");

  projectDetails.forEach((projectData) => {
    const projectElement = createProjectElement(projectData);
    projectsContainer.appendChild(projectElement);
  });
});
