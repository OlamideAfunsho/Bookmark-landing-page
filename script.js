//HAMBURGER MENU
function openNav() {
     const dropBar = document.querySelector('.drop-bar');
     const overlay = document.querySelector('.overlay');
     const hamburgerMenu = document.getElementById('hamburger-menu');
     const closeIcon = document.getElementById('close-icon');
     const body = document.body;

     // Show and slide in the overlay
     overlay.classList.add('show');

     // Add the show class for the drop-bar to slide down
     dropBar.style.display = "flex"; // Make it visible before transitioning
     setTimeout(() => dropBar.classList.add('show'), 10);

     // Switch icons
     hamburgerMenu.style.display = 'none';
     closeIcon.style.display = 'block';

     // Prevent body scrolling
     body.classList.add('no-scroll');
}

function closeNav() {
     const dropBar = document.querySelector('.drop-bar');
     const overlay = document.querySelector('.overlay');
     const hamburgerMenu = document.getElementById('hamburger-menu');
     const closeIcon = document.getElementById('close-icon');
     const body = document.body;

     // Slide out the overlay
     overlay.classList.remove('show');

     // Remove the show class to collapse the drop-bar
     dropBar.classList.remove('show');

     // Wait for transitions to complete before hiding elements
     setTimeout(() => {
         dropBar.style.display = "none";
     }, 500);

     // Switch icons
     hamburgerMenu.style.display = 'block';
     closeIcon.style.display = 'none';

     // Allow body scrolling
     body.classList.remove('no-scroll');
}




 window.addEventListener('resize', function() {
     const dropBar = document.querySelector('.drop-bar');
     const overlay = document.getElementById('overlay');
     const body = document.body;
 
     if (window.innerWidth > 700) {  // Adjust this value based on your breakpoint
         dropBar.style.display = "none";     // Hide sidebar
         overlay.classList.remove('show');   // Hide overlay
         body.classList.remove('no-scroll'); // Enable body scrolling
     }
 });





const featuresLinks = document.querySelectorAll('.features-link');

featuresLinks.forEach((links) => {
  links.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    
    // Remove 'active' class from all links
    featuresLinks.forEach((link) => link.classList.remove('active'));
    
    // Add 'active' class to the clicked link
    links.classList.add('active');
  });
});

const illustrationImage = document.getElementById('illustration-image');
const illustrationHeader = document.getElementById('illustration-header');
const illustrationPara = document.getElementById('illustration-para');

function illustration1() {
   
        illustrationImage.src = './images/illustration-features-tab-1.svg';
        illustrationHeader.textContent = 'Bookmark in one click';
        illustrationPara.textContent = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.';
    
}

function illustration2() {
    
        illustrationImage.src = './images/illustration-features-tab-2.svg';
        illustrationHeader.textContent = 'Intelligent search';
        illustrationPara.textContent = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.';
   
}

function illustration3() {
    
        illustrationImage.src = './images/illustration-features-tab-3.svg';
        illustrationHeader.textContent = 'Share your bookmarks';
        illustrationPara.textContent = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.';
    
}






const faqs = document.querySelectorAll('.faq-container');

faqs.forEach(faq => {
     faq.addEventListener('click', () => {
          faq.classList.toggle('active');
     })
})


document.getElementById('btn-contact').addEventListener('click', function () {
     const emailInput = document.getElementById('email-input');
     const emailValue = emailInput.value.trim();
 
     // Regular expression for basic email validation
     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
 
     if (emailValue === '') {
         alert('Please enter an email address.');
     } else if (!emailPattern.test(emailValue)) {
         alert('Enter a valid email address.');
     } else {
         // Email is valid, show success message
         alert(`Thank you! We'll contact you at ${emailValue}`);
         
         // Clear the input field
         emailInput.value = '';
     }
 });
 
 


