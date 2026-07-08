// ===============================
// Navigation
// ===============================

function go(route) {
    window.location.href = route;
}

// ===============================
// Dark Mode
// ===============================

function toggleTheme() {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

}

window.addEventListener("load",()=>{

    if(localStorage.getItem("theme")==="dark"){

        document.body.classList.add("dark");

    }

});

// ===============================
// Scroll To Top Button
// ===============================

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

    if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

}

function scrollTopPage(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll(".counter");

const speed=100;

counters.forEach(counter=>{

    function updateCounter(){

        const target=+counter.getAttribute("data-target");

        const count=+counter.innerText;

        const increment=Math.ceil(target/speed);

        if(count<target){

            counter.innerText=count+increment;

            setTimeout(updateCounter,20);

        }

        else{

            counter.innerText=target+"+";

        }

    }

    updateCounter();

});

// ===============================
// Reveal Animation
// ===============================

const revealElements=document.querySelectorAll(".card,.hero,.stat,.cta");

window.addEventListener("scroll",reveal);

function reveal(){

    revealElements.forEach(item=>{

        const windowHeight=window.innerHeight;

        const top=item.getBoundingClientRect().top;

        const revealPoint=120;

        if(top<windowHeight-revealPoint){

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        }

    });

}

reveal();

// ===============================
// Initial Animation State
// ===============================

revealElements.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition=".7s";

});

// ===============================
// Active Navigation
// ===============================

const current=window.location.pathname;

document.querySelectorAll("nav a").forEach(link=>{

    if(link.getAttribute("href")==current){

        link.classList.add("active");

    }

});

// ===============================
// Contact Form Validation
// ===============================

const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

    e.preventDefault();

    const inputs=form.querySelectorAll("input,textarea");

    let valid=true;

    inputs.forEach(input=>{

        if(input.value.trim()===""){

            valid=false;

            input.style.border="2px solid red";

        }

        else{

            input.style.border="2px solid lime";

        }

    });

    if(valid){

        alert("Message Sent Successfully!");

        form.reset();

    }

});

}

// ===============================
// Welcome Message
// ===============================

window.addEventListener("load",()=>{

console.log("Welcome to Express Website");

});

// ===============================
// Typing Effect
// ===============================

const heading=document.querySelector(".hero h1");

if(heading){

const text=heading.innerText;

heading.innerText="";

let index=0;

function typing(){

    if(index<text.length){

        heading.innerHTML+=text.charAt(index);

        index++;

        setTimeout(typing,50);

    }

}

typing();

}

// ===============================
// Button Hover Sound (Optional)
// ===============================

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

// ===============================
// Navbar Background
// ===============================

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>100){

    nav.style.background="rgba(15,23,42,.95)";

}

else{

    nav.style.background="rgba(255,255,255,.08)";

}

});

// ===============================
// Smooth Anchor Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// ===============================
// Finished
// ===============================

console.log("Express Website Loaded Successfully");