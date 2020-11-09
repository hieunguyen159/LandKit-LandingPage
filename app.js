const validateButton = document.querySelector(".download-button");
const toggleButton = document.getElementById("responsive-button-navbar");
const preButton = document.getElementById("pre-button");
const nextButton = document.getElementById("next-button");
const inputs = document.querySelectorAll(".input-child");
//Display responsive Nav-Bar
const toggleNavBar = () => {
  const line1 = document.querySelector(".line-1");
  const line2 = document.querySelector(".line-2");
  const line3 = document.querySelector(".line-3");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  if (navbarCollapse.style.display === "none") {
    navbarCollapse.style.display = "block";
    line1.style.transform = "rotate(45deg) translate(5px, 0px)";
    line2.style.display = "none";
    line3.style.transform = "rotate(-45deg) translate(4px, 1px)";
  } else {
    navbarCollapse.style.display = "none";
    line1.style.transform = "rotate(0) translate(0, 0)";
    line2.style.display = "block";
    line3.style.transform = "rotate(0) translate(0, 0)";
  }
  console.log("Clicked");
};
// Validate
const validate = () => {
  const nameValue = document.getElementById("input-name").value;
  const emailValue = document.getElementById("input-email").value;
  const passwordValue = document.getElementById("input-password").value;
  const validateName = document.getElementById("validate-name");
  const validateEmail = document.getElementById("validate-email");
  const validatePassword = document.getElementById("validate-password");

  //validate name
  if (nameValue.trim() === "") {
    validateName.style.display = "block";
    validateName.innerHTML = "Name is required !";
  } else validateName.style.display = "none";

  //validate email
  if (emailValue.trim().length < 8) {
    validateEmail.style.display = "block";
    validateEmail.innerHTML = "Email must be at least 8 characters !";
  } else validateEmail.style.display = "none";

  //validate password
  if (passwordValue.trim().length < 8) {
    validatePassword.style.display = "block";
    validatePassword.innerHTML = "Password must be at least 8 characters !";
  } else validatePassword.style.display = "none";

  console.log(
    "name: ",
    nameValue,
    "\n",
    "email: ",
    emailValue,
    "\n",
    "password: ",
    passwordValue
  );
};
//show slides
const showSlide = () => {
  const imageSrc = document.getElementById("imageSrc");
  const headTitle = document.getElementById("headerImageSrc");
  const comment = document.getElementById("testimonial-comment");
  const footer = document.getElementById("comment-footer");
  const arr = [
    {
      imageSrc: "https://landkit.goodthemes.co/assets/img/photos/photo-1.jpg",
      iconTitle:
        "https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png",
      comment:
        "Landkit is hands down the most useful front end Bootstrap theme I have ever used. I can not wait to use it again for my next project.",
      footer: "Dave Gamache",
    },
    {
      imageSrc: "https://landkit.goodthemes.co/assets/img/photos/photo-26.jpg",
      iconTitle:
        "https://www.pngitem.com/pimgs/m/108-1087591_instagram-text-png-instagram-logo-png-horizontal-transparent.png",
      comment:
        "        I've never used a theme as versatile and flexible as Landkit. It's my go to for building landing sites on almost any project.",

      footer: "Rus D'SA",
    },
    {
      imageSrc: "https://landkit.goodthemes.co/assets/img/photos/photo-26.jpg",
      iconTitle:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png",
      comment:
        "        I've never used a theme as versatile and flexible as Landkit. It's my go to for building landing sites on almost any project.",

      footer: "dsadsadsa",
    },
  ];
  var i = 0;
  imageSrc.src = arr[i].imageSrc;
  headTitle.src = arr[i].iconTitle;
  comment.innerHTML = arr[i].comment;
  footer.innerHTML = arr[i].footer;

  preButton.addEventListener("click", () => {
    console.log(i);
    if (i > 0) {
      i--;
    } else {
      i = arr.length - 1;
    }
    imageSrc.src = arr[i].imageSrc;
    headTitle.src = arr[i].iconTitle;
    comment.innerHTML = arr[i].comment;
    footer.innerHTML = arr[i].footer;
  });
  nextButton.addEventListener("click", () => {
    console.log(i);
    if (i < arr.length - 1) {
      i++;
    } else {
      i = 0;
    }
    imageSrc.src = arr[i].imageSrc;
    headTitle.src = arr[i].iconTitle;
    comment.innerHTML = arr[i].comment;
    footer.innerHTML = arr[i].footer;
  });
};
//Validate Form
validateButton.addEventListener("click", validate);
inputs.forEach((input) =>
  input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) validate();
    console.log(e.keyCode);
  })
);
//Navbar Toggle
toggleButton.addEventListener("click", toggleNavBar);
//sliding
showSlide();
