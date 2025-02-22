// project_root/js/login-register.js

document.addEventListener('DOMContentLoaded', function() {

    //  اعتبارسنجی فرم ورود
    const loginForm = document.getElementById('login-form');
    if(loginForm){
        loginForm.addEventListener('submit', function(event) {
        let isValid = true;

        const loginEmailInput = document.getElementById('login-email');
        if (loginEmailInput.value.trim() === '') {
            showError(loginEmailInput, 'لطفا ایمیل یا نام کاربری خود را وارد کنید.');
            isValid = false;
            event.preventDefault();
        } else {
            hideError(loginEmailInput);
        }

        const loginPasswordInput = document.getElementById('login-password');
        if (loginPasswordInput.value.trim() === '') {
            showError(loginPasswordInput, 'لطفا رمز عبور خود را وارد کنید.');
            isValid = false;
             event.preventDefault();
        } else {
            hideError(loginPasswordInput);
        }

        if (!isValid) {
             event.preventDefault();
        }
        });
    }


    //  اعتبارسنجی فرم ثبت نام
    const registerForm = document.getElementById('register-form');
    if(registerForm){
        registerForm.addEventListener('submit', function(event) {
            let isValid = true;

            //  نام
            const registerNameInput = document.getElementById('register-name');
            if (registerNameInput.value.trim() === '') {
                showError(registerNameInput, 'لطفا نام خود را وارد کنید.');
                isValid = false;
                event.preventDefault();
            } else {
                hideError(registerNameInput);
            }

            //  ایمیل
            const registerEmailInput = document.getElementById('register-email');
            if (!isValidEmail(registerEmailInput.value)) {
                showError(registerEmailInput, 'لطفا یک ایمیل معتبر وارد کنید.');
                isValid = false;
                event.preventDefault();
            } else {
                hideError(registerEmailInput);
            }

            // موبایل (اختیاری) -  فقط فرمت را چک می‌کنیم
            const registerMobileInput = document.getElementById('register-mobile');
            if (registerMobileInput.value.trim() !== '' && !
// project_root/js/login-register.js

// ... (ادامه از کامنت قبلی) ...

            // موبایل (اختیاری) -  فقط فرمت را چک می‌کنیم
            const registerMobileInput = document.getElementById('register-mobile');
            if (registerMobileInput.value.trim() !== '' && !isValidMobile(registerMobileInput.value)) {
                showError(registerMobileInput, 'لطفا شماره موبایل را به درستی وارد کنید (مثال: 09123456789).');
                isValid = false;
                event.preventDefault();
            } else {
                hideError(registerMobileInput);
            }

            //  رمز عبور
            const registerPasswordInput = document.getElementById('register-password');
            if (registerPasswordInput.value.trim() === '') {
                showError(registerPasswordInput, 'لطفا رمز عبور خود را وارد کنید.');
                isValid = false;
                event.preventDefault();
            } else {
                hideError(registerPasswordInput);
            }

            //  تکرار رمز عبور
            const registerPasswordConfirmInput = document.getElementById('register-password-confirm');
            if (registerPasswordConfirmInput.value.trim() === '') {
                showError(registerPasswordConfirmInput, 'لطفا تکرار رمز عبور را وارد کنید.');
                isValid = false;
                event.preventDefault();
            } else if (registerPasswordConfirmInput.value !== registerPasswordInput.value) {
                showError(registerPasswordConfirmInput, 'رمز عبور و تکرار آن یکسان نیستند.');
                isValid = false;
                event.preventDefault();
            } else {
                hideError(registerPasswordConfirmInput);
            }

            if (!isValid) {
                event.preventDefault();
            }
        });
    }


    //  تابع کمکی برای بررسی معتبر بودن شماره موبایل
    function isValidMobile(mobile) {
        const mobileRegex = /^09\d{9}$/; //  فرمت 09xxxxxxxxx
        return mobileRegex.test(mobile);
    }

     // توابع showError و hideError و isValidEmail از فایل forms.js در دسترس هستند.
});