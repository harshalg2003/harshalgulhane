
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    const currentTime = new Date().getHours();
    console.log(currentTime);

    const greetingMsg = document.getElementById('greetingMsg');
    console.log(greetingMsg);
    if (currentTime < 12 ){

        greetingMsg.innerText="GOOD MORNING :)"
    }else if (currentTime >12 && currentTime < 16){

        greetingMsg.innerText="GOOD AFTERNOON :)"
    }else{

        greetingMsg.innerText="GOOD EVENING :)"
    }


    // Select all elements with the nav-btn class
    const navButtons = document.querySelectorAll('.nav-anchor');
    
    navButtons.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            // console.log(e.target)
    
            const targetId = this.getAttribute('target')
            // console.log(targetId);

            const targetElement = document.getElementById(targetId);
            e.target.classList.add('nav-active');
            // Remove the active class from all other buttons
            navButtons.forEach(otherButton => {
               if (otherButton!== e.target) {
                   otherButton.classList.remove('nav-active');
               }
            });

            const navbarHeight = document.querySelector('nav').offsetHeight;

            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        });
    });

    document.getElementById("contact-form").addEventListener("submit", (event) => {

        event.preventDefault();

        // Get the form inputs
        const email = document.getElementById("email").value
        const msg = document.getElementById("message").value


        console.log({

            email : email,
            message : msg
        })

        

        // Clear the form inputs
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        alert("Message sent Successfully")
        


    })


    


})


