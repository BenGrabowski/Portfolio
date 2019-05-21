//When page loads, hide project & contact containers

$(hideProjectContact);

function hideProjectContact(){
    $('.js-project-container').hide();
    $('.js-contact-container').hide();
}

//When user clicks the Projects button, replace main content with projects

$('.js-projects').on('click', function() {
    $('.home-wrapper').hide();
    $('.js-contact-container').hide();
    renderProjects();
    $('.js-project-container').show();
});

function renderProjects(){
    let projectDiv = `<div class="project-div">
    
    <h2 class="project-title">Golf Quiz Application</h2>
    
    <div class="project-image-wrapper">
    <img src="images/quiz-app-home.jpg" alt="quiz app home screen" class="project-image">
    <img src="images/quiz-app-question.jpg" alt="quiz app question" class="project-image">
    </div>

    <p class="description">Simple and entertaining quiz that tests users’ knowledge about the great game of golf. 
    You might even learn something new.
    </p>

    <div class="project-links">
    <a href="https://github.com/BenGrabowski/Quiz-App" target="_blank">GitHub</a><span>|</span>
    <a href="https://bengrabowski.github.io/Quiz-App/" target="_blank">Demo</a>
    </div>
    
    <section class="technology">
    <h3 class="tech-header">Technologies Used:</h3>
    <div class="tech-wrap">
        <div><img src="images/html5-white.png" class="tech-logo"><span class="tech-name">HTML</span></div>
        <div><img src="images/CSS3_logo.png" class="tech-logo"><span class="tech-name">CSS</span></div>
        <div><img src="images/js.jpg" class="tech-logo"><span class="tech-name">JavaScript</span></div>
    </div>
    </section>
    </div>`;

    $('.js-project-container').html(projectDiv);
    console.log("renderProjects ran");
}

//When user clicks on contact, display contact div

$('.js-contact').on('click', function(){
    $('.home-wrapper').hide();
    $('.js-project-container').hide();
    renderContact();
    $('.js-contact-container').show();
    $('.js-contact-container').toggleClass('height-100');
});

function renderContact(){
    let contactDiv = `<div class="contact-div">
    
    <h2 class="project-title">Contact Information</h2>
    <img src="images/cell-phones.jpg" alt="pile of old cell phones" class="contact-image">
    <p class="contact-description">If you'd like to know more about me or my experience with Web Development, you can reach me at the following.</p>
    
    <a href="mailto:gbowski30@gmail.com">gbowski30@gmail.com</a>
    <p>Phone: (763)-258-9699</p>
    <p><a href="https://www.linkedin.com/in/bengrabowski/">LinkedIn</a></p>
    <p><a href="https://github.com/BenGrabowski">GitHub</a></p>
    </div>`

    $('.js-contact-container').html(contactDiv);
}

//When user clicks on About Me link, replace home wrapper div

$('.about-me').on('click', function(){
    $('.js-project-container').hide();
    $('.js-contact-container').hide();
    $('.home-wrapper').show();
});
