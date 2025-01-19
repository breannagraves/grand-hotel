
// dyanmic reviews section

const api = [
    {
        id: 1, image: 'img/customer-1.jpg', name: "Sarah Josh", desc: "Happy Customer", review: "Sit amet consectetur adipisicing elit. Dolorum cumque, doloribus iusto beatae molestiae, esse possimus blanditiis illum voluptate at consectetur, eum ipsam neque vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cupiditate.",
    },
    {
        id: 2, image: 'img/customer-2.png', name: "Helen Doe", desc: "Good Review", review: "Dolorum cumque, doloribus iusto beatae molestiae, esse possimus blanditiis illum voluptate at consectetur, eum ipsam neque vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cupiditate.",
    },
    {
        id: 3, image: 'img/customer-3.png', name: "John Doe", desc: "So Happy", review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cupiditate. Dolorum cumque, doloribus iusto beatae molestiae, esse possimus blanditiis illum voluptate at consectetur, eum ipsam neque vitae.",
    }
]

let currentItem = 0;

let image = document.querySelector(".customer-image");

let title = document.querySelector(".customer-fullname"); 

let desc = document.querySelector(".customer-paragraph-1");

let review = document.querySelector(".customer-paragraph-2"); 

let prev = document.querySelector(".prev-button");

let next = document.querySelector(".next-button");

// display our content from API

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
})


//creating function that takes input and returns answer related to the indexes of the array "API"

function showPerson(person) {
    let item = api[person];
    title.textContent = item.name;
    desc.textContent = item.desc;
    review.textContent = item.review;
    
}

// get image dynamically 
function personImage(person) {
    let item = api[person];
    image.textContent = item.image;
    console.log(item.image);
    image.src = item.image;
    
}

// creating buttons 
next.addEventListener("click", function() {
    currentItem++;

    if(currentItem > api.length-1) {
        currentItem = 0;
    }

    showPerson(currentItem);
  
    personImage(currentItem);
    console.log('next click');
})

prev.addEventListener("click", function() {
    currentItem--;

    if(currentItem < 0) {
        currentItem = api.length-1;
    }

    showPerson(currentItem);

    personImage(currentItem);
    console.log('prev click');
})

// allowing buttons to change image of review section
// const reviewImg = document.getElementById("img");
// const reviewButton = document.getElementById("next-button");

// reviewButton.addEventListener("click", function() {
//     reviewImg.src = "img/customer-2.png"
// })



// Get the sglRoomModal
var sglRoomModal = document.getElementById("sglRoomModal");

// Get the button that opens the modal
var btn = document.getElementById("sgl-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    sglRoomModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    sglRoomModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == sglRoomModal) {
    sglRoomModal.style.display = "none";
  }
}

// Get the dblRoommodal
var dblRoomModal = document.getElementById("dblRoomModal");

// Get the button that opens the modal
var btn = document.getElementById("dbl-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    dblRoomModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    dblRoomModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == dblRoomModal) {
    dblRoomModal.style.display = "none";
  }
}


// Get the luxRoommodal
var luxRoomModal = document.getElementById("luxRoomModal");

// Get the button that opens the modal
var btn = document.getElementById("lux-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    luxRoomModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    luxRoomModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == luxRoomModal) {
    luxRoomModal.style.display = "none";
  }
}

// Get the vipRoommodal
var vipRoomModal = document.getElementById("vipRoomModal");

// Get the button that opens the modal
var btn = document.getElementById("vip-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    vipRoomModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    vipRoomModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == vipRoomModal) {
    vipRoomModal.style.display = "none";
  }
}

// end of dynamic reviews section 