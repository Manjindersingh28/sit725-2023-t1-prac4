const clickMeButton = () => {
    alert("Thanks for clicking me, Press OK to submit form,Hope you have a nice day!")
}
$(document).ready(function () {
    $('materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMeButton();
    })
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    var clickMeButton = document.getElementById('clickMeButton');
    clickMeButton.addEventListener('click', function () {
        var modalInstance = M.Modal.getInstance(document.getElementById('modal1'));
        modalInstance.open();
    });
    var formSubmitButton = document.getElementById('formSubmit');
    formSubmitButton.addEventListener('click', function () {
        var firstName = document.getElementById('first_name').value;
        var lastName = document.getElementById('last_name').value;
        var password = document.getElementById('password').value;
        var email = document.getElementById('email').value;
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Password:', password);
        console.log('Email:', email);
        var modalInstance = M.Modal.getInstance(document.getElementById('modal1'));
        modalInstance.close();
    });
});