//HAMBURGER MENU
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

// DARK MODE
const mode = prompt("Vyberte dark / light mode");
const body = document.querySelector("body");
if (mode === "dark") {
  body.style.backgroundColor = "black";
} else {
  body.style.backgroundColor = "#dbdad5";
}

// GALLERY
const photo = document.querySelector(".photo");
photo.addEventListener("mouseenter", () => {
  photo.style.transform = "scale(1.1)";
});
photo.addEventListener("mouseleave", () => {
  photo.style.transform = "scale(1)";
});

const photo1 = document.querySelector(".photo1");
photo1.addEventListener("mouseenter", () => {
  photo1.style.transform = "scale(1.1)";
});
photo1.addEventListener("mouseleave", () => {
  photo1.style.transform = "scale(1)";
});

const photo2 = document.querySelector(".photo2");
photo2.addEventListener("mouseenter", () => {
  photo2.style.transform = "scale(1.1)";
});
photo2.addEventListener("mouseleave", () => {
  photo2.style.transform = "scale(1)";
});

const photo3 = document.querySelector(".photo3");
photo3.addEventListener("mouseenter", () => {
  photo3.style.transform = "scale(1.1)";
});
photo3.addEventListener("mouseleave", () => {
  photo3.style.transform = "scale(1)";
});

const photo4 = document.querySelector(".photo4");
photo4.addEventListener("mouseenter", () => {
  photo4.style.transform = "scale(1.1)";
});
photo4.addEventListener("mouseleave", () => {
  photo4.style.transform = "scale(1)";
});

const photo5 = document.querySelector(".photo5");
photo5.addEventListener("mouseenter", () => {
  photo5.style.transform = "scale(1.1)";
});
photo5.addEventListener("mouseleave", () => {
  photo5.style.transform = "scale(1)";
});

const photo6 = document.querySelector(".photo6");
photo6.addEventListener("mouseenter", () => {
  photo6.style.transform = "scale(1.1)";
});
photo6.addEventListener("mouseleave", () => {
  photo6.style.transform = "scale(1)";
});

const photo7 = document.querySelector(".photo7");
photo7.addEventListener("mouseenter", () => {
  photo7.style.transform = "scale(1.1)";
});
photo7.addEventListener("mouseleave", () => {
  photo7.style.transform = "scale(1)";
});

// UP BUTTON
const up = document.querySelector(".up");
up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
const hideUp = () => {
  if (window.scrollY < 200) {
    up.classList.add("hidden");
  } else {
    up.classList.remove("hidden");
  }
};

hideUp();
window.onscroll = () => {
  hideUp();
};

// COUNTDOWN
// Set the date we're counting down to
const countDownDate = new Date("2024-12-31T23:59:59").getTime();

// Update the count down every 1 second
const x = setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById(
    "countdown"
  ).innerHTML = `New album in ${days} days and ${hours} hours ${minutes} minutes ${seconds} seconds`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "Odpočet skončil";
  }
}, 1000);

// LOGIN
function validateForm() {
  //collect form data in JavaScript variables
  const pw1 = document.getElementById("pswd1").value;
  const pw2 = document.getElementById("pswd2").value;
  const name1 = document.getElementById("fname").value;
  const name2 = document.getElementById("lname").value;

  //check empty first name field
  if (name1 == "") {
    document.getElementById("blankMsg").innerHTML = "**Fill the first name";
    return false;
  }

  //character data validation
  if (!isNaN(name1)) {
    document.getElementById("blankMsg").innerHTML =
      "**Only characters are allowed";
    return false;
  }

  //character data validation
  if (!isNaN(name2)) {
    document.getElementById("charMsg").innerHTML =
      "**Only characters are allowed";
    return false;
  }

  //check empty password field
  if (pw1 == "") {
    document.getElementById("message1").innerHTML =
      "**Fill the password please!";
    return false;
  }

  //check empty confirm password field
  if (pw2 == "") {
    document.getElementById("message2").innerHTML =
      "**Enter the password please!";
    return false;
  }

  //minimum password length validation
  if (pw1.length < 8) {
    document.getElementById("message1").innerHTML =
      "**Password length must be atleast 8 characters";
    return false;
  }

  //maximum length of password validation
  if (pw1.length > 15) {
    document.getElementById("message1").innerHTML =
      "**Password length must not exceed 15 characters";
    return false;
  }

  if (pw1 != pw2) {
    document.getElementById("message2").innerHTML = "**Passwords are not same";
    return false;
  } else {
    alert("Your password created successfully");
    document.write("JavaScript form has been submitted successfully");
  }
}
