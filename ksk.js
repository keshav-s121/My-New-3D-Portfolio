document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => { 
   const rect = card.getBoundingClientRect();
   card.computedStyleMap.setproperty('--x', `${e.clientX - rect.left}px`);
    card.computedStyleMap.setproperty('--y', `${e.clientY - rect.top}px`);
   
    });
});
 const video1 = document.getElementById('projectVideo1');
    const video2 = document.getElementById('projectVideo2');
    const video3 = document.getElementById('projectVideo3');
    const video4 = document.getElementById('projectVideo4');

    const videoList =[video1, video2, video3, video4];

    videoList.forEach (function(video){
        video.addEventListener("mouseover", function(){
            video.play()
        })
        video.addEventListener("mouseout", function(){
        video.pause();
    })
    })



const headerContactBtn = document.querySelector('.contant-btn');
const bentoContactBtn = document.querySelector('.btn');
const contactSection = document.querySelector('.contact-section');


const scrollToContact = () => {
    contactSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
};

if (headerContactBtn) {
    headerContactBtn.addEventListener('click', scrollToContact);
}

if (bentoContactBtn) {
    bentoContactBtn.addEventListener('click', scrollToContact);
}



document.addEventListener("DOMContentLoaded", function () {
   
    emailjs.init("563gPplBNGutL5ob8"); 

    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    const submitBtn = document.getElementById("submitBtn");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;

            
            emailjs.sendForm("service_i51ta6e", "template_5x40qft", this)
                .then(function() {
                    
                    successMessage.style.display = 'block';
                    contactForm.reset(); 
                    submitBtn.innerText = "Send Message";
                    submitBtn.disabled = false;

                   
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 3000);

                }, function(error) {
                    
                    console.log('FAILED...', error);
                    alert("Failed to send: " + JSON.stringify(error));
                    submitBtn.innerText = "Send Message";
                    submitBtn.disabled = false;
                });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const viewer = document.querySelector('spline-viewer');

    viewer.addEventListener('load-complete', () => {
       const shadowRoot = viewer.shadowRoot;
       const logo = shadowRoot.getElementById('logo');
        
        if (logo) {
            logo.style.display = 'none';
        }
    });
});
