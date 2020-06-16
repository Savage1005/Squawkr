$(document).ready(function () {
    // get references to our forms/inputs
    const loginBuild = $("form.login");
    const usernameInput = $("input#username-input");
    const passwordInput = $("input#password-input");

    //confirm there is username and password entered
    loginBuild.on("submit", function (instance) {
        instance.preventDefault();
        const memberData = {
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!memberData.username || !memberData.password) {
            return;
        }

        //If the user is found in database we run this function
        loginMember(memberData.username, memberData.password);
        usernameInput.val("");
        passwordInput.val("");
    });

    //function above does a post to our api/login route andredirects us to the users profile
    function loginMember(username, password) {
        $.post("/api/login", {
            username: username,
            password: password
        })
            .then(function () {
                window.location.replace("/profile");
            })
            .catch(function (err) {
                console.log(err);
            });
    }
})