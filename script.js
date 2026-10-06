/* =====================================
   SIMMO SOLUTIONS PLATFORM
   JAVASCRIPT FOUNDATION
===================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------
     SIDEBAR NAVIGATION
  ----------------------------- */

  const navButtons = document.querySelectorAll(".platform-nav");

  navButtons.forEach(button => {

    button.addEventListener("click", () => {

      navButtons.forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      const sectionName = button.innerText.trim();

      console.log("Simmo Platform:", sectionName);

    });

  });


  /* -----------------------------
     CREATE PROJECT
  ----------------------------- */

  const createButtons = document.querySelectorAll(
    ".create-project, .new-project .project-button"
  );

  createButtons.forEach(button => {

    button.addEventListener("click", () => {

      const projectName = prompt(
        "Enter your new project name:"
      );

      if (!projectName) return;

      alert(
        `Project "${projectName}" created successfully.\n\n` +
        "Project backend will be connected in the next development phase."
      );

    });

  });


  /* -----------------------------
     PROJECT MANAGEMENT
  ----------------------------- */

  const projectButtons = document.querySelectorAll(
    ".project-card .project-button"
  );

  projectButtons.forEach(button => {

    button.addEventListener("click", () => {

      const card = button.closest(".project-card");
      const title = card.querySelector("h4");

      if (!title) return;

      alert(
        `Opening project: ${title.innerText}\n\n` +
        "Project management features are coming soon."
      );

    });

  });


  /* -----------------------------
     TOOL BUTTONS
  ----------------------------- */

  const toolButtons = document.querySelectorAll(
    ".tool-card button"
  );

  toolButtons.forEach(button => {

    button.addEventListener("click", () => {

      const card = button.closest(".tool-card");
      const title = card.querySelector("h4");

      const feature =
        title ? title.innerText : "Simmo Feature";

      alert(
        `${feature}\n\n` +
        "This feature is currently part of the Simmo Platform roadmap."
      );

    });

  });


  /* -----------------------------
     GITHUB INTEGRATION
  ----------------------------- */

  const githubButton = [...toolButtons]
    .find(button =>
      button.innerText
        .toLowerCase()
        .includes("connect github")
    );

  if (githubButton) {

    githubButton.addEventListener("click", () => {

      const confirmGithub = confirm(
        "Connect your GitHub account to Simmo Platform?"
      );

      if (!confirmGithub) return;

      alert(
        "GitHub OAuth integration will be connected here.\n\n" +
        "Future flow:\n" +
        "GitHub Login → Authorize → Select Repository → Deploy"
      );

    });

  }


  /* -----------------------------
     DEPLOYMENT
  ----------------------------- */

  const deployButtons = [...toolButtons]
    .filter(button =>
      button.innerText
        .toLowerCase()
        .includes("deploy")
    );

  deployButtons.forEach(button => {

    button.addEventListener("click", () => {

      alert(
        "Deployment Center\n\n" +
        "Future deployment flow:\n" +
        "Repository → Build → Deploy → Live URL"
      );

    });

  });


  /* -----------------------------
     CUSTOM DOMAIN
  ----------------------------- */

  const domainButton = [...toolButtons]
    .find(button =>
      button.innerText
        .toLowerCase()
        .includes("manage domains")
    );

  if (domainButton) {

    domainButton.addEventListener("click", () => {

      const domain = prompt(
        "Enter your custom domain:"
      );

      if (!domain) return;

      alert(
        `Domain: ${domain}\n\n` +
        "DNS and SSL configuration will be connected in the future."
      );

    });

  }


  /* -----------------------------
     ANALYTICS
  ----------------------------- */

  const analyticsButton = [...toolButtons]
    .find(button =>
      button.innerText
        .toLowerCase()
        .includes("analytics")
    );

  if (analyticsButton) {

    analyticsButton.addEventListener("click", () => {

      alert(
        "Simmo Analytics\n\n" +
        "Future dashboard will show:\n" +
        "• Visitors\n" +
        "• Page views\n" +
        "• Traffic sources\n" +
        "• Performance\n" +
        "• Deployment activity"
      );

    });

  }


  /* -----------------------------
     KEYBOARD SHORTCUT
  ----------------------------- */

  document.addEventListener("keydown", event => {

    if (
      (event.ctrlKey || event.metaKey) &&
      event.key.toLowerCase() === "k"
    ) {

      event.preventDefault();

      alert(
        "Simmo Platform Command Center\n\n" +
        "Search and quick actions will be available here."
      );

    }

  });


  /* -----------------------------
     PLATFORM READY
  ----------------------------- */

  console.log(
    "🚀 Simmo Solutions Platform UI loaded successfully."
  );

});
