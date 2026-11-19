// Navigation links for each role (the only place links are written)
const NAV_LINKS = {
  user: [
    { label: "Home", href: "/user/dashboard" },
    { label: "Borrow", href: "/user/borrow/" },
    { label: "Borrowed", href: "/user/borrowed/" },
    { label: "Reports", href: "/user/reports/" },
  ],
  admin: [
    { label: "Home", href: "/admin/dashboard" },
    { label: "Equipment ", href: "/admin/equipments/" },
    { label: "Inventory ", href: "/admin/inventory/" },
    { label: "Reports", href: "/admin/reports/" },
    { label: "User", href: "/admin/user-data/" },
  ],
};

// Makes "/user/home/index.html" and "/user/home" both become "/user/home/"
function normalizePath(path) {
  path = path.replace(/index\.html$/, ""); // remove trailing index.html
  path = path.replace(/\.html$/, "");      // remove trailing .html
  if (!path.endsWith("/")) {
    path += "/";
  }
  return path;
}

function renderNav() {
  const container = document.getElementById("nav-container");
  if (!container) return; // page has no nav container (e.g. login page)

  // Read the role saved by userAuth.js at login
 let userRole = sessionStorage.getItem("account");

if (!userRole) {
  if (window.location.pathname.startsWith("/admin")) {
    userRole = "admin";
  } else if (window.location.pathname.startsWith("/user")) {
    userRole = "user";
  }
}

//const role = sessionStorage.getItem("userRole"); security purpose
// const links = NAV_LINKS[role];
// if (!links) return;

const links = NAV_LINKS[userRole];
if (!links) return;

  const currentPath = normalizePath(window.location.pathname);

  // Build one <li> per link; add "active" if it matches the current page
  const linksHTML = links
    .map((link) => {
      const linkPath = normalizePath(link.href);
      const activeClass = currentPath.startsWith(linkPath) ? " active" : "";
      return `
        <li class="nav-item">
          <a href="${link.href}" class="nav-link${activeClass}">${link.label}</a>
        </li>`;
    })
    .join("");

  container.innerHTML = `
    <header class="site-header">
      <nav class="navbar">
        <a href="${links[0].href}" class="logo">
          <h1 class="logo-name">
            <span class="highlight">K</span>ari<span class="highlight">E</span>quip
          </h1>
        </a>
        <ul class="nav-list">${linksHTML}
        </ul>
      </nav>
    </header>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
});

document.addEventListener("DOMContentLoaded", () => {
  const greetings = document.getElementById("greetings");
  const currentPage = window.location.pathname;

  // Testing Purpose
  //if (currentPage.includes('user')){
  //    greetings.textContent = 'Welcome User'
  //}
  //else if (currentPage.includes('admin')){
  //    greetings.textContent = 'Welcome Admin'
  //}
  //else{
  //    greetings.textContent = ' Guest'
  //}

  //User Pages

  if (currentPage.includes("user/")) {
    if (currentPage.includes("user/borrow")) {
      greetings.textContent = "Borrow Section";
    } else if (currentPage.includes("user/borrowed")) {
      greetings.textContent = "Borrowed Section";
    } else if (currentPage.includes("user/reports")) {
      greetings.textContent = "Reports Section";
    }
    else {
      greetings.textContent = "User Dashboard";
    }
  }

  //Admin Pages
  else {
    if (currentPage.includes("admin/equipments")) {
      greetings.textContent = "Equipments Section";
    } else if (currentPage.includes("admin/inventory")) {
      greetings.textContent = "Borrowed Section";
    } else if (currentPage.includes("admin/reports")) {
      greetings.textContent = "Reports Section";
    }else if(currentPage.includes("admin/user-data")) {
      greetings.textContent = "Users Section";
    } 
    else {
      greetings.textContent = "Admin Dashboard";
    }
  }
});


