// script.js

// TYPING EFFECT

new Typed(".typing", {

    strings:[

        "Full Stack Developer",
        "React Developer",
        "Frontend Engineer",
        "UI/UX Designer"

    ],

    typeSpeed:80,

    backSpeed:50,

    loop:true

});

// AOS

AOS.init({

    duration:1200,

    once:true

});

// PARTICLES

particlesJS("particles-js", {

    particles: {

        number: {

            value: 90

        },

        color: {

            value: "#38bdf8"

        },

        shape: {

            type: "circle"

        },

        opacity: {

            value: 0.4

        },

        size: {

            value: 3

        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#38bdf8",

            opacity: 0.2,

            width: 1

        },

        move: {

            enable: true,

            speed: 2

        }

    }

});

// NAVBAR SCROLL EFFECT

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        nav.style.background = "rgba(5,8,22,0.85)";

        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";

    }

    else{

        nav.style.background = "rgba(5,8,22,0.55)";

        nav.style.boxShadow = "none";

    }

});

// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

// GITHUB API

fetch("https://api.github.com/users/8421477238/repos?sort=updated")

.then(response => response.json())

.then(data => {

    const githubContainer = document.getElementById("githubContainer");

    data.slice(0,6).forEach(repo => {

        githubContainer.innerHTML += `

        <div class="github-card">

            <h3>${repo.name}</h3>

            <p>

                ${repo.description || "Modern scalable repository project."}

            </p>

            <a href="${repo.html_url}" target="_blank">

                View Repository →

            </a>

        </div>

        `;

    });

});