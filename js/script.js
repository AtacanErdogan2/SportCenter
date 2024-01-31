window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 509.5 ||
    document.documentElement.scrollTop > 509.5
  ) {
    document.querySelector("nav").style.backgroundColor = "#355592";
  } else {
    document.querySelector("nav").style.backgroundColor = "transparent";
  }
}

const featuresButtonsDOM = document.querySelectorAll("#features button");
const contentDOM = document.querySelector(".classes-content");

const content = [
  {
    id: 1,
    img: "/assets/yoga.jpg",
    category: "Yoga",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis beatae veritatis, asperiores eveniet est nesciunt sequi ipsum dolorum?",
  },
  {
    id: 2,
    img: "/assets/group.webp",
    category: "Group",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium perferendis voluptatum delectus culpa at reiciendis facere quidem."
  },
  {
    id: 3,
    img: "/assets/solo.jpg",
    category: "Solo",
    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus corporis sit deserunt est totam culpa repellat cumque expedita."
  },
  {
    id: 4,
    img: "/assets/stret.webp",
    category: "Stretching",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit temporibus soluta ratione sapiente sequi illo est doloribus molestiae?"
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const defaultButton = featuresButtonsDOM[0];
  defaultButton.click();
});

featuresButtonsDOM.forEach(function (item) {
  
  item.addEventListener("click", function () {
    item.classList.add("features-btn-active");
    featuresButtonsDOM.forEach(function (otherItem) {
      if (item != otherItem) {
        otherItem.classList.remove("features-btn-active");
      }
    });

    const selectedCategory = item.getAttribute("data-category");
    const selectedContent = content.find(
      (item) => item.category === selectedCategory
    );
    
    contentDOM.innerHTML = `
      <div class="classes-content-article">
      <div >
        <h2>Why are your ${selectedContent.category}?</h2><br>
        <p>
          ${selectedContent.text}
        </p><br>
      </div>
      <div>
        <h2>It's Your ${selectedContent.category} Time.</h2><br>
        <p>Saturday-Sunday: 8:00am - 10:00am</p>
        <br/>
        <p>Monday-Tuesday: 10:00am - 12:00pm</p>
        <br/>
        <p>Wednesday-Friday: 3:00pm - 6:00pm</p>
      </div>
      </div>
      <div class="classes-content-figure">
      <img src=${selectedContent.img} alt="" />
      </div>
    `;
  });
});

function calculateBMI() {
  var height = document.getElementById('cm').value;
  var weight = document.getElementById('kg').value;
  var bmi = (weight / ((height/100) * (height/100))).toFixed(2);
 
}