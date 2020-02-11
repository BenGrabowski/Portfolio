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
    $('html,body').scrollTop(0);
});

function renderProjects(){
    let projectDiv = 
    `<div class="project-div">
    
        <h2 class="project-title">PlanIt</h2>
            
        <div class="project-image-wrapper">
            <img src="images/planit-home.jpg" alt="PlanIt home screen" class="project-image">
            <img src="images/planit-event-page.jpg" alt="PlanIt Event Page" class="project-image">
        </div>

        <p class="description">
            PlanIt is a full-stack web based application that allows users to create an account and plan events like Weddings, 
            Bachelor Parties, and more
        </p>

        <div class="project-links">
            <a href="https://github.com/BenGrabowski/plan-it" target="_blank">GitHub</a><span>|</span>
            <a href="https://plan-it.now.sh/" target="_blank">Demo</a>
        </div>
        
        <section class="technology">
            <h3 class="tech-header">Technologies Used:</h3>
            <div class="tech-wrap">
                <i class="fab fa-react"></i>
                <div class="tech"><img src="images/react.png" class="tech-logo"><span class="tech-name">React.js</span></div>
                <div class="tech"><img src="images/node.png" class="tech-logo"><span class="tech-name">Node.js</span></div>
                <div class="tech"><img src="images/postgres.png" class="tech-logo"><span class="tech-name">PostgreSQL</span></div>
                <div class="tech"><img src="images/CSS3_logo.png" class="tech-logo"><span class="tech-name">CSS</span></div>
            </div>
        </section>
    
        <h2 class="project-title">FavorEat</h2>
            
        <div class="project-image-wrapper">
            <img src="images/favoreat-home.png" alt="FavorEat home screen" class="project-image">
            <img src="images/favoreat-places.png" alt="FavorEat places list screen" class="project-image">
        </div>

        <p class="description">
            Full-stack web application that allows users to create an account and 
            add their favorite restaurants, bars, breweries, and more.
        </p>

        <div class="project-links">
            <a href="https://github.com/BenGrabowski/favoreat" target="_blank">GitHub</a><span>|</span>
            <a href="https://favoreat.now.sh/" target="_blank">Demo</a>
        </div>
        
        <section class="technology">
            <h3 class="tech-header">Technologies Used:</h3>
            <div class="tech-wrap">
                <div class="tech"><img src="images/react.png" class="tech-logo"><span class="tech-name">React.js</span></div>
                <div class="tech"><img src="images/node.png" class="tech-logo"><span class="tech-name">Node.js</span></div>
                <div class="tech"><img src="images/postgres.png" class="tech-logo"><span class="tech-name">PostgreSQL</span></div>
                <div class="tech"><img src="images/CSS3_logo.png" class="tech-logo"><span class="tech-name">CSS</span></div>
            </div>
        </section>
    
        <h2 class="project-title">Go 2 Show</h2>
            
        <div class="project-image-wrapper">
            <img src="images/Home-Screen.jpg" alt="Go 2 Show home screen" class="project-image">
            <img src="images/Results-YouTube-Map.jpg" alt="Go 2 Show content screen" class="project-image">
        </div>

        <p class="description">Web based application that uses SongKick, Youtube, and Google Maps APIs 
        to help users discover upcoming live music events.
        </p>

        <div class="project-links">
            <a href="https://github.com/BenGrabowski/Go-2-Show" target="_blank">GitHub</a><span>|</span>
            <a href="https://bengrabowski.github.io/Go-2-Show/" target="_blank">Demo</a>
        </div>
        
        <section class="technology">
            <h3 class="tech-header">Technologies Used:</h3>
            <div class="tech-wrap">
                <div class="tech"><img src="images/html5-white.png" class="tech-logo"><span class="tech-name">HTML</span></div>
                <div class="tech"><img src="images/CSS3_logo.png" class="tech-logo"><span class="tech-name">CSS</span></div>
                <div class="tech"><img src="images/js.jpg" class="tech-logo"><span class="tech-name">JavaScript</span></div>
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
    $('html,body').scrollTop(0);
});

function renderContact(){
    let contactDiv = `<div class="contact-div">
    
    <h2 class="project-title">Contact Information</h2>
    <img src="images/cell-phones.jpg" alt="pile of old cell phones" class="contact-image">
    <p class="contact-description">If you'd like to know more about me or my experience with Web Development, you can reach me at the following.</p>
    
    <p><a href="mailto:gbowski30@gmail.com" target="_blank">gbowski30@gmail.com</a></p>
    <p>Phone: (763)-258-9699</p>
    <p><a href="https://www.linkedin.com/in/bengrabowski/" target="_blank">LinkedIn</a></p>
    <p><a href="https://github.com/BenGrabowski" target="_blank">GitHub</a></p>
    </div>`

    $('.js-contact-container').html(contactDiv);
}

//When user clicks on About Me link, replace home wrapper div

$('.about-me').on('click', function(){
    $('.js-project-container').hide();
    $('.js-contact-container').hide();
    $('.home-wrapper').show();
});
