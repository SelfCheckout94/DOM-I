const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// nav bar
const links = document.querySelectorAll("nav a");
const linksArray = Array.from(links);
linksArray[0].textContent = "Services";
linksArray[1].textContent = "Product";
linksArray[2].textContent = "Vision";
linksArray[3].textContent = "Features";
linksArray[4].textContent = "About";
linksArray[5].textContent = "Contact";

// header
const h1 = document.querySelector("h1");
h1.textContent = "DOM IS AWESOME";
const headerImg = document.querySelector("img#cta-img");
headerImg.src = "img/header-img.png";
const button = document.querySelector("button");
button.textContent = "Get Started";

// top content

// h4
const topContentH4 = document.querySelectorAll("div.text-content h4");
const h4Array = Array.from(topContentH4);
h4Array[0].textContent = "Features";
h4Array[1].textContent = "About";
h4Array[2].textContent = "Services";
h4Array[3].textContent = "Product";
h4Array[4].textContent = "Vision";

// img
const topImg = document.querySelector("img.middle-img");
topImg.src = "img/mid-page-accent.jpg";

// p content
const topContentP = document.querySelectorAll("div.text-content p");
const pArray = Array.from(topContentP);
pArray[0].textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pArray[1].textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pArray[2].textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pArray[3].textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pArray[4].textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// contact

const contact = document.querySelector("section.contact");
const contacth4 = contact.querySelector("h4");
contacth4.textContent = "Contact";
const contactP = contact.querySelectorAll("p");
const contactArrayP = Array.from(contactP);
contactArrayP[0].textContent = "123 Way 456 Street Somewhere, USA";
contactArrayP[1].textContent = "1 (888) 888-8888";
contactArrayP[2].textContent = "sales@greatidea.io";

// footer

const footer = document.querySelector("footer p");
footer.textContent = "Copyright Great Idea! 2018";
