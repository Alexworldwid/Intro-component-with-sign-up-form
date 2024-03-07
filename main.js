const inputs = document.querySelectorAll('input');


const patterns = {
    firstName: /^[a-z0-9]{1,}$/i,
    lastName: /^[a-z\d]{1,}$/i,
    mail: /^([a-z\d-\.]+)@([a-z]{5,10})\.([a-z]{3,8})$/,
    password: /^[\w\.-]{1,}$/,
};

function validate(field, regex) {
    let parentDiv = field.parentElement;
    var errorMessage = parentDiv.querySelector('.error-message');
    var errorIcon = parentDiv.querySelector('.error-icon');
    
    // style the element based on the 'value' condition
    if (regex.test(field.value)) {
        field.classList.remove('invalid');
        field.classList.add('valid');
        errorMessage.style.display = 'none';
        errorIcon.style.display = 'none';
    } else {
        field.classList.add('invalid');
        field.classList.remove('valid');
        errorMessage.style.display = 'block';
        errorIcon.style.display = 'block';
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
        // call the function with the 'input' and pattern as parameter 
        validate(e.target, patterns[e.target.name]);
    });
});


