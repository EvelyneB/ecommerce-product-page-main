const navBar = document.querySelector('.menu');
const btn = document.querySelector('.hamburger');
const cross = document.querySelector('.close');

const overlay = document.querySelector(".overlay");

const btnCart =  document.querySelector(".cart-btn");
const cartFull = document.querySelector(".cart-display");

const gallery = document.querySelectorAll(".pic");
const gallery2 = document.querySelectorAll(".pic2");
const heroImg = document.querySelector(".image");
const heroImg2 = document.querySelector(".image2");

const btnNext = document.querySelector('#next');
const btnPrevious = document.querySelector('#previous');

const btnNext2 = document.querySelector('#next2');
const btnPrevious2 = document.querySelector('#previous2');

const btnPlus = document.querySelector('.btnPlus');
const btnMinus = document.querySelector('.btnMinus');
const productCounter = document.querySelector('.counter');



//Numerical Variables
let productCounterValue = 1;
let productsInCart = 0;
let price = 250.0
let discount = 0.5;


// SLIDER 1 controls

var slideIndex = 1;
showSlides(slideIndex);


//  NEXT/PREVIOUS CONTROLS (onclick html button prev/next)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

}

// THUMBNAIL GALLERY 1440PX---

//when clicking on thumbnail "pic"
gallery.forEach(img =>{
  img.addEventListener("click", onThumbClick);
})

function onThumbClick(event) {
  //clear active state for all thumbnails
  gallery.forEach(img =>{
    img.classList.remove("active");
  });
  //set active status thumbnails
  event.target.parentElement.classList.add("active");
  //update hero image
  heroImg.src = event.target.src.replace('-thumbnail', '');
 
}

btnNext.addEventListener('click', handleBtnClickNext);
btnPrevious.addEventListener('click', handleBtnClickPrevious);

function handleBtnClickNext() {
  let imageIndex = getCurrentImageIndex();
  imageIndex++;
  if (imageIndex > 4) {
      imageIndex = 1;
  }
  setHeroImage(imageIndex);
}

function handleBtnClickPrevious() {
  let imageIndex = getCurrentImageIndex();
  imageIndex--;
  if (imageIndex < 1) {
      imageIndex = 4;
  }
  console.log(imageIndex)
  setHeroImage(imageIndex);
}


function getCurrentImageIndex() {
  const imageIndex = parseInt(heroImg.src.split('\\').pop().split('/').pop().replace('.jpg', '').replace('image-product-', ''));
  return imageIndex;
}

function setHeroImage(imageIndex) {
  heroImg.src = `./images/image-product-${imageIndex}.jpg`;
  //images are not sync
  gallery.forEach(img => {
      img.classList.remove('active');
  });
  //set active thumbnail
  gallery[imageIndex-1].classList.add('active');
}


//SLIDER 2 LIGHTBOX **********************************

var slideIndex = 1;
showSlides2(slideIndex);


// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var j;
  var slides2 = document.getElementsByClassName("slides2");

  if (n > slides2.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides2.length}
  for (j = 0; j < slides2.length; j++) {
      slides2[j].style.display = "none";
  }

  slides2[slideIndex-1].style.display = "block";

}


gallery2.forEach(img =>{
  img.addEventListener("click", onThumbClick2);
})


function onThumbClick2 (event) {
  //clear active state for all thumbnails
  gallery2.forEach(img =>{
    img.classList.remove("active");
  });
  //set active status thumbnails
  event.target.parentElement.classList.add("active");
  //update hero image
  heroImg2.src = event.target.src.replace('-thumbnail', '')
}

function handleBtnClickNext2() {
  let imageIndex = getCurrentImageIndex();
  imageIndex++;
  if (imageIndex > 4) {
      imageIndex = 1;
  }
  setHeroImage2(imageIndex);
}

function handleBtnClickPrevious2() {
  let imageIndex = getCurrentImageIndex();
  imageIndex--;
  if (imageIndex < 1) {
      imageIndex = 4;
  }
  console.log(imageIndex)
  setHeroImage2(imageIndex);
}

function getCurrentImageIndex() {
  const imageIndex = parseInt(heroImg2.src.split('\\').pop().split('/').pop().replace('.jpg', '').replace('image-product-', ''));
  return imageIndex;
}

function setHeroImage2(imageIndex) {
  heroImg2.src = `./images/image-product-${imageIndex}.jpg`;
  //images are not sync
  gallery2.forEach(img => {
      img.classList.remove('active');
  });
  //set active thumbnail
  gallery2[imageIndex-1].classList.add('active');
}

//END LIGHTBOX ******************** */

// NAVBAR AND OVERLAY CONTROLS

btn.addEventListener('click', ()=>{
    navBar.classList.add('active');
    overlay.classList.add ("block");

})

cross.addEventListener('click', ()=>{
  navBar.classList.remove('active');
  overlay.classList.remove("block");

})

//CART DISPLAY

btnCart.addEventListener('click', ()=>{
  cartFull.classList.toggle('block');

})

btnNext2.addEventListener('click', handleBtnClickNext2);
btnPrevious2.addEventListener('click', handleBtnClickPrevious2);
          
btnPlus.addEventListener('click', productCounterPlus);
btnMinus.addEventListener('click', productCounterMinus);


// Qty COUNTER 

function productCounterPlus() {
  //console.log(productCounterValue);
  setProductCounter(1);
}

function productCounterMinus() {
  setProductCounter(-1);
}

function setProductCounter(value) {
  if ((productCounterValue + value) > 0) {
      productCounterValue += value;
      productCounter.innerHTML = productCounterValue;
  }
}

// DELETE ITEMS
const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener('click', () => {
    cartIndicator.innerText = "0";
    currentTotal = 0;
    indicatorNumCheck();
})

// Add to Cart 

const addToCartBtn = document.querySelector(".add-btn");
const cartIndicator = document.querySelector(".cart-count");

// Cart items
const emptyCart = document.querySelector(".empty-cart-msg"); // Empty Cart
const cartFill = document.querySelector(".first-row"); // Filled Cart

const thumbnail = document.querySelector(".thumbnail");
const productName = document.querySelector(".product-name");
const productName2 = document.querySelector(".product-name-2");
const productInShoppingCart = document.querySelector('.products-in-cart'); 

// Check out Btn
const checkout = document.querySelector('.checkout-container-btn');
const mediaQuery = window.matchMedia('(min-width: 1440px)');
const mediaQuery2 = window.matchMedia('(max-width: 1339px)');

// Check if the cart is empty
function indicatorNumCheck() {
    if (cartIndicator.innerText == "0") {
        deleteBtn.style.display = "none";
        emptyCart.style.display = "block";
        productInShoppingCart.style.display = "none";
        checkout.style.display = "none";
        thumbnail.style.display = "none";
        productName2.style.display = "none"; 
        cartIndicator.style.display = "none";       

       
    } else if (cartIndicator != "0") {
      deleteBtn.style.display = "block";
        productInShoppingCart.style.display = "flex";
        checkout.style.display = "block";
        emptyCart.style.display = "none";
        thumbnail.style.display = "block";
        productName2.style.display = "block";  
        cartIndicator.style.display = "block";       
    }
    }

// Initial Check when program is ran
indicatorNumCheck();

// EventListener for Add to cart btn
let currentTotal = parseInt(cartIndicator.innerText);

    addToCartBtn.addEventListener("click", () => {
    const productCountTag = document.querySelector(".count");

    currentTotal += parseInt(productCounter.innerText);

    cartIndicator.innerText = `${currentTotal}`;
    productCountTag.innerText = `${currentTotal}`;

    indicatorNumCheck();
    totalPrice(currentTotal);
})


function totalPrice(currentTotal) {
    const productPrice = document.querySelector(".price");
    const totalAmountTag = document.querySelector(".total-amount");
    console.log(productPrice.innerText);
    let totalPrice = parseFloat((productPrice.innerText).slice(1)) * currentTotal;
    totalAmountTag.innerText = `$${totalPrice.toFixed(2)}`;
}

//OPEN LIGHTBOX ---------------

const closeLightBox = document.querySelector('.close-lightbox');
const openLightBox = document.querySelector(".slides");

const lightBoxContainer = document.querySelector('.lightbox-content');
const lightBoxBackground = document.querySelector('.lightbox');
const slider = document.querySelector('.slider-container');

const btnContainer = document.querySelector('.button-container'); 

// Close lightBox 

function closeFunc(){
  lightBoxBackground.style.opacity = '0';

    setTimeout(() =>{
      lightBoxBackground.style.zIndex='-99';
    }, 500)
}
// with overlay
document.addEventListener('click',(e) =>{
  e = window.event;
  let target = e.target;
  if (target.className == "lightbox"){
      closeFunc()
  }
  return;
})

// CLOSE LIGHTBOX
closeLightBox.addEventListener('click', () => {
  closeFunc()
})


// LIGHTBOX-BACKGROUND CONTROLS
openLightBox.addEventListener('click', () => {

  lightBoxBackground.style.opacity = '1';
  lightBoxBackground.style.zIndex='99';
})



 
