const users = [
    {
        email: "admin01@meritsconsulting.mu",
        password: "admin01",

    },

    {
        email: "admin02@meritsconsulting.mu",
        password: "admin02",

    },


    ];

    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const buttonSubmit = document.getElementById('formButton')


    buttonSubmit.addEventListener('click', () => {
        window.location.assign("test.html")
      
    
    });