const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let circle = document.getElementById('cta-img');
circle.setAttribute('src', siteContent["cta"]["img-src"]);

let line = document.getElementById("middle-img");
line.setAttribute('src', siteContent["main-content"]["middle-img-src"]);



const navBar = document.querySelector('nav');
let item1 = navBar.querySelector('a:nth-of-type(1)');
item1.textContent= siteContent.nav["nav-item-1"];
let item2 = navBar.querySelector('a:nth-of-type(2)');
item2.textContent= siteContent.nav["nav-item-2"];
let item3 = navBar.querySelector('a:nth-of-type(3)');
item3.textContent= siteContent.nav["nav-item-3"];
let item4 = navBar.querySelector('a:nth-of-type(4)');
item4.textContent= siteContent.nav["nav-item-4"];
let item5 = navBar.querySelector('a:nth-of-type(5)');
item5.textContent= siteContent.nav["nav-item-5"];
let item6 = navBar.querySelector('a:nth-of-type(6)');
item6.textContent= siteContent.nav["nav-item-6"];

let title = document.querySelector("h1");
title.textContent = siteContent['cta']['h1'];

let tButton = document.querySelector('button');
tButton.textContent = "Get started"

let points = document.querySelectorAll('features-h4');
points.textContent = siteContent['main-content']['features-h4']
// points[1].textContent = 'About';
// points[2].textContent = 'Services';
// points[3].textContent = 'Product';
// points[4].textContent = 'Vision';
// points[5].textContent = 'Contact';






