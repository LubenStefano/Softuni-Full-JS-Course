function validate(){
    document.getElementById('company').addEventListener('change', function() {
        const companyInfo = document.getElementById('companyInfo');
        if (this.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    });
    
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault();
        validateForm();
    });
    
    function validateForm() {
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        const company = document.getElementById('company');
        const companyNumber = document.getElementById('companyNumber');
        const validDiv = document.getElementById('valid');
        let isValid = true;
    
        // Username validation
        if (/^[a-zA-Z0-9]{3,20}$/.test(username.value)) {
            username.style.border = 'none';
        } else {
            username.style.borderColor = 'red';
            isValid = false;
        }
    
        // Email validation
        if (/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) {
            email.style.border = 'none';
        } else {
            email.style.borderColor = 'red';
            isValid = false;
        }
    
        // Password validation
        if (/^\w{5,15}$/.test(password.value)) {
            password.style.border = 'none';
        } else {
            password.style.borderColor = 'red';
            isValid = false;
        }
    
        // Confirm password validation
        if (password.value === confirmPassword.value) {
            confirmPassword.style.border = 'none';
        } else {
            confirmPassword.style.borderColor = 'red';
            isValid = false;
        }
    
        // Company number validation
        if (company.checked) {
            if (/^\d{4}$/.test(companyNumber.value) && companyNumber.value >= 1000 && companyNumber.value <= 9999) {
                companyNumber.style.border = 'none';
            } else {
                companyNumber.style.borderColor = 'red';
                isValid = false;
            }
        }
    
        // Display valid div if all fields are valid
        if (isValid) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
    }
    
}